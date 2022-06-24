/*
 * Instructions:
 * Work through the following prompts. Prompts marked with "We Do", we will work
 * on together, as a class; prompts marked with "You Do", you will be given time
 * to work through on your own.
 *
 * Tip: comment out your solution to each prompt before moving on to the next
 * one! This will keep your console clear.
 */

/*
 * Prompt 1: We Do
 *
 * Define a class for a Car. Your Car class should have the following
 * properties:
 *
 *    - make
 *    - model
 *    - color
 *
 * Your Car class should have the following methods:
 *
 *    - drive: print 'vroom vroom' to the console
 *
 * Once you create your class definition create two instances.
 */
// class Car{
//   constructor(make, model, color) {
//     this.make = make;
//     this.model = model;
//     this.color = color;
//   }
//   drive() {
//     console.log('vroom, vroom')
//   }
//   stop() {
//     console.log('car is idle')
//   }
// }

// const pepe = new Car('Subaru','Impreza', 'midnight blue');
// const valkyrie = new Car('Hyundai', 'Santa Fe', 'Iridescent pink');

// console.log(valkyrie.color);
// valkyrie.drive();
// valkyrie.stop();

/*
 * Prompt 2: You Do
 *
 * Define a class for your favorite animal (dog, cat, giraffe, etc). Give your
 * class 3 attributes and two methods.
 *
 * After you've defined your class, create 3 instances.
 */
class Cat {
  constructor(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
  }
  goMeow() {
    console.log('Meow');
  }

}



/*
 * Prompt 3: We Do
 *
 * We're going to modify our Car class from the previous prompt and extend it to
 * create a Toyota class:
 *
 *   - Make a Car class with make, model, and color properties.
 *   - Extend your Car class to create a Toyota class. The make property will always
 *     be 'Toyota'. Add a drive method to your Toyota class.
 *
 * Make an instance of your Toyota class.
 */

class Car{
  constructor(make, model, fuelType) {
    this.make = make;
    this.model = model;
    this.fuelType = fuelType;
  }
  drive() {
    console.log('vroom, vroom');
    }
}

class Toyota extends Car{
    constructor(model, fuelType, color) {
      super('Toyota', model, fuelType);
      this.color = color;
    }
}

  const prius = new Toyota('Prius', 'hybrid', 'black');
  console.log(prius.make, prius.model, prius.fuelType, prius.color);

/* You Do:
 *
 * Once we've completed the above, work through the following changes to your
 * Car and Toyota classes:
 *
 *   - move the color property to your Toyota class
 *   - move the drive method to your Car class
 *   - add a property to your Toyota class
 *   - add a property to your Car class and "fill it in" for your Toyota class
 */

  // Car.prototype.drive = function(){
  //   console.log('vroom, vroom');
  // }

  // prius.drive();



/*
 * Prompt 4: You Do
 *
 * Define and Animal class with the following properties and methods:
 *
 *   - group (Invertebrates, Fish, Amphibians, Reptiles, Birds, and Mammals)
 *   - eat: log "yum yum" to the console
 *   - sleep: log "zzzzz" to the console
 *
 * Modify your animal from the previous prompt so that it extends your new
 * Animal class.
 *
 * Create an instance of your animal class (the one that extends the Animal
 * class).
 */
class Animal {
  constructor(group) {
    this.group = group;
  }
  eat() {
    console.log('yum yum')
  }
  sleep() {
    console.log('zzzzz')
  }
}

class Mammal extends Animal {
  constructor(group, order) {
    super(group);
    this.order = order;
  }
}

const human = new Mammal('Mammals', 'Primates');

console.log(human.group, human.order);
human.eat();
human.sleep();

/*
 * Prompt 5: You Do
 *
 * Define a Card class with the following properties:
 *
 *   - suit (hearts, spades, clubs, diamonds)
 *   - rank (Ace, 2, 3, 4, .. Jack, King, Queen)
 *   - score (1, 2, 3, 4, ... 11, 12, 13)
 *
 * Define a Deck class with the following properties and methods:
 *
 *   - length (the number of cards - should start at 52)
 *   - cards (an array of cards in the deck)
 *   - draw: return a random card from the cards array
 *
 * When you create an instance of your Deck class (i.e. in your constructor),
 * fill in the cards array with 52 instances of your Card class. You can do
 * this with a nested for loop - first loop through an array of all possible
 * suits, then loop through an array of all possible ranks. Inside your inner
 * loop, create an instance of your Card class and push it into the Deck's cards
 * array.
 *
 * Instantiate an instance of your Deck and start drawing random cards!
 */

class Card {
  constructor(suit, rank, score) {
    this.suit = suit;
    this.rank = rank;
    this.score = score;
  }
}

class Deck {
  constructor(cards) {
    this.length = cards.length;
    this.cards = cards;
  }
  draw() {
    let i = Math.floor(Math.random() * this.cards.length);
    let card = this.cards[i];
    this.cards.splice(i, 1);
    this.length = this.cards.length;
    return card;
  }
  fill() {
    let cards = [];
    for (let suits of suit) {
      for (let i = 0; i < rank.length; i++) {
        const card = new Card(suits, rank[i], score[i]);
        cards.push(card);
      }
    }
    this.cards = cards;
    this.length = this.cards.length;
  }
}

const suit = ['hearts', 'spades', 'clubs', 'diamonds'];
const rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
const score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const deck = () => {
  let cards = [];
  for (let suits of suit) {
    for (let i = 0; i < rank.length; i++) {
      const card = new Card(suits, rank[i], score[i]);
      cards.push(card);
    }
  }
  return cards;
}

const newDeck = new Deck(deck());

console.log(newDeck.length, newDeck.cards);
newDeck.draw();
console.log(newDeck.length);
console.log(newDeck.draw());
newDeck.draw();
console.log(newDeck.length,newDeck.cards);
newDeck.fill();
console.log(newDeck.length);