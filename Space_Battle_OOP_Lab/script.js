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

const player = new Spaceship('human', 20, 5, 0.7);

const alienHull = [3, 4, 5, 6];
const alienFirepower = [2, 3, 4];
const alienAccuracy = [0.6, 0.7, 0.8];

const random = array => Math.floor(Math.random() * array.length);

const randomAlien = () => {
  let alien = new Spaceship('alien', random(alienHull), random(alienFirepower), random(alienAccuracy));
  return alien;
}

const game = rounds => {
  let shipsDestroyed = 0;
  const alien = randomAlien();
  while (shipsDestroyed < rounds) {
    round(player, alien);
    if (player.hull > 0) {
      shipsDestroyed++
      // prompt attack? if yes - continue, else the game is over
    } else {
      console.log('You lost');
    }
  }
  if (shipsDestroyed === 6) {
    console.log('You won!');
  } else {
    console.log('You lost!');
  }

}