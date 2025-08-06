// some, every and flat and flatMap methods
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

const nestedArr = [[200, 450, -400], 3000, -650, [-130, 70], 1300]; //flatens the array.

console.log(nestedArr.flat());

const moreDeepArray = [[200, 450, -400], 3000, -650, [-130, [70]], 1300];
console.log(moreDeepArray); //without flat's parameter

console.log(moreDeepArray.flat(2)); //by giving paramter the inner level array are also gone.

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// const allMovements = accounts.map(acc => acc.movements);

// EXAMPLE for flatMap
const allMovements = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(allMovements);
