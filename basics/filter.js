'use strict';
const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);

// same thing now done with the for of loop
const depositsAdded = [];
for (const mov of movements) {
  if (mov > 0) depositsAdded.push(mov);
}

console.log(depositsAdded);

// now for the withdrawal

const withdrawal = movements.filter(function (amount) {
  return amount < 0;
});

console.log(withdrawal);
