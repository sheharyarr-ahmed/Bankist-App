'use strict';

// new method learned that is Math.max
// This time, Julia and Kate are studying the activity levels of different dog breeds.

// YOUR TASKS:
// 1. Store the the average weight of a "Husky" in a variable "huskyWeight"
// 2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
// 3. Create an array "allActivities" of all the activities of all the dog breeds
// 4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
// 5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
// 6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
// 7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

// BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
console.log(huskyWeight);

const twoActivites = breeds.find(
  breed =>
    breed.activities.includes('running') && breed.activities.includes('fetch')
).breed;
console.log(twoActivites);

const allActivities = breeds.flatMap(breed => breed.activities);
console.log(allActivities);

const uniqueActivites = [...new Set(allActivities)]; // by using spsread operator converted the set object into an array
console.log(uniqueActivites);

const swimmingAdjacent = breeds
  .filter(breed => breed.activities.includes('swimming'))
  .flatMap(breed => breed.activities)
  .filter(activity => activity !== 'swimming');

console.log(swimmingAdjacent);

const breedWeight = breeds.every(breed => breed.averageWeight > 10);
console.log(breedWeight);

const activeBreeds = breeds.every(breed => breed.activities.length >= 3);
console.log(activeBreeds);

const heavyFetch = breeds
  .filter(breed => breed.activities.includes('fetch'))
  .flatMap(breed => breed.averageWeight);

const heaviest = Math.max(...heavyFetch);
console.log(heaviest);
console.log(heavyFetch);
