import * as PIXI from 'pixi.js';
import { imageConfig } from '../../config';

/**
 * Class for virus objects
 */
export default class Virus {
    constructor(renderer, stage = PIXI.Container) {
    // Set Default values
        this.speed = 0;
        this.turningSpeed = 0;
        this.direction = 0;

        // Setup sprite from image
        const sprite = PIXI.Sprite.from(imageConfig.viruses[Math.floor(Math.random() * imageConfig.viruses.length)]);
        // sprite.scale.set(0.03);
        sprite.width = 56;
        sprite.height = 56;
        sprite.anchor.set(0.5);

        sprite.position.x = Math.floor(Math.random() * (renderer.width - 56) + 56);
        sprite.position.y = 0;

        // Setup direction and speed
        this.direction = Math.random() * Math.PI * 2;
        this.turningSpeed = Math.random() - 0.8;
        this.speed = 2 + Math.random() * 2;

        // Add to stage
        this.sprite = sprite;
        this.stage = stage;

        stage.addChild(sprite);
    }

    animateVirus() {
        const turnAdd = Math.random() < 0.5 ? 0.1 : -0.1;
        this.direction += this.turningSpeed * turnAdd;
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
