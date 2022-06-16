/*
1. Define a function maxOfThree that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. Do some googling to figure this out if you forget how conditionals work.
*/

maxOfTwo = (a, b) => {
  let largest;   //Initiating a variable to assign the largest number
  if (a > b) {
    largest = a;
  } else {
    largest = b;
  }
  console.log("The largest number is " + largest);
};

maxOfTwo(879, 453);   //Checking if function works with first argument being the largest
maxOfTwo(567, 658);   //Checking if function works with second argument being the largest
maxOfTwo(200, 200);   //Checking if function works with both arguments being equal hence largest

/*
2. Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/

//!  I could've used simple if -> else if -> else conditional like the one below:

// maxOfThree = (a, b, c) => {
//   let largest;
//   if (a >= b && a >= c) {
//     largest = a;
//   } else if (b >= a && b >= c) {
//     largest = b;
//   } else {
//     largest = c;
//   }

//   console.log("The largest number is " + largest);
// }

//!  However depending on the position of argument with the largest number it would take from 2 to 4 conditions::

//!  First argument "a" needs to pass 2 conditions to be the largest:

//   a >= b && a >= c

//!  While for the third argument "c" to be the largest, it needs 4 conditions to be false:

//  a >= b && a>= c, b >= a && b >= c

//! It would be more efficient to nest if statements to have the result in 2 conditions regardless of the position of the argument with the largest number:

maxOfThree = (a, b, c) => {
  let largest;
  if (a + b > b + c) {   //Checking if the largest number is in (a+b) (b only if a is larger than c) (This is first condition and is checked on all arguments)
    if (a >= b) {   //This is second condition and is checked only if the largest number is a
      largest = a;
    } else {
      largest = b;   //or b (only if a is larger than c).
    }
  } else {
    if (b >= c) {   //This is second condition and is checked only if the largest number is b (only if c is larger than a)
      largest = b;
    } else {
      largest = c;   //or c.
    }
  }

  console.log("The largest number is " + largest);
};

maxOfThree(756, 453, 1);   //if first argument is the largest
maxOfThree(1, 567, 123);   //if second argument is the largest
maxOfThree(300, 1, 300);   //if we have two equal the largest numbers and sums of arguments in the first condition are equal

/*
3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/

//! One of the ways to do it would be:

// isCharacterAVowel = (str) => {
//   if (str.length === 1) {   //Checking if string contains only a character
//     str = str.toLowerCase();   //Converting value to lower case
//     return str == 'a' || str == 'e' || str == 'i' || str == 'o' || str == 'u';   //Checking if value passes one of the conditions
//   } else {
//     return false;
//   }
// };

//! But then I discovered RegExp https://www.w3schools.com/js/js_regexp.asp
//   /^[aeiou]$/i searches for a vowel and checks if string contains only one character
//   test() method searches a string for a pattern, and returns true or false, depending on the result
isCharacterAVowel = str => {
  return /^[aeiou]$/i.test(str);
}

console.log(isCharacterAVowel('b'));   //if not a vowel
console.log(isCharacterAVowel('O'));   //if an uppercase vowel
console.log(isCharacterAVowel('a'));   //if a vowel
console.log(isCharacterAVowel('aa'));   //if more than a character

/*
4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
*/

// sumArray = (array) => {
//   for ()
// };

/*
5.Write a function that returns the number of arguments passed to the function when called.
*/

/*
6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
*/

reverseString = () => {
  // ADD YOUR CODE HERE
};

/*
7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.
*/
findLongestWord = () => {
  // ADD YOUR CODE HERE
};

/*
8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
*/
filterLongWords = () => {
  // ADD YOUR CODE HERE
};
