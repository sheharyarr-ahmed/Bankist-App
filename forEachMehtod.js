'use strict';

// the traditional method swhich is for of loop
// now learning about the forEachLoop

// for each loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements)
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}, you deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}, you withdrew ${Math.abs(movement)}`);
  }
}

// now with the forEach method

console.log('-------the forEach method-------');
// .forEach() is an **array method** that executes a **callback function** **once** for **each element** in the array.
// with the three automatically parameters that are currentValue, index and the array that is being iterated
// the best thing about the forEach loop method or the function is that it accepts three parameters automatically in its call back function which is the current value, the index and the array that is being iterated. so we can name those parameters anything we like. like in this case mov, i, arr
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}, you deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}, you withdrew ${Math.abs(mov)}`);
  }
});
