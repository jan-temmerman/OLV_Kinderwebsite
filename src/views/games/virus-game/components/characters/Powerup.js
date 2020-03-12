import * as PIXI from 'pixi.js';
import AI from './AI';
import { imageConfig } from '../../config';

export default class Powerup extends AI {
  constructor(renderer, stage) {
    super(renderer, stage);
    const texture = PIXI.Texture.from(imageConfig.powerUp);
    this.sprite = PIXI.Sprite.from(texture);

    this.type = 'powerup';

    this.sprite.width = 56;
    this.sprite.height = 56;
    this.sprite.anchor.set(0.5);

    this.sprite.position.x = Math.floor(Math.random() * (renderer.width - 56) + 56);
    this.sprite.position.y = 0;

    stage.addChild(this.sprite);
  }
}
