// Javascript Comments
// asdfasdflkj
//Code comments: you can create code comments using two forward slashes, or //. This allows us to create comments that are ignored when our code executes. You can also you /* */ for multi-line comments

//----------------------------------------------------
// sdfasdfasdfasdf
/* Declaring Variables */

// asdfasdfkjh// JavaScript Comments: A Guide

// 1. Single-line Comment
// This is a single-line comment. Everything after the `//` is ignored by JavaScript.
// Single-line comments are useful for short explanations or notes.

let greeting = "Hello"; // This comment explains the greeting variable

// 2. Multi-line Comment
/* 
   This is a multi-line comment.
   It is useful when you need to write longer explanations or comments that span multiple lines.
   JavaScript will ignore everything between the symbols.
*/

let name = "Alice"; /* This variable holds the name of a user */

/* 
   3. Commenting out code
   You can use comments to temporarily disable code for debugging purposes. 
   For example, the next line of code will not execute because it's inside a comment.
   
   let age = 25; // This line is commented out and won't run
*/

// 4. Explaining a Function
// This function adds two numbers and returns the result
function addNumbers(num1, num2) {
  // Add num1 and num2, then return the result
  return num1 + num2;
}

//console.log(addNumbers(5, 3)); // Output: 8

// 5. Inline Comments for Clarity
function calculateArea(radius) {
  const pi = 3.14159; // Pi, a constant for circles
  // Calculate the area using the formula: area = pi * radius^2
  return pi * radius * radius;
}

//console.log(calculateArea(5)); // Output: 78.53975

// 6. String Concatenation with Comments
// Here, we're using the + operator to concatenate strings
let firstName = "John";
let lastName = "Doe";
// Concatenating the first name and last name
let fullName = firstName + " " + lastName;
//console.log("Full Name: " + fullName); // Output: Full Name: John Doe

// 7. Template Strings (Template Literals) with Comments
// Template strings allow for easier string interpolation using backticks (`) and ${} for variables
let city = "New York";
let country = "USA";
// Using template strings for a cleaner syntax
let location = `City: ${city}, Country: ${country}`;
//console.log(location); // Output: City: New York, Country: USA

// 8. Complex Condition with Comments
function isEligibleToVote(age) {
  // Check if age is 18 or greater
  if (age >= 18) {
    return "You are eligible to vote.";
  } else {
    return "You are not eligible to vote.";
  }
}

//console.log(isEligibleToVote(20)); // Output: You are eligible to vote.
//console.log(isEligibleToVote(16)); // Output: You are not eligible to vote.

/* 
  9. Describing Loop Logic with Comments
  This loop counts from 1 to 5 and logs each number to the console.
  Loops are essential for repeating actions in JavaScript.
*/
for (let i = 1; i <= 5; i++) {
  //console.log(i); // Logs the current value of i
}

// 10. Describing Higher-order Functions
/* 
  A higher-order function is a function that accepts another function as an argument.
  Below, `applyFunction` is a higher-order function that applies a given function to two numbers.
*/
function applyFunction(fn, x, y) {
  // Call the function `fn` with arguments `x` and `y`
  return fn(x, y);
}

// Passing the addNumbers function as a callback to applyFunction
//console.log(applyFunction(addNumbers, 5, 7)); // Output: 12
