'use strcit';
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(2, 3, 4, 8));
console.log(Math.max(2, 3, '4', '8')); // it does type coercion
console.log(Math.min(1, 2, 3, 4));

console.log(Math.PI * Number.parseFloat('2.5px') ** 2);

// generating random numbers

console.log(Math.trunc(Math.random() * 6 + 1));

// fucntion created of generating number with in the given range
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

randomInt(10, 20);

// now rounding the integers
console.log(Math.round(23.3));
console.log(Math.round(23.8));

console.log(Math.ceil(23.4)); //it will upscale it
console.log(Math.floor(32.9));
console.log(Math.trunc(32.55678666)); // trunc removes the all decimals

// rounding the decimals
console.log((2.7).toFixed(0));
console.log((3.222).toFixed(2)); //the no tells how many decimals we would like to show after the decimal point. and it returns the string
console.log(+(3.222).toFixed(2));

// numeric separators

const largeNumber = 100_0000; //just to read easily
console.log(largeNumber);
