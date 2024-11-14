// template literals

// =============================================
// WHAT ARE TEMPLATE LITERALS?
// =============================================
/**
 * Template literals are a feature in ES6 that allow us to create strings with:
 * - Embedded expressions
 * - Multiline strings
 *
 * They use backticks (`) instead of quotes (' or ").
 */

// =============================================
// EXAMPLE 1: String Interpolation
// =============================================

// console.log(`
// =============================================
// EXAMPLE 1: String Interpolation
// =============================================
// `);
// Using template literals
const firstName = "John";
const lastName = "Doe";
const age = 30;
const introductionWithTemplate = `Hi, my name is ${firstName} ${lastName}, and I am ${age} years old.`;
// console.log(introductionWithTemplate); // Output: Hi, my name is John Doe, and I am 30 years old.

// console.log("=============================================");
// Without template literals (using string concatenation)
const introductionWithoutTemplate =
  "Hi, my name is " +
  firstName +
  " " +
  lastName +
  ", and I am " +
  age +
  " years old.";
// console.log(introductionWithoutTemplate); // Output: Hi, my name is John Doe, and I am 30 years old.

// =============================================
// EXAMPLE 2: Multiline Strings
// =============================================
// console.log(`
// =============================================
// EXAMPLE 2: Multiline Strings
// =============================================
// `);
// Using template literals
const multilineWithTemplate = `This is line one.
This is line two.
This is line three.`;
// console.log(multilineWithTemplate);
// Output:
// This is line one.
// This is line two.
// This is line three.
// console.log("=============================================");

// Without template literals (using newline characters)
const multilineWithoutTemplate =
  "This is line one.\n" + "This is line two.\n" + "This is line three.";
// console.log(multilineWithoutTemplate);
// Output:
// This is line one.
// This is line two.
// This is line three.

// =============================================
// EXAMPLE 3: Embedding Expressions
// =============================================
// console.log(`
// =============================================
// EXAMPLE 3: Embedding Expressions
// =============================================
// `);
// Using template literals
const num1 = 10;
const num2 = 20;
const sumWithTemplate = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;
// console.log(sumWithTemplate); // Output: The sum of 10 and 20 is 30.
// console.log("=============================================");

// Without template literals
const sumWithoutTemplate =
  "The sum of " + num1 + " and " + num2 + " is " + (num1 + num2) + ".";
// console.log(sumWithoutTemplate); // Output: The sum of 10 and 20 is 30.
