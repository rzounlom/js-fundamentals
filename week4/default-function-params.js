// default-function-params.js

// =============================================
// WHAT ARE DEFAULT FUNCTION PARAMETERS?
// =============================================
/**
 * Default function parameters allow you to set default values
 * for function arguments. If a value is not passed for a parameter,
 * the default value is used instead.
 *
 * Syntax:
 * function funcName(param1 = defaultValue, param2 = defaultValue) {
 *   // Function body
 * }
 */

// =============================================
// EXAMPLE 1: Basic Default Parameters
// =============================================
// console.log(`
// =============================================
// EXAMPLE 1: Basic Default Parameters
// =============================================
// `);
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

// console.log(greet()); // Output: Hello, Guest! (default is used)
// console.log("=============================================");
// console.log(greet("Alice")); // Output: Hello, Alice! (argument overrides default)

// =============================================
// EXAMPLE 2: Multiple Default Parameters
// =============================================
// console.log(`
// =============================================
// EXAMPLE 2: Multiple Default Parameters
// =============================================
// `);
function calculateArea(length = 1, width = 1) {
  return length * width;
}

// console.log(calculateArea()); // Output: 1 (default values are used)
// console.log("=============================================");
// console.log(calculateArea(5)); // Output: 5 (width defaults to 1)
// console.log("=============================================");
// console.log(calculateArea(5, 3)); // Output: 15 (both arguments are provided)

// =============================================
// EXAMPLE 3: Default Parameters with Expressions
// =============================================
// console.log(`
// =============================================
// EXAMPLE 3: Default Parameters with Expressions
// =============================================
// `);
function getDiscountedPrice(price, discount = price * 0.1) {
  return price - discount;
}

// console.log(getDiscountedPrice(100)); // Output: 90 (10% discount is applied)
// console.log("=============================================");
// console.log(getDiscountedPrice(100, 20)); // Output: 80 (custom discount is used)

// =============================================
// KEY POINTS ABOUT DEFAULT PARAMETERS
// =============================================

/**
 * 1. Default parameters are used when an argument is missing or undefined.
 *    - Example: greet(undefined) will use the default value, but greet(null) will not.
 *
 * 2. Default values can be expressions, including calculations or function calls.
 *    - Example: getDiscountedPrice(100) uses price * 0.1 as the default value for discount.
 *
 * 3. Default parameters are only applied if the argument is explicitly missing or undefined.
 *    - Example: greet(null) will pass null, not the default value.
 *


// =============================================
// BEST PRACTICES FOR DEFAULT PARAMETERS
// =============================================

/**
 * - Use default parameters to make functions more robust and reduce the need for additional checks.
 * - Avoid overly complex default expressions to keep your code readable.
 * - Combine with destructuring for functions that accept objects with optional properties.
 */
