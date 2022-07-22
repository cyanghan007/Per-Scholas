// const fs = require('fs');
// console.log(typeof fs);

// fs.writeFile('./hello.txt', 'Hello!', function() {
//   console.log('done creating file');
// });

const daysOfWeek = require('./days-of-week');
// const request = require('request');
const random = require('./random');
const circle = require('./circle');

const day = daysOfWeek.getWeekday(5);
console.log(day);

// request(
//   'http://jsonplaceholder.typicode.com/users',
//   function(err, res, body) {
//     console.log(body);
//   }
// );

for (let i = 0; i < 10; i++) {
  console.log(random(100, 200));
}

console.log(circle.area(50));
console.log(circle.circumference(75));
