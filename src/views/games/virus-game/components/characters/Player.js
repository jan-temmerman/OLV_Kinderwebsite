import * as PIXI from 'pixi.js';
import { imageConfig } from '../../config';

export default class Player {
  constructor(renderer, stage = PIXI.Container) {
    // Set default values
    this.hit = 0;
    this.dragging = false;
    this.data = null;
    this.parent = null;
    this.renderer = renderer;

    // Sprite setup from image
    const texture = PIXI.Texture.from(imageConfig.player.default);
    const sprite = new PIXI.Sprite(texture);
    sprite.interactive = true;
    sprite.buttonMode = true;
    sprite.anchor.set(0.5);

    sprite.x = renderer.width / 2;
    sprite.y = renderer.height / 2;

    sprite.width = 64;
    sprite.height = 64;

    // Add Sprite to stage
    this.sprite = sprite;
    this.setDraggable(true);
    this.stage = stage;
    stage.addChild(sprite);
  }

  setDraggable(state) {
    if (state) {
      this.sprite
        .on('pointerdown', this.onDragStart)
        .on('pointerup', this.onDragEnd)
        .on('pointerupoutside', this.onDragEnd)
        .on('pointermove', this.onDragMove);
    } else {
      this.sprite
        .off('pointerdown', this.onDragStart)
        .off('pointerup', this.onDragEnd)
        .off('pointerupoutside', this.onDragEnd)
        .off('pointermove', this.onDragMove);
    }
  }

  // Change texture
  setHappy() {
    const newTexture = PIXI.Texture.from(imageConfig.player.default);
    this.sprite.texture = newTexture;
  }

  setWounded() {
    const newTexture = PIXI.Texture.from(imageConfig.player.wounded);
    this.sprite.texture = newTexture;
  }

  setDead() {
    const newTexture = PIXI.Texture.from(imageConfig.player.dead);
    this.sprite.texture = newTexture;
  }

  // Reset position
  reset() {
    this.sprite.x = this.renderer.width / 2;
    this.sprite.y = this.renderer.height / 2;
    const texture = PIXI.Texture.from(imageConfig.player.default);
    this.texture = texture;
  }

  // Enable dragging
  onDragStart(event) {
    this.dragging = true;
    this.data = event.data;
  }

  // End dragging
  onDragEnd() {
    this.dragging = false;
    this.data = null;
  }

  // Update position on drag move
  onDragMove() {
    if (this.dragging) {
      const newPos = this.data.getLocalPosition(this.parent);
      this.x = newPos.x;
      this.y = newPos.y;
    }
  }

  // Contain character within container
  containCharacter(renderer) {
    this.contain(this.sprite, {
      x: 20, y: 20, width: renderer.width + 35, height: renderer.height + 35,
    });
  }

  contain(sprite, container) {
    let collision = null;

    // Left
    if (sprite.x < container.x) {
      sprite.x = container.x;
      collision = 'left';
    }

    // Top
    if (sprite.y < container.y) {
      sprite.y = container.y;
      collision = 'top';
    }

    // Right
    if (sprite.x + sprite.width > container.width) {
      sprite.x = container.width - sprite.width;
      collision = 'right';
    }

    // Bottom
    if (sprite.y + sprite.height > container.height) {
      sprite.y = container.height - sprite.height;
      collision = 'bottom';
    }

    // Return the `collision` value
    return collision;
  }
}
