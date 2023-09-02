// camera.js

// Constants for screen dimensions
const SCREEN_WIDTH = 800; // Adjust to your desired screen width
const SCREEN_HEIGHT = 600; // Adjust to your desired screen height

// Camera class
class Camera {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = SCREEN_WIDTH;
    this.height = SCREEN_HEIGHT;
    this.followedPlayers = []; // List of players to follow
  }

  // Add a player to be followed by the camera
  followPlayer(player) {
    this.followedPlayers.push(player);
  }

  // Update the camera position based on followed players
  update() {
    if (this.followedPlayers.length === 0) {
      // No players to follow, center the camera on the map
      this.x = 0;
      this.y = 0;
    } else if (this.followedPlayers.length === 1) {
      // Only one player left, center the camera on that player
      const player = this.followedPlayers[0];
      this.x = player.x - this.width / 2 + player.width / 2;
      this.y = player.y - this.height / 2 + player.height / 2;
    } else {
      // Follow living players by finding the bounding box
      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;

      for (const player of this.followedPlayers) {
        if (!player.isDead) {
          minX = Math.min(minX, player.x);
          minY = Math.min(minY, player.y);
          maxX = Math.max(maxX, player.x + player.width);
          maxY = Math.max(maxY, player.y + player.height);
        }
      }

      this.x = Math.max(0, minX - this.width / 2);
      this.y = Math.max(0, minY - this.height / 2);
      this.x = Math.min(this.x, maxX - this.width);
      this.y = Math.min(this.y, maxY - this.height);
    }
  }
}

export { Camera };
