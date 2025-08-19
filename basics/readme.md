The basics folder is not part of the final deployed project but serves as a learning path where I practiced and revised the fundamentals of JavaScript. It contains small, focused scripts that demonstrate concepts such as DOM manipulation, array methods, event handling, timers, and more.

To run these examples, move the files out of the basics folder and uncomment their <script> references in the index.html file. This allows the results of each script to be viewed in isolation.

## ✅ Concepts & Methods Learned

- **Array Methods**

  - `forEach()` – Looping through arrays.
  - `map()` – Transforming arrays.
  - `find()` – Finding elements by condition.
  - `some()` – Checking if at least one element satisfies a condition.
  - `splice()` – Removing elements (destructive).
  - `fill()` – Filling arrays with values.
  - `Array.from()` – Creating arrays from array-like or iterable objects.

- **DOM Manipulation**

  - `.innerHTML` – Insert/replace HTML in elements.
  - `.insertAdjacentHTML()` – Insert HTML at specific positions.
  - `.blur()` – Removes focus from input fields.

- **Event Handling**

  - `preventDefault()` – Stops default browser behavior (e.g., form reload).

- **Operators & Conversion**

  - `+value` – Quick way to convert a string into a number (instead of `Number(value)`).

- **Date & Time**

  - Date operations with the `Date` object.
  - **Internationalization (Intl API)** – Formatting dates and numbers for locales.

- **Timers**
  - `setTimeout()` – Run code once after a delay.
  - `setInterval()` – Run code repeatedly at intervals.
  - Managing session timers by placing them in the parent scope (to reset across actions).
