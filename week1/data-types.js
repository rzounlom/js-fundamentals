// JavaScript Primitive Data Types: An Introduction

/* 
JavaScript has 7 primitive data types:
1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt
*/

// 1. String
// A string is a sequence of characters enclosed in quotes (single, double, or backticks).

// Example 1: Declaring a string
let greeting = "Hello, world!";
console.log(greeting); // Output: Hello, world!

// Example 2: String concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // Concatenating strings
console.log(fullName); // Output: John Doe

// Example 3: Template literals (ES6)
let city = "New York";
let message = `Welcome to ${city}`; // Using template literals for easier concatenation
console.log(message); // Output: Welcome to New York

// 2. Number
// Numbers in JavaScript can be integers or floating-point values (decimals).

// Example 1: Declaring an integer
let age = 25;
console.log(age); // Output: 25

// Example 2: Declaring a floating-point number
let price = 19.99;
console.log(price); // Output: 19.99

// Example 3: Performing arithmetic operations
let sum = 10 + 5; // Addition
let product = 10 * 5; // Multiplication
console.log(`Sum: ${sum}, Product: ${product}`); // Output: Sum: 15, Product: 50

// 3. Boolean
// Booleans represent one of two values: true or false.

// Example 1: Boolean declaration
let isAdult = true;
console.log(isAdult); // Output: true

// Example 2: Using booleans in conditions
let canVote = age >= 18; // Checks if age is 18 or greater
console.log(canVote); // Output: true

// Example 3: Logical operations
let hasID = true;
let isAllowed = isAdult && hasID; // Both conditions must be true
console.log(isAllowed); // Output: true

// 4. Undefined
// A variable that has been declared but not assigned a value is undefined.

// Example 1: Declaring a variable without initializing it
let middleName;
console.log(middleName); // Output: undefined

// Example 2: Function with no return value
function sayHello() {
  console.log("Hello!");
}
let result = sayHello(); // The function returns undefined
console.log(result); // Output: undefined

// Example 3: Missing object properties
let person = { firstName: "John", lastName: "Doe" };
console.log(person.age); // Output: undefined (age property is not defined)

// 5. Null
// Null is an assignment value that represents the intentional absence of any object value.

// Example 1: Assigning null to a variable
let jobTitle = null; // Job title is intentionally set to null
console.log(jobTitle); // Output: null

// Example 2: Resetting a variable to null
let balance = 100;
balance = null; // Balance is reset to null
console.log(balance); // Output: null

// Example 3: Null in conditional checks
if (jobTitle === null) {
  console.log("Job title is not set.");
} // Output: Job title is not set.

// 6. Symbol (ES6)
// A Symbol is a unique and immutable data type often used for object properties to avoid name clashes.

// Example 1: Creating a symbol
let sym1 = Symbol();
let sym2 = Symbol();
console.log(sym1 === sym2); // Output: false (each symbol is unique)

// Example 2: Symbol with a description
let symWithDescription = Symbol("description");
console.log(symWithDescription); // Output: Symbol(description)

// Example 3: Using symbols as object keys
let id = Symbol("id");
let user = {
  [id]: 12345,
  name: "Alice",
};
console.log(user[id]); // Output: 12345

// 7. BigInt (ES2020)
// BigInt is used for integers that are too large to be represented by the number type.

// Example 1: Declaring a BigInt
let bigIntNumber = 1234567890123456789012345678901234567890n; // Use 'n' to denote a BigInt
console.log(bigIntNumber); // Output: 1234567890123456789012345678901234567890n

// Example 2: BigInt operations
let bigSum = bigIntNumber + 1000n; // Arithmetic operations with BigInt
console.log(bigSum); // Output: 1234567890123456789012345678901234568890n

// Example 3: Comparing BigInt to regular numbers
let regularNumber = 100;
console.log(bigIntNumber > regularNumber); // Output: true (BigInt is much larger)

// Summary of Primitive Data Types:
/*
1. String: Text data. Example: "Hello, world!"
2. Number: Numeric data (both integers and decimals). Example: 42, 3.14
3. Boolean: Represents true or false. Example: true, false
4. Undefined: A variable declared but not assigned a value. Example: let x;
5. Null: Represents the absence of a value. Example: let y = null;
6. Symbol: Unique and immutable value used for unique object properties. Example: Symbol("id")
7. BigInt: Large integers beyond the safe limit of regular numbers. Example: 12345678901234567890n
*/
