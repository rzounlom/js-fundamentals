// JavaScript Arithmetic Operators: An Introduction

/*
In JavaScript, arithmetic operators are used to perform basic mathematical operations.
Here are the main arithmetic operators:
1. Addition (+)
2. Subtraction (-)
3. Multiplication (*)
4. Division (/)
5. Modulus (Remainder) (%)
6. Exponentiation (**)
7. Increment (++)
8. Decrement (--)
*/

// 1. Addition (+)
// The addition operator (+) adds two numbers (or concatenates strings).

// Example 1: Adding two numbers
let sum = 5 + 3;
console.log("5 + 3 = " + sum); // Output: 5 + 3 = 8

// Example 2: Adding more than two numbers
let total = 10 + 20 + 30;
console.log("10 + 20 + 30 = " + total); // Output: 10 + 20 + 30 = 60

// Example 3: Using addition with strings (concatenation)
let greeting = "Hello" + " " + "World";
console.log(greeting); // Output: Hello World

// 2. Subtraction (-)
// The subtraction operator (-) subtracts one number from another.

// Example 1: Simple subtraction
let difference = 10 - 3;
console.log("10 - 3 = " + difference); // Output: 10 - 3 = 7

// Example 2: Subtracting negative numbers
let result = 20 - -5; // Subtracting a negative is the same as adding
console.log("20 - (-5) = " + result); // Output: 20 - (-5) = 25

// Example 3: Subtracting variables
let a = 50;
let b = 15;
let subtractResult = a - b;
console.log("50 - 15 = " + subtractResult); // Output: 50 - 15 = 35

// 3. Multiplication (*)
// The multiplication operator (*) multiplies two numbers.

// Example 1: Simple multiplication
let product = 4 * 3;
console.log("4 * 3 = " + product); // Output: 4 * 3 = 12

// Example 2: Multiplying variables
let x = 7;
let y = 6;
let resultMul = x * y;
console.log("7 * 6 = " + resultMul); // Output: 7 * 6 = 42

// Example 3: Multiplying by zero
let zeroProduct = 10 * 0;
console.log("10 * 0 = " + zeroProduct); // Output: 10 * 0 = 0

// 4. Division (/)
// The division operator (/) divides one number by another.

// Example 1: Simple division
let quotient = 12 / 4;
console.log("12 / 4 = " + quotient); // Output: 12 / 4 = 3

// Example 2: Division with floating-point numbers
let floatResult = 7 / 2;
console.log("7 / 2 = " + floatResult); // Output: 7 / 2 = 3.5

// Example 3: Division by zero
let divideByZero = 10 / 0;
console.log("10 / 0 = " + divideByZero); // Output: 10 / 0 = Infinity

// 5. Modulus (Remainder) (%)
// The modulus operator (%) returns the remainder of a division.

// Example 1: Modulus with positive numbers
let remainder = 10 % 3;
console.log("10 % 3 = " + remainder); // Output: 10 % 3 = 1

// Example 2: Checking if a number is even or odd
let isOdd = 7 % 2;
console.log("7 % 2 = " + isOdd); // Output: 7 % 2 = 1 (Odd)

// Example 3: Modulus with negative numbers
let negativeModulus = -10 % 3;
console.log("-10 % 3 = " + negativeModulus); // Output: -10 % 3 = -1

// 6. Exponentiation (**)
// The exponentiation operator (**) raises the first number to the power of the second number.

// Example 1: Simple exponentiation
let power = 2 ** 3; // 2 raised to the power of 3
console.log("2 ** 3 = " + power); // Output: 2 ** 3 = 8

// Example 2: Squaring a number
let square = 5 ** 2; // 5 squared (5 raised to the power of 2)
console.log("5 ** 2 = " + square); // Output: 5 ** 2 = 25

// Example 3: Exponentiation with a negative exponent
let negativeExponent = 2 ** -2;
console.log("2 ** -2 = " + negativeExponent); // Output: 2 ** -2 = 0.25

// 7. Increment (++)
// The increment operator (++) increases a number by 1.

// Example 1: Post-increment
let count = 0;
console.log("Count before increment: " + count); // Output: 0
count++;
console.log("Count after increment: " + count); // Output: 1

// Example 2: Pre-increment
let value = 5;
console.log("Pre-increment: " + ++value); // Output: 6

// Example 3: Using increment in a loop
for (let i = 0; i < 3; i++) {
  console.log("Incrementing: " + i);
}
// Output:
// Incrementing: 0
// Incrementing: 1
// Incrementing: 2

// 8. Decrement (--)
// The decrement operator (--) decreases a number by 1.

// Example 1: Post-decrement
let counter = 5;
console.log("Counter before decrement: " + counter); // Output: 5
counter--;
console.log("Counter after decrement: " + counter); // Output: 4

// Example 2: Pre-decrement
let number = 10;
console.log("Pre-decrement: " + --number); // Output: 9

// Example 3: Using decrement in a loop
for (let i = 3; i > 0; i--) {
  console.log("Decrementing: " + i);
}
// Output:
// Decrementing: 3
// Decrementing: 2
// Decrementing: 1

/*
Summary of Arithmetic Operators:

1. Addition (+): Adds two numbers or concatenates strings.
2. Subtraction (-): Subtracts one number from another.
3. Multiplication (*): Multiplies two numbers.
4. Division (/): Divides one number by another.
5. Modulus (%): Returns the remainder of a division.
6. Exponentiation (**): Raises a number to the power of another number.
7. Increment (++): Increases a number by 1.
8. Decrement (--): Decreases a number by 1.

These operators form the foundation of mathematical operations in JavaScript.
*/
