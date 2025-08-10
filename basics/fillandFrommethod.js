'use strict';
// creating arrays programatically
// two methods of creating arrrays
const arr = [1, 2, 3, 4, 5, 6, 77];
console.log(new Array(1, 2, 3, 4, 5, 7));
console.log(arr);

// using fill mehtod
const x = new Array(7); //this will create an empty array of length 7
console.log(x);
x.fill(1, 3, 5); //this accepts three parameters the foirst parameter is the element whic we like to fill int eh Array, second parameter is the starting point wheras the third parameter is endingpoint which is exclusive
console.log(x);
// arr.fill(69, 2); it mutates the original array
console.log(arr);
arr.fill(69, 2, 3);
console.log(arr);

// from method this accepts wo paramters first eht length and the second is the mapping/ callback function
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

// const z = Array.from({ length: 7 }, (current, i) => i + 1);
const z = Array.from({ length: 7 }, (_, i) => i + 1); //here underscore reoresents the throw away variable.
console.log(z);
