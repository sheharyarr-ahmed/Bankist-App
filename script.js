'use strict';
// learned about
// forEach, map, innerHTML, preventDefault(), insertAdjacentHTML, optional chaining(?), blur method, find method, splice method, some method.

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
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

// the reason we start writing the code in the function is that Writing in the global context is dangerous, unscalable, and error-prone. Always limit scope using functions, blocks, or modules to keep your code clean, safe, and maintainable. we cannot write the variables in the global scope as it may create problems when the code grows so thats we should write the code in functions, IIFE or modules and in this case we write the code in an function.
const displayMovements = function (movements, sort = false) {
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  containerMovements.innerHTML = '';
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// creating new function of displaying total balance of the movements of each, reduce method involved

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// adding new feature calculate display summary, chaining of map, filrer and reduce involved.
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
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
  displayMovements(acc.movements);
  // 3. display balance
  calcDisplayBalance(acc);
  // 4. display summary
  calcDisplaySummary(acc);
};

// EVENT HANDLERS
// implementing log in system
let currentAccount;
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

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
      //the reason why we added the optional cahininghere is when a user whose username was not registered tries to log init was giving an error but now it will return undefined.
      // the list of things which should if the above condition appears to be true
      // 1. display ui & Message
      labelWelcome.textContent = `Welcome Back, ${
        currentAccount.owner.split(' ')[0]
      }`;
      containerApp.style.opacity = 100;
      // clearing input fields
      inputLoginUsername.value = inputLoginPin.value = '';
      inputLoginPin.blur(); // to remove cursor from it after getting logged in.

      // // 2. display movements
      // displayMovements(currentAccount.movements);
      // // 3. display balance
      // calcDisplayBalance(currentAccount);
      // // 4. display summary
      // calcDisplaySummary(currentAccount);
      updateUI(currentAccount);
    }
  }
);

// implementing money transfer function
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
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
    updateUI(currentAccount);
  }
});

//implementing the loan function
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add the loan's movement
    currentAccount.movements.push(amount);
    // update the UI
    updateUI(currentAccount);
    inputLoanAmount.value = '';
  }
});

// implementing close account function
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
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
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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
