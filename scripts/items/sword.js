// sword.js

import { Item } from './items.js';

// Sword class (inherits from Item)
class Sword extends Item {
  constructor(x, y) {
    // Define sword properties such as width, height, and color
    const width = 30;
    const height = 5;
    const color = 'silver'; // Customize the color as needed

    // Call the constructor of the parent class (Item)
    super(x, y, width, height, color);

    // Additional sword-specific properties can be defined here
    this.isThrown = false; // Indicates whether the sword is thrown
    this.damage = 20; // Amount of damage dealt to opponents
  }

  // Implement the "swing" method
  swing() {
    // Perform swinging (e.g., melee attack) logic
    console.log('Sword swung!');
    // Implement any effects or actions related to swinging
  }

  // Method to handle damage to opponents when thrown
  dealDamageToOpponent(opponent) {
    if (this.isThrown) {
      // Deal damage to the opponent
      opponent.takeDamage(this.damage);
      console.log(`Sword dealt ${this.damage} damage to the opponent.`);
    }
  }

  // Additional sword-specific methods or behavior can be added here
}

export { Sword };
