'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

// practice 1
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(bankDepositSum);

// practice 2
const numOfDeposits100 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 1000).length;
console.log(numOfDeposits100);

// another way of doing the above method through reduce method

const numOfDepositsReduce = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, cur) =>
      cur > 1000
        ? ++acc //useage of prefixed ++ operator
        : acc,
    0
  );

// const numOfDepositsReduce = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, cur) => (cur > 1000 ? acc + 1 : acc), 0);

console.log(numOfDepositsReduce);

// practice 3
// destructuring done by using the reduce method only
const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, cur) => {
      acc[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return acc;
    },
    { deposits: 0, withdrawals: 0 }
  );

console.log(deposits, withdrawals);

// practice 4
const convertTitleCase = function (title) {
  const capitalise = str => str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalise(word)))
    .join(' ');

  return capitalise(titleCase);
};

console.log(
  convertTitleCase('I am a hunter and I dont know what to do about it')
);
