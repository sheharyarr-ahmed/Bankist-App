'use strict';
// comparision fuinction
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// sort method in strings, arranges the elements according ti the first letter
const friends = ['mussad', 'taha', 'talha', 'sheharyar', 'saif', 'umair'];
console.log(friends.sort());

// sort mehtod in numbers
// in this one you see it does worked but not perfectly because it kept negatives on one side while the other numbers are arranged based on their first number
// console.log(movements.sort());

// for ascending order
// movements.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   }
//   if (a < b) {
//     return -1;
//   }
// });
// same thing as above commented code
movements.sort((a, b) => a - b);

console.log(movements);

// for descending order
// movements.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (a < b) {
//     return 1;
//   }
// });

movements.sort((a, b) => b - a);

console.log(movements);
