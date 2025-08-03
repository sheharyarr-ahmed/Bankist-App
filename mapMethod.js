'use strict';
// what actually happens in the for each method is that it gives side-efects meaning it appers on the console when looping but in the map method it retunrns the array which needs to be stored in an new variable then it can be consoled.
const movements = [520, 1100, 1200, 4, 3];
const euroToUsd = 1.2;

// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUsd; //as this function is retunring na n value which has to be stored therefore we store it inside of an variable.
// });

//beneth is done witht the arrow function, no need to write the return keyword in arrow function
const movementsUSD = movements.map(mov => mov * euroToUsd);

console.log(movements);
console.log(movementsUSD);

// now done with the for of loop method

const movementstoUSDfor = [];
for (const mov of movements) movementstoUSDfor.push(mov * euroToUsd);

console.log(movementstoUSDfor);

// new example

const movementsDescription = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${mov}`
);

console.log(movementsDescription);
