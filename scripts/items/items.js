// items.js

import { checkCollision, handlePlayerItemCollision, handleItemPlatformCollision } from '../collision.js';

// Item class (base class)
class Item {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  // Draw the item
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  // Common item methods
  shoot() {
    // Implement shooting logic
  }

  reload() {
    // Implement reloading logic
  }

  swing() {
    // Implement swinging (e.g., melee attack) logic
  }

  // Handle item collision with the player
  handlePlayerCollision(player) {
    handlePlayerItemCollision(player, this);
  }

  // Handle item collision with platforms
  handlePlatformCollision(platforms) {
    for (const platform of platforms) {
      if (checkCollision(this, platform)) {
        handleItemPlatformCollision(this, platform);
      }
    }
  }

  // Additional common item methods or behavior can be added here
}

export { Item };
