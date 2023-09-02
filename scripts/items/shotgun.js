// shotgun.js

import { Item } from './items.js';

// Shotgun class (inherits from Item)
class Shotgun extends Item {
  constructor(x, y) {
    // Define shotgun properties such as width, height, and color
    const width = 30;
    const height = 10;
    const color = 'gray'; // Customize the color as needed

    // Call the constructor of the parent class (Item)
    super(x, y, width, height, color);

    // Additional shotgun-specific properties can be defined here
    this.ammo = 6; // Initial ammo count
  }

  // Implement the "shoot" method
  shoot() {
    if (this.ammo > 0) {
      // Perform shooting logic
      console.log('Shotgun fired!');
      this.ammo--; // Decrease ammo count
    } else {
      console.log('Out of shotgun ammo!');
    }
  }

  // Implement the "reload" method
  reload() {
    // Implement reloading logic (e.g., reset ammo count)
    console.log('Shotgun reloaded.');
    this.ammo = 6; // Reload with 6 rounds
  }

  // Additional shotgun-specific methods or behavior can be added here
}

export { Shotgun };
