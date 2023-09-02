// Function to check collision between two rectangular objects
function checkCollision(rect1, rect2) {
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    );
  }
  
  // Function to check collision between a player and a platform
  function checkPlayerPlatformCollision(player, platform) {
    return (
      player.x < platform.x + platform.width &&
      player.x + player.width > platform.x &&
      player.y + player.height >= platform.y && // Check player's bottom side against platform top
      player.y < platform.y + platform.height
    );
  }
  
  // Function to check collision between an item and a platform
  function checkItemPlatformCollision(item, platform) {
    return (
      item.x < platform.x + platform.width &&
      item.x + item.width > platform.x &&
      item.y + item.height >= platform.y && // Check item's bottom side against platform top
      item.y < platform.y + platform.height
    );
  }
  
  // Function to handle player-item collision with a grabItem button check
function handlePlayerItemCollision(player, item, grabItemButtonPressed) {
    if (checkCollision(player, item) && grabItemButtonPressed) {
      // Implement logic for what happens when the player collides with an item
      // and the grabItem button is pressed, for example, pick up the item
      player.pickUpItem(item);
    }
  }
  
  
  // Function to handle player-platform collision
  function handlePlayerPlatformCollision(player, platform) {
    if (checkPlayerPlatformCollision(player, platform)) {
      // Implement logic for what happens when the player collides with a platform
      // For example, stop player's upward movement (if jumping)
    }
  }
  
  // Function to handle item-platform collision
  function handleItemPlatformCollision(item, platform) {
    if (checkItemPlatformCollision(item, platform)) {
      // Implement logic for what happens when an item collides with a platform
      // For example, make the item stop falling
    }
  }
  
  // Export the functions so they can be used in other modules
  export {
    checkCollision,
    checkPlayerPlatformCollision,
    checkItemPlatformCollision,
    handlePlayerItemCollision,
    handlePlayerPlatformCollision,
    handleItemPlatformCollision,
  };
  