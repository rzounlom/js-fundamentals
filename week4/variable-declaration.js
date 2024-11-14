// var, let, const in detail

// =============================================
// VAR EXAMPLES
// =============================================

// Example 1: var is function-scoped
function varExample1() {
  if (true) {
    var message = "Hello, var!";
  }
  console.log(message); // Output: "Hello, var!" (accessible outside the block)
}
// console.log("---var Example 1---");
// varExample1();

// Example 2: var allows re-declaration within the same scope
// console.log("---var Example 2---");
var greeting = "Hi there!";
var greeting = "Hello again!";
// console.log(greeting); // Output: "Hello again!" (no error)

// Example 3: var is hoisted but undefined until execution
// console.log("---var Example 3---");
// console.log(hoistedVar); // Output: undefined (var is hoisted): calling the variable before it's used will not throw an error using var
var hoistedVar = "I'm hoisted";
// console.log(hoistedVar);

// Example 4: var creates a property on the global object
// console.log("---var Example 4---");
var globalVar = "I'm global!";
// console.log(globalVar); // Output: "I'm global!" (only in browsers)

// Example 5: var does not respect block scope

// console.log("---var Example 5---");
if (true) {
  var number = 42;
}
// console.log(number); // Output: 42 (accessible outside the block)
// =============================================
// LET EXAMPLES
// =============================================

// Example 1: let is block-scoped
// console.log("---let Example 1---");
function letExample1() {
  if (true) {
    let message = "Hello, let!";
    // console.log(message); // Output: "Hello, let!" (accessible within the block)
  }
  // console.log(message); // Error: message is not defined
}
letExample1();

// Example 2: let does not allow re-declaration in the same scope
// console.log("---let Example 2---");
let name = "John";
// let name = "Doe"; // Error: Identifier 'name' has already been declared

// Example 3: let is hoisted but not initialized
// console.log("---let Example 3---");
// console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I'm hoisted with let";

// Example 4: let is block-scoped in loops
// console.log("---let Example 4---");
for (let i = 0; i < 3; i++) {
  //   console.log(i); // Outputs: 0, 1, 2
}
// console.log(i); // Error: i is not defined (outside the loop block)

// Example 5: let can be updated
// console.log("---let Example 5---");
let age = 30;
age = 31; // Allowed
// console.log(age); // Output: 31

// =============================================
// CONST EXAMPLES
// =============================================

// Example 1: const is block-scoped
// console.log("---const Example 1---");
function constExample1() {
  if (true) {
    const message = "Hello, const!";
    console.log(message); // Output: "Hello, const!" (accessible within the block)
  }
  // console.log(message); // Error: message is not defined
}
// constExample1();

// Example 2: const must be initialized when declared
// console.log("---const Example 2---");
// const favoriteColor; // Error: Missing initializer in const declaration
const favoriteColor = "Blue";

// Example 3: const does not allow re-assignment
// console.log("---const Example 3---");
const city = "New York";
// city = "Los Angeles"; // Error: Assignment to constant variable

// Example 4: const allows mutation of objects and arrays
// console.log("---const Example 4---");
const person = { name: "Alice", age: 25 };
person.age = 26; // Allowed
// console.log(person); // Output: { name: 'Alice', age: 26 }

// Example 5: const is useful for fixed values
// console.log("---const Example 5---");
const PI = 3.14159;
// console.log(PI); // Output: 3.14159
// PI = 3.14; // Error: Assignment to constant variable

// =============================================
// KEY DIFFERENCES
// =============================================

/**
 * 1. Scope:
 *    - `var` is function-scoped, so it ignores block scope.
 *    - `let` and `const` are block-scoped, meaning they are only accessible within the block where they are defined.
 *
 * 2. Hoisting:
 *    - `var` is hoisted and initialized with `undefined`.
 *    - `let` and `const` are hoisted but remain uninitialized ("temporal dead zone") until execution reaches their declaration.
 *
 * 3. Re-declaration:
 *    - `var` allows re-declaration in the same scope.
 *    - `let` and `const` do not allow re-declaration in the same scope.
 *
 * 4. Re-assignment:
 *    - `var` and `let` allow re-assignment.
 *    - `const` does not allow re-assignment, but the contents of `const` objects and arrays can be modified.
 *
 * 5. Global Object:
 *    - `var` creates a property on the global object (e.g., `window` in browsers, NOTE: were are in the server enviroment so caling window will not work here.).
 *    - `let` and `const` do not pollute the global object.
 */

// =============================================
// WHEN TO USE WHAT?
// =============================================

/**
 * - Use `const` by default for values that won't change.
 * - Use `let` for values that will change (e.g., loop counters, state variables).
 * - Avoid `var` unless you have a specific reason (e.g., working with legacy code).
 */
