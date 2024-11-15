// callback functions

// =============================================
// WHAT ARE CALLBACK FUNCTIONS?
// =============================================
/**
 * A callback function is a function passed as an argument to another function.
 * It allows you to control the execution flow and perform specific tasks when
 * certain events or conditions occur.
 *
 * Callback functions are often used in asynchronous programming, such as when
 * working with timers, events, or API requests.
 */

// =============================================
// EXAMPLE 1: Basic Callback Function
// =============================================

// A function that accepts a callback
function greetUser(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // Invoke the callback
}

// A callback function
function sayGoodbye() {
  console.log("Goodbye!");
}

// Call greetUser and pass sayGoodbye as the callback
// greetUser("Alice", sayGoodbye);
// Output:
// Hello, Alice!
// Goodbye!

// =============================================
// EXAMPLE 2: Callback for Custom Operations
// =============================================

// A function that performs a calculation and calls a callback with the result
function calculate(a, b, operation) {
  const result = operation(a, b); // Call the callback function
  console.log(`The result is ${result}`);
}

// Callback functions for addition and multiplication
function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

// Use the calculate function with different callbacks
// calculate(5, 3, add); // Output: The result is 8
// calculate(5, 3, multiply); // Output: The result is 15

// =============================================
// KEY POINTS ABOUT CALLBACK FUNCTIONS
// =============================================

/**
 * 1. A callback is just a function passed as an argument to another function.
 *    The receiving function can call the callback when it needs to.
 *
 * 2. Callbacks are often used in asynchronous code (e.g., timers, events, API calls).
 *
 * 3. Array methods like `forEach`, `map`, and `filter` rely on callbacks to process array elements.
 *
 * 4. Callbacks help keep code modular and reusable by separating logic into smaller functions.
 *
 * 5. Callback functions can handle success and error cases, making them useful for error handling.
 */

// =============================================
// WHEN TO USE CALLBACK FUNCTIONS
// =============================================

/**
 * - Use callbacks for tasks where you need to control what happens after
 *   another function finishes its work.
 * - Use them in asynchronous operations like fetching data or working with events.
 * - Avoid deeply nested callbacks (known as "callback hell") by using promises
 *   or async/await for complex asynchronous workflows.
 */
