/*
 * Before you begin working on the prompts, remember to run "node dataTypes.js"
   in the terminal to see your answers displayed.

   Also, some of the prompts are commented out, please uncomment them to make them work.
 */
console.log('dataTypes.js has been included!')

/*
 * Prompt:
 *
 * Declare a variable called myFavoriteNumber on one line; assign it a value on
 * the next line.
 */

let myFavoriteNumber;

myFavoriteNumber = 42;

/*
 * Prompt:
 *
 * Declare 3 variables using each of let, const, and var.
 */

let age = 26;
const name = "Iskandar";
var position = "learner";

/*
 * Prompt:
 *
 * Create a variable and assign a number to it. On a separate line for each:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */

let num = 70;

// TODO add:

num += 7;

// TODO subtract:

num -= 10;

// TODO multiply:

num *= 3;

// TODO divide:

num /= 7;

// TODO remainder:

num = num % 2;

console.log('The answer is ' + num);

/*
 * Prompt:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 */

const firstName = 'Iskandar';
const lastName = 'Salokhiddinov';

const fullName = firstName + lastName;

/*
 * Prompt:
 *
 * Create a variable called hello and assign it the string 'hello'; create
 * a variable called world and assign it the string 'world'.
 *
 * Create a variable called message and use string interpolation to assign it
 * the value 'hello world!'.
 */

const hello = 'hello';
const world = 'world';

const message = `${hello} ${world}!`;
console.log(message);
/*
 * Prompt:
 *
 * Write some code that solves each sub-prompt below.
 */

// A. Use loose-equals (==) to create a statement that is false
// B. Use strict equals (===) to create a statement that is true
// C. Use strict unequal (!==) to create a statement that is true
// D. Use less than (<) to create a statement that is false
// E. Use greater than (>) to create a statement that is false
// F. Use less than or equals (<=) to create a statement that is true
// G. Use greater than or equals (>=) to create a statement that is false

// TODO A:

let looseEquals = (5 == 7); //I put the value in parentheses to make it more readable (not to confuse loose-equals with assignment sign)

// TODO B:

let strictEquals = ('no' === 'no');

// TODO C:

let strictUnequals = ('maybe' !== 'no');

// TODO D:

let lessThan = (2 < 1);

// TODO E:

let greaterThan = (1 > 2);

// TODO F:

let lessThanOrEquals = (2 <= 2);

// TODO G:

let greaterThanOrEquals = (2 >= 3);

console.log(looseEquals, strictEquals, strictUnequals, lessThan, greaterThan, lessThanOrEquals, greaterThanOrEquals);

/*
 * Prompt:
 *
 * Using the variables defined below, replace the underscores in each sub prompt so that the statement evaluates to true
 */

let a = 4;
let b = 53;
let c = 57;
let d = 16;
let e = 'Kevin';

 console.log(a < b);

 console.log(c > d);

 console.log('Name' === 'Name');

 console.log(a + b === c);

 console.log(a * a === d);

 console.log(e === 'Kevin');

 console.log(48 == '48');

 /*
 * Prompt:
 *
 * Using the variables defined below, replace the underscores in each sub prompt so that the statement evaluates to false
 */

a = 6;
b = 100;
c = -5;
d = 3000;
e = 'Jelly Bean';

console.log(a == b);

console.log(c == d);

console.log('Peanut' != 'Peanut');

console.log(a + b == c);

console.log(a * a == d);

console.log(e != 'Jelly Bean');

console.log(48 === '48');

/*
 * Prompt:
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
let array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
let array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];

 console.log(array1[2]);
 console.log(array2[1][1]);
 console.log(array3[1][1][1][0]);

let findMcFly = array => {
  for (name of array) {
    if (typeof name === "array") {
      
    }
  }
 };

 /*
 * Prompt:
 *
 * Use the length of the array below to retrieve the second to last item.
 */

let array4 = ['a', 'b', 'c', 'd', 'e'];
console.log(array4[array4.length - 2]);

/*
 * Prompt:
 *
 * Use the following arrays to answer the sub prompts below.
 */

let thom = ['Thom', 1000, 'Christchurch'];
let karolin = ['Karolin', 16, 'New York'];
let kristyn = ['Kristyn', 5, 'Pittsburgh'];
let cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Gameboy".

thom.shift();
thom.unshift('Gameboy');

console.log(thom);


// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.

karolin[1] = 17;

console.log(karolin);

// Change Cathleen's hometown from New York to "Gotham City".

cathleen[2] = 'Gotham City';

console.log(cathleen);

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".

kristyn.pop();
kristyn.push('Oakland');

console.log(kristyn);

/*
 * Prompt:
 *
 * Answer the sub prompts below.
 */
// Create an array of strings called `foods` that contains three foods.
// Type your solution immediately below this line:
let foods = ['steak', 'pizza', 'tacos'];

//  Access the last item in the array and assign to a variable called `last`.
// Type your solution immediately below this line:
let last = foods[foods.length - 1];

console.log(last);

// Create an empty array called `favoriteFoods`.
// Type your solution immediately below this line:
let favoriteFoods = [];

// Create a `for` loop that adds each string in `foods` to `favoriteFoods`.
// Type your solution immediately below this line:
for (let i = 0; i < foods.length; i++) {
  favoriteFoods.push(foods[i]);
}

console.log(favoriteFoods);