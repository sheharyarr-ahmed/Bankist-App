'use stirct';
setTimeout(() => console.log('here is your pizza'), 3000); //two parameters used inside of this setTimeout function one is the call back function while thte other is seconds in. mili second.
// we can also pass in the other parametes for the function, shwoin below.

console.log('hi i am sheharyar'); // this line will get executed first beause the timer is no tapplied on this, this explains the concept of aynchronous java script.

const cities = ['Islamabad', 'Karachi'];

// const timer = setTimeout(
// (city1, city2) =>
//     console.log(
//       `hello i live in in the following cities, ${city1} and ${city2}`
//     ),
//   3000,
//   'karachi', // karachi and the islamabad are the tihird and fourt parameters of the timeout function which are actually the parameters of the call bac function.
//   'islamabad'
// );

const timer = setTimeout(
  (city1, city2) =>
    console.log(
      `hello i live in in the following cities, ${city1} and ${city2}`
    ),
  3000,
  ...cities
);
// now to stope the timer we use this

if (cities.includes('Karachi')) {
  clearTimeout(timer);
}

console.log('wait for the timeout function');

// now its time for the setInterval(), what it does if we want the timer function to run again and again after an specified time then we use this.
// setInterval(() => {
//   const now = new Date();
//   console.log(now);
// }, 1000);
