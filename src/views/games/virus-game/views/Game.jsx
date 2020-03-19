import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import { gameConfig } from '../config';
import { Player, Virus } from '../components';
import { Spawner } from '../helpers';
import GameContext from '../context';
import { Powerup } from '../components/characters';

const virusSpawner = new Spawner();
const powerupSpawner = new Spawner();

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.setGameState = props.setGameState;
  }

  componentDidMount() {
    this.gameState = this.context;

    //* Declaration of functions to be used in game context
    /**
    * Updates both local gameState and context
    * * Is a workaround for local state not updating with context
    * @param {Object} newState new state values for the object
    */
    const updateGameState = (newState) => {
      this.gameState = newState;
      this.setGameState(newState);
    };

    /**
     * Spawns a new virus and adds it to the array of viruses
     */
    const spawnVirus = () => {
      if (this.aiObjects.length < this.gameState.maxViruses) {
        this.aiObjects.push((new Virus(this.app.renderer, this.app.stage)));
      }
    };

    /**
     * Spawns and adds a new powerup to the scene
     */
    const spawnPowerup = () => {
      this.aiObjects.push((new Powerup(this.app.renderer, this.app.stage)));
    };

    /**
     * Check if the game level has to be increased according to configured variables
     */
    const checkForLevelIncrease = () => {
      const {
        score, maxViruses, level, scorePerLevel,
      } = this.gameState;
      if (score % scorePerLevel === 0) {
        updateGameState({
          ...this.gameState,
          score: score + 1,
          maxViruses: maxViruses + 2,
          level: level + 1,
        });
      }
    };

    /**
     * Removes all viruses from the game canvas.
     */
    const removeObjectsFromScreen = () => {
      const objectsToRemove = this.app.stage.children.filter((child) => child.cursor !== 'pointer');
      objectsToRemove.forEach((object) => {
        this.app.stage.removeChild(object);
      });
      this.aiObjects = [];
    };

    /**
     * Resets the game window. Used to reset viruses after player hit.
     */
    const resetGameWindow = () => {
      updateGameState({
        ...this.gameState,
        playing: false,
      });
      this.player.setDraggable(false);
      removeObjectsFromScreen();
      if (this.gameState.lives === 0) {
        this.player.reset();
      }
    };

    /**
     * Resumes the game window
     */
    const resumeGameWindow = () => {
      updateGameState({
        ...this.gameState,
        playing: true,
      });
      this.player.setDraggable(true);
    };

    /**
     * Logic that has to be handled during every game loop.
     */
    const gameLoop = () => {
      const { renderer, view: { width: gameWidth, height: gameHeight } } = this.app;
      this.player.containCharacter(renderer);
      if (this.gameState.playing) {
        // Logic for each virus
        this.aiObjects.forEach((character, i) => {
          character.animate();
          // Check for player collision BEFORE removal
          if (character.checkPlayerCollision(this.player)) {
            if (character.type === 'virus') {
              this.aiObjects.splice(i, 1);
              character.sprite.destroy();
              if (this.gameState.lives > 0) {
                updateGameState({
                  ...this.gameState,
                  lives: this.gameState.lives - 1,
                });
                this.player.setTexture('wounded');
              } else {
                this.player.setTexture('dead');
                updateGameState({
                  ...this.gameState,
                  playing: false,
                  gameOver: true,
                });
                this.app.stop();
              }
              return;
            } if (character.type === 'powerup') {
              this.aiObjects.splice(i, 1);
              character.sprite.destroy();
              this.player.setTexture('default');
              if (this.gameState.lives < 2) {
                updateGameState({
                  ...this.gameState,
                  lives: this.gameState.lives + 1,
                });
              } else {
                updateGameState({
                  ...this.gameState,
                  score: this.gameState.score + 10,
                });
              }
              return;
            }
          }

          if (character.checkCollision({ gameWidth, gameHeight })) {
            this.aiObjects.splice(i, 1);
            updateGameState({
              ...this.gameState,
              score: this.gameState.score + 1,
            });
            checkForLevelIncrease();
            character.sprite.destroy();
          }
        });
      }
    };

    /**
     * Initialize a new game
     */
    const initGame = () => {
      // Reset the full game window before creating a new game
      resetGameWindow();
      updateGameState(gameConfig.game);
      this.aiObjects = [];
      // Start a new game
      this.player.setDraggable(true);
      virusSpawner.start(spawnVirus, 500);
      updateGameState({
        ...this.gameState,
        hasStarted: true,
        playing: true,
      });
      virusSpawner.start(spawnVirus, this.difficulty.spawnInterval);
      powerupSpawner.start(spawnPowerup, 5000);
      this.app.ticker.add(gameLoop);
    };

    // Global variables for the game
    updateGameState({
      ...this.gameState,
      startGame: () => { initGame(); },
      updateState: () => { updateGameState(); },
    });
    this.app = new PIXI.Application(gameConfig.window);
    this.gameCanvas.appendChild(this.app.view);
    this.player = new Player(this.app.renderer, this.app.stage);
  }

  componentWillUnmount() {
    this.app.stop();
  }

  render() {
    return (
      <div ref={(thisDiv) => { this.gameCanvas = thisDiv; }} />
    );
  }
}

// Add context type to Game class
Game.contextType = GameContext;
