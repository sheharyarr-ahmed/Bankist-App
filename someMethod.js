'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.includes(200); //this looks or works  as an  equality operator and looks fo rthe exact same.

const checkElement = movements.some(mov => mov > 0);
console.log(checkElement);

console.log('every method');
// this is also just like the some method but in this the every method looks if the whole satisfies the condition or not.

console.log('to check whether all eleemtns of the array are greater than 4');

const arr = [5, 6, 7, 8, 99];

const toCheck = arr.every(mov => mov >= 5);
console.log(toCheck);
