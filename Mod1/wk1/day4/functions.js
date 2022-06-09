// ! Exercise

// function add(x, y, z) {
//   let result = x + y + z;
//   return result;
// };

// // let add = (x, y, z) => x + y + z;

// console.log(add(1, 2, 3));

//! Exercise

// function addAndDivide3(x, y, z) {
//   let result = (x + y + z) / 3;
//   return result;
// };

// // let addAndDivide3 = (x, y, z) => (x + y + z) / 3;

// console.log(addAndDivide3(1, 2, 3));

//! Bonus Exercise

// let changeInQuarters = (price, payment) => {
//   const quarter = 0.25;
//   let change;
//   let numOfQuarters;

//   while (payment >= price) {
//     payment -= price;
//     change = payment
//   };

//   console.log('Nando got '+ change + '$ back');

//   while (change >= quarter) {
//     change -= quarter;
//     numOfQuarters++;
//   }

//   console.log(payment + '$ is ' + numOfQuarters + ' quarters');
// };

// changeInQuarters(2, 20);
// changeInQuarters(2, 19);

//! Bonus Exercise #2

// let changeInLarge = (price, payment) => {
//   let largeBills = 0;
//   let change = payment - price;
//   while (change >= 20) {
//     if (change >= 50) {
//       change -= 50;
//     } else if (change >= 20) {
//       change -= 20;
//     };
//     largeBills++;
//   };
//   console.log("Nando got " + largeBills + " large bills.");
// };

// changeInLarge(27.83, 100);
// // changeInLarge(27.83, 150);
// // changeInLarge(27.83, 120);

//! Fizz Buzz

// let fizzBuzz = (start, end) => {
//   let i = start;
//   console.log("Fizz Buzz:");
//   while (i <= end) {
//     if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//     i++;
//   }
// };

// fizzBuzz(1, 100);

//! Fizz Buzz v2

// let fizzBuzzV2 = (start, end) => {
//   let i = start;
//   console.log("Fizz Buzz v2:");
//   while (i <= end) {
//     if (i % 3 === 0 && i % 5 !== 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0 && i % 3 !== 0) {
//       console.log("Buzz");
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       console.log("Fizz Buzz");
//     } else {
//       console.log(i);
//     }
//     i++;
//   }
// };

// fizzBuzzV2(1, 100);