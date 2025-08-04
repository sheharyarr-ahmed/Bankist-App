// learned about the findLast and findLastIndex method
'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const findFromLast = movements.findLast(mov => mov < 100);
console.log(findFromLast);

const exampleFindLastIndex = movements.findLastIndex(
  mov => Math.abs(mov) < 500
);
console.log(exampleFindLastIndex);
