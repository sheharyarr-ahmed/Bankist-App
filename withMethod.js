'use strict';
// in this we learned about teh destructive and non destructive property
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const newMovements = movements.with(1, 5000);
console.log(movements);
console.log(newMovements);
