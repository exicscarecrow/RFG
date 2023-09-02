// Import external modules or files
import { checkCollision } from './collision.js'; // Import the necessary collision functions
import { Item } from './items/items.js'; // Import the Item class from items.js if you have one

// Player class
class Player {
    constructor(canvas, x, y) {
      // Player position and dimensions
      this.canvas = canvas;
      this.x = x || 50; // Default X position
      this.y = y || canvas.height - 100; // Default Y position
      this.width = 50;
      this.height = 50;
      
  
      // Player speed
      this.speed = 5;
  
      // Player state
      this.isJumping = false;
      this.isShooting = false;
  
      // Items the player is holding
      this.heldItem = null;
    }
  
    // // Move player left
    // moveLeft() {
    //   this.x -= this.speed;
    // }
  
    // // Move player right
    // moveRight() {
    //   this.x += this.speed;
    // }
  
    // Define a function to handle player movement
    movement(direction, player) {
      if (direction === "left") {
        player.x -= player.speed; // Move player left
      } else if (direction === "right") {
        player.x += player.speed; // Move player right
      }
    }


    // Make the player jump
    jump() {
      if (!this.isJumping) {
        // Apply jump logic here (e.g., change Y velocity)
        // Set this.isJumping to true
      }
    }
  
    // Handle shooting
    shoot() {
      if (!this.isShooting) {
        // Implement shooting logic here
        // Set this.isShooting to true
        // Change player size temporarily to indicate shooting
        this.changeSizeForShooting();
      }
    }
  
    // Handle picking up an item
    pickUpItem(item) {
      // Check if the player can pick up the item (e.g., within a certain range)
      if (item && !this.heldItem) {
        this.heldItem = item;
        // Position the item in front of the player
        item.x = this.x + this.width;
        item.y = this.y - item.height;
      }
    }
  
    // Change player size for shooting effect
    changeSizeForShooting() {
      // Implement size change logic here (e.g., change width and height temporarily)
      // Reset size after a brief delay to indicate shooting effect
      setTimeout(() => {
        // Reset player size here
        this.isShooting = false;
      }, 200); // Adjust the delay as needed
    }
  
    // Update player logic (called in the game loop)
    update() {
      // Update player state and position here
    }
  
    // Draw the player on the canvas
    draw() {
      ctx.fillStyle = "#3498db"; // Light blue color
      ctx.fillRect(this.x, this.y, this.width, this.height);
  
      // Draw held item if available
      if (this.heldItem) {
        // Implement item drawing logic here (e.g., draw the item in front of the player)
      }
    }
  }
  export{Player}