import * as PIXI from 'pixi.js';
import { imageConfig } from '../../config';

/**
 * Class for virus objects
 */
export default class AI {
  constructor(renderer, stage = PIXI.Container) {
    // Set Default values
    this.speed = 0;
    this.turningSpeed = 0;
    this.direction = 0;
    this.sprite = null;

    // Setup sprite from image
    // const texture = PIXI.Texture.from(imageConfig.viruses[Math.floor(Math.random() * imageConfig.viruses.length)]);
    // const sprite = PIXI.Sprite.from(texture);

    // Setup direction and speed
    this.direction = Math.random() * Math.PI * 2;
    this.turningSpeed = Math.random() - 0.8;
    this.speed = 2 + Math.random() * 2;

    // Add to stage
    // this.sprite = sprite;
    this.stage = stage;

    // stage.addChild(this.sprite);
  }

  animate() {
    const turnAdd = Math.random() < 0.5 ? 0.1 : -0.1;
    this.direction += this.turningSpeed * turnAdd;
    this.sprite.angle += this.direction;
    this.sprite.position.x += Math.cos(this.direction) * this.speed;
    this.sprite.position.y += Math.abs(Math.sin(this.direction)) * this.speed;
  }

  checkCollision(bounds) {
    if (this.sprite.position.x <= 0 || this.sprite.position.x >= (bounds.gameWidth - this.sprite.width)) this.direction *= -1;
    if (this.sprite.position.y <= this.sprite.height * -1 || this.sprite.position.y >= bounds.gameHeight) return true;
    return false;
  }

  checkPlayerCollision(player) {
    const virusBounds = this.sprite.getBounds();
    const playerBounds = player.sprite.getBounds();

    return virusBounds.x + virusBounds.width >= playerBounds.x
          && virusBounds.x <= playerBounds.x + playerBounds.width
          && virusBounds.y + virusBounds.height >= playerBounds.y
          && virusBounds.y <= playerBounds.y + playerBounds.height;
  }
}
