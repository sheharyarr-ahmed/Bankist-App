'use strict';
let arr = ['a', 'b', 'c', 'd', 'e'];

// slice method
console.log(arr.slice(1));
console.log(arr.slice());
console.log([...arr]);

// splice method
// console.log(arr.splice(1));
// console.log(arr);
// console.log(arr.splice(-1));
// console.log(arr);
// console.log(arr.splice(1, 2));
// console.log(arr);

// reverse method
const arr2 = ['h', 'i', 'j', 'k', 'l'];

console.log(arr2.reverse());

// concat method
const letters = ['h', 'i', 'j', 'k', 'l'];
console.log(arr.concat(letters));

// join method
console.log(arr.join('-'));

// the use of the at method
console.log(arr);
console.log(arr.at(2));
console.log(arr.splice(-1)[0]);
console.log(arr[arr.length - 1]);

this;
