// levels.js

import { generatePlatform } from './platforms.js';

// Constants for screen dimensions
const SCREEN_WIDTH = 800; // Adjust to your desired screen width
const SCREEN_HEIGHT = 600; // Adjust to your desired screen height

// Constants for platform generation
const PLATFORM_HEIGHT = 20; // Adjust the platform height as needed
const MIN_PLATFORM_WIDTH = 50; // Minimum platform width
const MAX_PLATFORM_WIDTH = 200; // Maximum platform width
const PLATFORM_TYPES = ['regular', 'bouncy', 'slick']; // Add more types as needed
const MIN_PLATFORMS_PER_LEVEL = 3; // Minimum number of platforms per level
const MAX_PLATFORMS_PER_LEVEL = 6; // Maximum number of platforms per level
const FLOOR_HEIGHT = 20; // Height of the floor

// Function to generate a random platform width
function getRandomPlatformWidth() {
  return Math.floor(
    Math.random() * (MAX_PLATFORM_WIDTH - MIN_PLATFORM_WIDTH + 1) + MIN_PLATFORM_WIDTH
  );
}

// Function to generate a random platform type
function getRandomPlatformType() {
  const randomIndex = Math.floor(Math.random() * PLATFORM_TYPES.length);
  return PLATFORM_TYPES[randomIndex];
}

// Function to create a single platform
function createPlatform(x, y, width, type) {
  return generatePlatform(type, x, y, width, PLATFORM_HEIGHT);
}

// Function to generate platforms for a level
function generateLevelPlatforms() {
  const numPlatforms = Math.floor(
    Math.random() * (MAX_PLATFORMS_PER_LEVEL - MIN_PLATFORMS_PER_LEVEL + 1) +
      MIN_PLATFORMS_PER_LEVEL
  );

  const platforms = [];

  // Create the floor
  platforms.push(new RegularPlatform(0, SCREEN_HEIGHT - FLOOR_HEIGHT, SCREEN_WIDTH, FLOOR_HEIGHT));

  let prevX = 0;

  for (let i = 0; i < numPlatforms; i++) {
    const platformWidth = getRandomPlatformWidth();
    const platformType = getRandomPlatformType();

    // Ensure that platforms do not overlap
    const platformX = prevX + 20; // Add some spacing between platforms
    const platformY = Math.floor(Math.random() * (SCREEN_HEIGHT - 2 * PLATFORM_HEIGHT)) + PLATFORM_HEIGHT;

    platforms.push(createPlatform(platformX, platformY, platformWidth, platformType));
    prevX = platformX + platformWidth;
  }

  return platforms;
}

// Export the function to generate level platforms
export { generateLevelPlatforms };
