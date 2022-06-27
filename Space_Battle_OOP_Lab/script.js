class Spaceship {
  constructor(type, hull, firepower, accuracy) {
    this.type = type;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  attack(enemy) {
    Math.random() > this.accuracy ? enemy.hull -= this.firepower : false;
  }
}

const round = (player, alien) => {
  while(player.hull > 0 || alien.hull > 0) {
    if (player.attack(alien)) {
      console.log('attaboy!');
      if (alien.hull > 0) {
        if (alien.attack(player)) {
          console.log('You have been hit!');
        }
      }
    } else if (alien.attack(player)) {
      console.log('You have been hit!');
    }
  }
}