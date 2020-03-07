import React, { useState } from 'react';
import GameContext from './context';
import { gameConfig } from './config';
import Game from './views/Game';
import { UI } from './components';

// Import styles
import './sass/virusgame.scss';

export default function VirusGame() {
  const [gameState, setGameState] = useState(gameConfig);
  return (
    <div className="game__view">
      <GameContext.Provider value={gameState}>
        <UI setGameState={setGameState} game={gameState} />
        <Game setGameState={setGameState} />
      </GameContext.Provider>
    </div>
  );
}
