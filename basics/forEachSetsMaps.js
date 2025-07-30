'use strict';

// for each in maps
const currencies = new Map([
  ['USD', 'UNITED STATES DOLLAR'],
  ['PKR', 'PAKSITANI RUPPEE'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// for each in sets
const newSet = new Set(['hello', 'I am', 'Sheharyar']);
// newSet.forEach(function (value, key, set) {. in sets we ont have keys
newSet.forEach(function (value, _, set) {
  //the underscore here re[resents the throwaway variable]
  console.log(`${value}, ${value}`);
});
