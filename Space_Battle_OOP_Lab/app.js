const playerHull = document.querySelector('#playerHull');
const enemyHull = document.querySelector('#enemyHull');
const enemyFirepower = document.querySelector('#enemyFirepower');
const enemyAccuracy = document.querySelector('#enemyAccuracy');

class Spaceship {
  constructor(type, hull, firepower, accuracy) {
    this.type = type;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
  async attack(enemy) {
    if (Math.random() < this.accuracy) {
      enemy.hull -= this.firepower;
      await timeout(1500)
      console.log(`+${this.firepower} Damage`);
    } else {
      await timeout(1500)
      console.log('Miss');
    }
  }
}

const round = async (player, alien) => {
  while(player.hull > 0 && alien.hull > 0) {
    updateDOM(player, alien);
    await timeout(1500)
    console.log(`Attack!`);
    await player.attack(alien);
    updateDOM(player, alien);
    if (alien.hull > 0) {
      await timeout(1500)
      console.log('Alien attack!');
      alien.attack(player);
      await timeout(1500);
      updateDOM(player, alien);
    }
  }
  await timeout(1500);
};

const player = new Spaceship('human', 20, 5, 0.7);

const alienHull = [3, 4, 5, 6];
const alienFirepower = [2, 3, 4];
const alienAccuracy = [0.6, 0.7, 0.8];

const random = array => Math.floor(Math.random() * array.length);

const randomAlien = () => {
  let alien = new Spaceship('alien', alienHull[random(alienHull)], alienFirepower[random(alienFirepower)], alienAccuracy[random(alienAccuracy)]);
  return alien;
}

const updateDOM = (player, enemy) => {
  playerHull.innerHTML = player.hull;
  enemyHull.innerHTML = enemy.hull;
  enemyFirepower.innerHTML = enemy.firepower;
  enemyAccuracy.innerHTML = enemy.accuracy;
}

const game = async (rounds) => {
  let i = 1;
  for (i; i <= rounds; i++) {
    await timeout(1500)
    console.log(`Round ${i}`);
    await round(player, randomAlien());
    if (player.hull > 0) {
      console.log('Alien Spaceship destroyed!');
      if (i === rounds) {
        console.log('You won!');
        break;
      }
    } else {
      console.log('You lost!');
      break;
    }
    await timeout(1500);
    let attack = prompt('Attack [1] or Retreat [2]?', 1)
    if (attack != 1) {
      console.log('GAME OVER!');
      break;
    }
  }
}

function timeout (ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms);
  })
}

game(6);
