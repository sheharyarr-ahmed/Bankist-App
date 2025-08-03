'use strict';
const movements = [5000, 3400, -150, -790, -3210, -1000, 8500, -30];

const totalBalance = movements.reduce(function (
  accumulator,
  currentValue,
  index,
  array
) {
  console.log(
    ` the iteration no is ${index} and the accumulator is ${accumulator}`
  );
  return accumulator + currentValue;

  0; // the zero here is the starting/initial value fo the accumulator like from where the accumulator should start
});

console.log(`---------------------`);

// same thing as above but with the arrow function
const globalBalance = movements.reduce((accumulator, currentValue, index) => {
  console.log(
    ` the iteration no is ${index} and the accumulator is ${accumulator}`
  );
  return accumulator + currentValue;

  0; // the zero here is the starting/initial value fo the accumulator like from where the accumulator should start
});

console.log(globalBalance);

console.log('same thing but now using for of loop');

let isBalance = 0;
for (const cash of movements) {
  isBalance += cash;
}
console.log(isBalance);

console.log('------------');

// use case of reduce method in order to find an maximum value in the array

const max = movements.reduce(function (acc, mov) {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);
