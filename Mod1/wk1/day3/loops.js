// Exercise

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// };

// Exercise

// for (let i = 1; i < 11; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   } else if (i > 9) {
//     for (let i = 1; i < 11; i++) {
//       if (i % 2 === 0) {
//         console.log(i);
//       }
//     }
//   }
// };

// for (let i = 1; i < 11; i += 2) {
//   console.log(i);
//   if (i === 9) {
//     i = 0;
//   }
// };

// Exercise

// for (let i = 6; i < 61; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// };

// for (let i = 6; i < 61; i += 3) {
//   console.log(i);
// };

// Exercise

// let hashtag = '#';

// for (let i = 1; i < 8; i++) {
//   console.log(hashtag);
//   hashtag += '#';
// };

// Exercise

// for (let i = 0; i < 11; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// };

// Exercise

// for (let i = 1; i < 21; i++) {
//   if (i % 2 === 0) {
//     if (i === 2) {
//       console.log(i + ' is even prime number');
//     } else {
//       console.log(i + ' is even number');
//     }
//   } else if (i === 1) {
//     console.log(i + ' is odd number');
//   } else if (i === 3 || i % 3 !== 0) {
//     console.log(i + ' is odd prime number');
//   } else {
//     console.log(i + ' is odd number');
//   }
// };


// for (let i = 1; i < 21; i++) {
//   let ePrime = i + ' is even prime';
//   let even = i + ' is even';
//   let oPrime = i + ' is odd prime';
//   let odd = i + ' is odd';

//   if (i % 2 === 0) {
//     if (i === 2) {
//       console.log(ePrime);
//     } else {
//       console.log(even);
//     }
//   } else if (i === 1) {
//     console.log(odd);
//   } else if (i === 3 || i % 3 !== 0) {
//     console.log(oPrime);
//   } else {
//     console.log(odd);
//   }
// };