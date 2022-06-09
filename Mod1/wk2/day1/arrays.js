let colors = ['red', 'green', 'blue', 'purple', 'brown', 'gold', 'orange'];

let food = ['steak', 'pizza', 'tacos', 'sushi'];

// ! Exercise

console.log(colors[2]);
console.log(colors[5]);

// ! Exercise

console.log(colors[1]);
console.log(colors[4]);

// ! Sort

console.log(colors.sort());

// ! forEach

const print = value => console.log('color is ' + value);

colors.forEach(print);

// ! for...of

for (type of food) {
  console.log('favorite food is ' + type);
}

// ! map

