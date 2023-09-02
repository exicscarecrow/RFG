import { Player } from './player.js';
import { checkCollision } from './collision.js';
import { Camera } from './camera.js';
//import { levelManager } from 'levels.js';




// Get the canvas and 2D rendering context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Clear the canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Render game objects
// ...


// Define game dimensions
const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;


// Initialize game components
const player = new Player(canvas);
// const collision = new checkCollision();
const camera = new Camera(canvas);


// Define the game loop
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Update game logic
    player.update();
    camera.followPlayer(player);

    // Render game elements
    platformManager.drawPlatforms();
    player.draw();

    // Request the next frame
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
export{player};

export{camera};
