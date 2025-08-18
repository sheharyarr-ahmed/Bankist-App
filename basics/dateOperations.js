'use strict';
// performing operations on dates
const future = new Date(2037, 10, 19, 15, 23);
// console.log(Number(future));
console.log(+future);

// const calcDaysPassed = function (date1, date2) {
//   return Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
// };

// const result = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
// console.log(result);

const calcDaysPassed = (date1, date2) =>
  (date2 - date1) / (1000 * 60 * 60 * 24);
