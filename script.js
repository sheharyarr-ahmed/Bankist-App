'use strict';
// learned about
// forEach, map, innerHTML, preventDefault(), insertAdjacentHTML, optional chaining(?), blur method, find method, splice method, some method, fill method, from method, instead of using Number object we used + for conversion of string into an number.,dateOperations, iNTERNATIONALIZATION, setTimeout, setInterval, adding the timer in the parent scope.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// starting point
// Functions

// the reason we start writing the code in the function is that Writing in the global context is dangerous, unscalable, and error-prone. Always limit scope using functions, blocks, or modules to keep your code clean, safe, and maintainable. we cannot write the variables in the global scope as it may create problems when the code grows so thats we should write the code in functions, IIFE or modules and in this case we write the code in an function.

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  // else {
  //   const month = `${date.getMonth() + 1}`.padStart(2, 0);
  //   const day = `${date.getDate()}`.padStart(2, 0);
  //   const year = date.getFullYear();
  //   return `${day}/${month}/${year}`;
  // }
  return new Intl.DateTimeFormat(locale).format(date);
};

// making an new function in order to prevent of repeating of it
const formattedCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const combinedMovsDates = acc.movements.map((mov, i) => ({
    //here the paranthesis after the arrow we want to return an object that represents the we want to create an object.
    movement: mov,
    movementDate: acc.movementsDates.at(i),
  }));

  if (sort) combinedMovsDates.sort((a, b) => (a.movement = b.movement));
  // const movs = sort
  //   ? acc.movements.slice().sort((a, b) => a - b)
  //   : acc.movements;
  combinedMovsDates.forEach(function (obj, i) {
    const { movement, movementDate } = obj;
    const type = movement > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(movementDate);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formattedCur(movement, acc.locale, acc.currency);
    const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// creating new function of displaying total balance of the movements of each, reduce method involved

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  // const formattedMov = formattedCur(acc.balance, acc.locale, acc.currency);
  labelBalance.textContent = formattedCur(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

// adding new feature calculate display summary, chaining of map, filrer and reduce involved.
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formattedCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formattedCur(
    Math.abs(out),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formattedCur(
    interest,
    acc.locale,
    acc.currency
  );
};

// in this new function we learned about the useage of map
const user = 'Steven Thomas Williams';
// const userName = user
//   .toLowerCase()
//   .split(' ')
//   .map(function (name) {
//     return name[0];
//   })
//   .join('');   //this was the original logic but down below it is cinverted into an arrow function.
// const createUserNames = function (user) {
//   const userName = user
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//   return userName;
// };
// console.log(createUserNames('sheharyar ahmed memon'));

// creating an function for computing the accounts usernames.

const createUserNames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
    // the reason why we are not retunring anu value in this map function is that we do not want to create an side effect we just want an work to be doneisnde the object which is crete an new property username.
  });
};
createUserNames(accounts);
// console.log(accounts);

// updating UI function
const updateUI = function (acc) {
  // 2. display movements
  displayMovements(acc);
  // 3. display balance
  calcDisplayBalance(acc);
  // 4. display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    // we added this nested fucntion of tick because the timer was at first after log in the the timer was starting fro 1 sec then the counter was being stareted there fore we made an function of tick to make the timer start immediately.
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // in each call print the timer to UI
    labelTimer.textContent = `${min}:${sec}`;
    // when the time hits 0 sec trigger this
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    // decrease the time by 1 sec
    time--;
  };
  //set the time to 5 mins
  let time = 30;
  tick();
  // call the timer every second
  const timer = setInterval(tick, 1000);
  return timer; //gives back the timer ID from setInterval so we can control it outside.
};

// EVENT HANDLERS
// parent scope
let currentAccount, timer; //	the reason why we place the timer here in the parent scope that we will need its value in further operations as well. and another reason that why we p;ace is that is  the timer is that the timer started when a user logs in (btnLogin handler).But it also needs to be reset if certain actions happen like if anothert user  log ins so then timer can be rest and start again.

