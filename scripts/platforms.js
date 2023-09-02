// platforms.js

// Platform class
class Platform {
    constructor(x, y, width, height, color) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
    }
  
    // Draw the platform
    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  
    // Add any platform-specific methods or behavior here
  }
  
  // RegularPlatform class (inherits from Platform)
  class RegularPlatform extends Platform {
    constructor(x, y, width, height) {
      super(x, y, width, height, 'black');
    }
  
    // Add regular platform-specific methods or behavior here
  }
  
  // BouncyPlatform class (inherits from Platform)
  class BouncyPlatform extends Platform {
    constructor(x, y, width, height) {
      super(x, y, width, height, 'green');
    }
  
    // Add bouncy platform-specific methods or behavior here
  
    // Handle player interaction when they land on the platform
    handlePlayerCollision(player) {
      if (player.y + player.height <= this.y && player.yVel > 0) {
        // Player is landing on top of the platform
        // Apply an upward force to simulate a bounce
        player.jump(bounceForce); // You can define bounceForce as needed
      }
    }
  }
  
  // SlickPlatform class (inherits from Platform)
  class SlickPlatform extends Platform {
    constructor(x, y, width, height) {
      super(x, y, width, height, 'blue');
    }
  
    // Add slick platform-specific methods or behavior here
  
    // Handle player interaction when they land on the platform
    handlePlayerCollision(player) {
      // Modify player movement characteristics (e.g., increase slide or decrease friction)
      player.applySlickEffect();
    }
  }
  
  // Create a function to generate platforms of different types
  function generatePlatform(type, x, y, width, height) {
    switch (type) {
      case 'regular':
        return new RegularPlatform(x, y, width, height);
      case 'bouncy':
        return new BouncyPlatform(x, y, width, height);
      case 'slick':
        return new SlickPlatform(x, y, width, height);
      default:
        return new Platform(x, y, width, height, 'defaultColor');
    }
  }
  
  export { generatePlatform };
  