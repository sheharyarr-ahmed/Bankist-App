'use strict';
// javascript dealing with numbers
// converison of a number
console.log(Number('23'));
console.log(+'23');

// parsing
console.log(Number.parseInt('30px', 10)); // the 10 here represents the radix meant base 10(decimal)

console.log(Number.parseFloat('2.5rem'));
console.log(parseFloat('2.5rem')); //without number object

// check value is a NAN
console.log(Number.isNaN(23));
console.log(Number.isNaN('23'));
console.log(Number.isNaN(+'20x'));

// check value is a number
console.log(Number.isFinite(23));
console.log(Number.isFinite('23'));
console.log(Number.isFinite(23.0));
console.log(Number.isFinite(+'23.0'));

// is an integer
console.log(Number.isInteger(23));
console.log(Number.isInteger('23'));
console.log(Number.isInteger(23 / 0));
