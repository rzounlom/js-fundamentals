// JavaScript Logical Operators: An Introduction

/*
Logical operators are used to combine or invert boolean (true/false) values in JavaScript.
Here are the main logical operators:
1. Logical AND (&&)
2. Logical OR (||)
3. Logical NOT (!)
*/

// 1. Logical AND (&&)
// The AND operator returns true if **both** operands are true, otherwise it returns false.

// Example 1: Both conditions are true
let isAdult = true;
let hasID = true;
console.log(isAdult && hasID); // Output: true (because both are true)

// Example 2: One condition is false
let isMember = false;
console.log(isAdult && isMember); // Output: false (because one is false)

// Example 3: Using logical AND with numbers (truthy values)
let a = 5;
let b = 10;
console.log(a > 0 && b < 20); // Output: true (because both conditions are true)

// 2. Logical OR (||)
// The OR operator returns true if **at least one** of the operands is true.

// Example 1: One condition is true
let hasLicense = false;
let hasPermit = true;
console.log(hasLicense || hasPermit); // Output: true (because one is true)

// Example 2: Both conditions are true
let isCitizen = true;
let isResident = true;
console.log(isCitizen || isResident); // Output: true (because both are true)

// Example 3: Both conditions are false
let hasJob = false;
let hasSavings = false;
console.log(hasJob || hasSavings); // Output: false (because both are false)

// 3. Logical NOT (!)
// The NOT operator inverts the value of a boolean. If the value is true, it becomes false, and vice versa.

// Example 1: Inverting a true value
let isHungry = true;
console.log(!isHungry); // Output: false (because NOT true is false)

// Example 2: Inverting a false value
let isTired = false;
console.log(!isTired); // Output: true (because NOT false is true)

// Example 3: Using NOT with comparisons
let score = 80;
console.log(!(score > 50)); // Output: false (because score > 50 is true, and NOT true is false)

/* 
Combining Logical Operators:
Logical operators can be combined to create more complex conditions.
*/

// Example: Combining AND and OR
let age = 20;
let hasTicket = true;
let canEnter = (age >= 18 && hasTicket) || isMember;
console.log("Can enter:", canEnter); // Output: true (age is 20, has ticket, so can enter)

/*
Summary of Logical Operators:

1. Logical AND (&&): Returns true if both conditions are true.
   Example: true && false returns false.

2. Logical OR (||): Returns true if at least one condition is true.
   Example: true || false returns true.

3. Logical NOT (!): Inverts the boolean value. True becomes false, and vice versa.
   Example: !true returns false.
*/
