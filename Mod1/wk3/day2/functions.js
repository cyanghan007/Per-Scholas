/*
1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

let maxOfTwoNumbers = (a, b) => {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};

console.log("Exercise #1. ", maxOfTwoNumbers(879, 453), "-> expected 879");   //Checking if function works with first argument being the largest.
console.log("Exercise #1. ", maxOfTwoNumbers(567, 658), "-> expected 658");   //if function works with second argument being the largest.
console.log("Exercise #1. ", maxOfTwoNumbers(200, 200), "-> expected 200");   //if function works with both arguments being equal hence largest.

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/

let maxOfThree = (a, b, c) => {
  if (a >= b) {
    if (a >= c) {
      return a;
    } else {
      return c;
    }
  } else if (b >= c) {
    return b;
  } else {
    return c;
  }
};

console.log("Exercise #2. ", maxOfThree(756, 453, 1), "-> expected 756");   //if first argument is the largest.
console.log("Exercise #2. ", maxOfThree(1, 567, 123), "-> expected 567");   //if second argument is the largest.
console.log("Exercise #2. ", maxOfThree(300, 1, 300), "-> expected 300");   //if we have two equal, the largest numbers.

/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/

let isCharacterAVowel = (str) => {
  if (typeof str === 'string' && str.length === 1) {   //Checking if string contains only a character.
    str = str.toLowerCase();   //Converting value to lower case.
    return str == 'a' || str == 'e' || str == 'i' || str == 'o' || str == 'u';   //Checking if value passes one of the conditions.
  } else {
    return false;
  }
};   // Comment out the function below to check if the function above works.

//   OR

//   RegExp https://www.w3schools.com/js/js_regexp.asp
//   /^[aeiou]$/i searches for a vowel and checks if string contains only one character.
//   test() method searches a string for a pattern, and returns true or false, depending on the result.

isCharacterAVowel = str => {
  return /^[aeiou]$/i.test(str);
}

console.log("Exercise #3. ", isCharacterAVowel('b'), "-> expected false");   //if not a vowel.
console.log("Exercise #3. ", isCharacterAVowel('O'), "-> expected true");   //if an uppercase vowel.
console.log("Exercise #3. ", isCharacterAVowel('a'), "-> expected true");   //if a vowel.
console.log("Exercise #3. ", isCharacterAVowel('aa'), "-> expected false");   //if more than a character.
console.log("Exercise #3. ", isCharacterAVowel(1), "-> expected false");   //if a number.

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

let array = [1, 2, 3, 4];

const sumArray = (array) => {
  let sum = 0;
  for (num of array) {
    sum += num;
  }
  return sum;
};

const multiplyArray = (array) => {
  let product = 1; // Because multiplying by 0 makes 0 sense;
  for (num of array) {
    product *= num;
  }
  return product;
};

console.log("Exercise #4. ", sumArray(array), "-> expected 10");
console.log("Exercise #4. ", multiplyArray(array), "-> expected 24");

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/

const numOfArgs = () => arguments.length - 1;

console.log("Exercise #5. ", numOfArgs(1, 2, 3, 4), "-> expected 4");
/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

const reverseString = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};

console.log("Exercise #6. ", reverseString("jag testar"), "-> expected 'ratset gaj'");

/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
let arr1 = ['say', 'way', 'hi', 'word', 'Iskandar', 123456789101112, 'Per Scholas']

const findLongestWord = (array) => {
  let longest = 0;
  for (word of array) {
    word.length > longest ? longest = word.length : false;   //used ternary operators.
  }
  return longest;
};

console.log("Exercise #7. ", findLongestWord(arr1), "-> expected: 11");
/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
let arr2 = ['say', 'way', 'hi', 'word', 'Iskandar', 123456789, 'Per Scholas']

const filterLongWords = (array, i) => {
  let arr = [];
  for (word of array) {
    word.length > i ? arr.push(word) : false;   //used ternary operators.
  }
  return arr;
};

console.log("Exercise #8. ", filterLongWords(arr2, 3), "-> expected: ['word', 'Iskandar', 'Per Scholas']");
console.log("Exercise #8. ", filterLongWords(arr2, 14), "-> expected: []");   //Setting i longer than any word in array.

//   Bonus

//   1. Add a method reverseString (from question 6) to the object String so that it is possible to call: "Per Scholas".reverseString().

// First we need to understand what is a method and how it is added to the object and what is String object.
// Upon research on w3schools I ended up in https://www.w3schools.com/jsref/jsref_prototype_string.asp where learned that:
//   The prototype is a property available with all JavaScript objects.
//   The prototype property allows you to add new properties and methods to strings.

// Also I had to learn what is 'this', constructors, prototypes, that built in JavaScript datatypes (including string) are objects and that one should not change the prototype of built in JavaScript datatypes.
// That said we will do it to solve this problem.

String.prototype.reverseString = function() {
  let reverse = "";
  for (let i = this.length - 1; i >= 0; i--) {
    reverse += this[i];
  }
  return reverse;
};

console.log("Bonus Exercise #1. ", "Per Scholas".reverseString(), "-> expected 'salohcS reP'");

//   2. // Write a function that takes a string as argument and returns an object where:
// the keys are the characters that occur in the string
// the values are the number of occurrences for each letter, regardless of the case
// For example, calling the function with the string "Per Scholas" will return:

// {
//   a: 1,
//   c: 1,
//   e: 1,
//   h: 1,
//   l: 1,
//   o: 1,
//   p: 1,
//   r: 1,
//   s: 2,
// }



// This one was really tricky. Accessing properties by using bracket notation was the key otherwise it throws error with dot notation.

const charOccurr = string => {
  let object = {};   //Declaring a variable and assigning empty object.
  for (let i = 0; i < string.length; i++) {   //Looping through string.
    if (typeof object[string[i]] == "undefined") {   //We're trying to access object property with character in string. If it doesn't exist it returns 'undefined' and passes condition.
      object[string[i].toLowerCase()] = 1;   //Adding property and setting it to 1 (initiating). Also making sure that input is always lowercase.
    } else {
      object[string[i].toLowerCase()]++;   //If it exists and doesn't pass condition, reiterate.
    }
  }
  return object;
}

console.log("Bonus Exercise #2. ", charOccurr("Per Scholas"), "-> expected p: 1, e: 1, r: 1, ' ': 1, s: 2, c: 1, h: 1, o: 1, l: 1, a: 1");
console.log("Bonus Exercise #2. ", charOccurr("Alpaca"), "-> expected a: 3, l: 1, p: 1, c: 1");