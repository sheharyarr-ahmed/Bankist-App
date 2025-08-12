'use strict';
// the useage of bigInt function can also represented by  small n at the end of the number.

console.log(BigInt(123456789));
console.log(123456789n); //same thing as above.

// this is an other promitive data type so it cannot be multilied by other number the other number should also be bigInt
const num = BigInt(1234567899999999);
// console.log(2 * num); // this will give error
console.log(2n * num); // correct way of performing operation on bigInt

console.log(typeof num);

console.log(2n == '2');
console.log(2n === '2');
// console.log(num + 1);

console.log(12 / 3);
console.log(12n / 3n);
