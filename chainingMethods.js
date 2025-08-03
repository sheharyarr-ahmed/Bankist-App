'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const digit = 2;
const chainedMethods = movements
  .filter(mov => mov > 0)
  .map(mov => mov * digit)
  .reduce((acc, mov) => acc + mov, 0);
console.log(chainedMethods);
