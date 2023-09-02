// grenade.js

import { Item } from './items.js';

// Grenade class (inherits from Item)
class Grenade extends Item {
  constructor(x, y) {
    // Define grenade properties such as width, height, and color
    const width = 15;
    const height = 15;
    const color = 'green'; // Customize the color as needed

    // Call the constructor of the parent class (Item)
    super(x, y, width, height, color);

    // Additional grenade-specific properties can be defined here
    this.isArmed = false; // Indicates whether the grenade is armed
  }

  // Implement the "explode" method
  explode() {
    if (this.isArmed) {
      // Perform explosion logic
      console.log('Grenade exploded!');
      // Implement explosion effects (e.g., damage enemies, create visual effects)
    } else {
      console.log('Grenade is not armed. Arm it before exploding.');
    }
  }

  // Additional grenade-specific methods or behavior can be added here
  // For example, a method to arm the grenade
  arm() {
    this.isArmed = true;
    console.log('Grenade armed.');
  }
}

export { Grenade };