// fake always logged in during the development
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// implememtning internationalization in the date with the API
// const now = new Date();
// const options = {
//   day: 'numeric',
//   month: 'long',
//   year: 'numeric',
//   weekday: 'long',
//   hour: 'numeric',
//   minute: 'numeric',
// };

// const locale = navigator.language;
// // console.log(locale);
// labelDate.textContent = new Intl.DateTimeFormat('en-UK', options).format(now);
// implementing log in system
btnLogin.addEventListener(
  'click',
  function (
    e //this e is to see the type of event that occured
  ) {
    e.preventDefault(); //this method preventDeafault prevents the browser it.s default settings. after creating this function the page will no more reload after pressing the submit button.
    currentAccount = accounts.find(
      acc => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);

    if (currentAccount?.pin === +inputLoginPin.value) {
      //the reason why we added the optional cahininghere is when a user whose username was not registered tries to log init was giving an error but now it will return undefined.
      // the list of things which should if the above condition appears to be true
      // 1. display ui & Message
      labelWelcome.textContent = `Welcome Back, ${
        currentAccount.owner.split(' ')[0]
      }`;
      containerApp.style.opacity = 100;
      // implementing the dates under the balance section, current Date
      // const now = new Date();
      // const month = `${now.getMonth() + 1}`.padStart(2, 0);
      // const day = `${now.getDate()}`.padStart(2, 0);
      // const year = now.getFullYear();
      // const hour = `${now.getHours()}`.padStart(2, 0);
      // const min = `${now.getMinutes()}`.padStart(2, 0);
      // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

      // added the date and time on log in via internationalization api (done later)
      const now = new Date();
      const options = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        // weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
      };

      // const locale = navigator.language;
      // console.log(locale);
      labelDate.textContent = new Intl.DateTimeFormat(
        currentAccount.locale,
        options
      ).format(now);
      // clearing input fields
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur(); // to remove cursor from it after getting logged in.

      // // 2. display movements
      // displayMovements(currentAccount.movements);
      // // 3. display balance
      // calcDisplayBalance(currentAccount);
      // // 4. display summary
      // calcDisplaySummary(currentAccount);

      // if timer exists on the log ino of new user, not the first log in
      if (timer) {
        clearInterval(timer); //ensures any old timer is stopped before starting a new one.
      }
      timer = startLogOutTimer(); //newly created function in the functions section
      //starts a fresh countdown for the current session.
      updateUI(currentAccount);
    }
  }
);

// implementing money transfer function
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc && // if receiver account exists
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username //to ensure that the current account holder does not send the amount to himself.
  ) {
    // console.log('transfer valid');
    ///----------
    // doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //adding the transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    updateUI(currentAccount);

    //adding the functionality of reseting the timer whenver the user performs an transfer.
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

//implementing the loan function
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // add the loan's movement
      currentAccount.movements.push(amount);
      // adding the loan date
      currentAccount.movementsDates.push(new Date().toISOString());
      // update the UI
      updateUI(currentAccount);
      inputLoanAmount.value = '';
    }, 2500);
    //adding the functionality of reseting the timer whenver the user asks for an loan.
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

// implementing close account function
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
      //it tells that on which index this current account exists in the accounts array
    );
    console.log(index);
    accounts.splice(index, 1);

    //when closed account gets success hide the ui
    containerApp.style.opacity = 0;

    // input fields clear as-well
    inputCloseUsername.value = inputClosePin.value = '';
  }
});

// implementing the sort function
// adding an state variable
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

// adding the internationalization featue and experimenting with it

// implemetning an fucntion when we clicks on label balance the console will give the list of the movements by implementing the from method.
// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);
// another emthod oif creating the array from array like objects
// const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// });

// useage of the remainder operator with an example in this project

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//     if (i % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
