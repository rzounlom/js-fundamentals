// JavaScript Increment and Decrement Operators: An Introduction

/*
The increment (++) and decrement (--) operators are used to increase or decrease a variable's value by 1.

1. Increment (++)
   - Increases the value of a variable by 1.
   - Can be used in two ways: Pre-increment (++var) and Post-increment (var++).
   
2. Decrement (--)
   - Decreases the value of a variable by 1.
   - Can be used in two ways: Pre-decrement (--var) and Post-decrement (var--).
*/

// 1. Increment Operator (++)

// Example 1: Post-increment (var++)
// In post-increment, the current value is used in the expression first, and then the variable is incremented.
let count = 5;
console.log("Before post-increment:", count); // Output: 5
console.log("Post-increment (count++):", count++); // Output: 5 (value is used first)
console.log("After post-increment:", count); // Output: 6 (value incremented after use)

// Example 2: Pre-increment (++var)
// In pre-increment, the variable is incremented first, and then the new value is used in the expression.
let score = 5;
console.log("Before pre-increment:", score); // Output: 5
console.log("Pre-increment (++score):", ++score); // Output: 6 (value incremented first)
console.log("After pre-increment:", score); // Output: 6 (value remains incremented)

// Example 3: Increment inside a loop
// Increment is often used in loops to increase the loop counter.
for (let i = 0; i < 3; i++) {
  console.log("Loop iteration:", i); // Output: 0, 1, 2
  // i is incremented after each iteration
}

// 2. Decrement Operator (--)

// Example 1: Post-decrement (var--)
// In post-decrement, the current value is used in the expression first, and then the variable is decremented.
let items = 5;
console.log("Before post-decrement:", items); // Output: 5
console.log("Post-decrement (items--):", items--); // Output: 5 (value is used first)
console.log("After post-decrement:", items); // Output: 4 (value decremented after use)

// Example 2: Pre-decrement (--var)
// In pre-decrement, the variable is decremented first, and then the new value is used in the expression.
let level = 5;
console.log("Before pre-decrement:", level); // Output: 5
console.log("Pre-decrement (--level):", --level); // Output: 4 (value decremented first)
console.log("After pre-decrement:", level); // Output: 4 (value remains decremented)

// Example 3: Decrement inside a loop
// Decrement is often used in loops to decrease the loop counter.
for (let i = 3; i > 0; i--) {
  console.log("Loop iteration:", i); // Output: 3, 2, 1
  // i is decremented after each iteration
}

/*
Summary of Increment and Decrement Operators:

1. Increment (++)
   - Post-increment (var++): Increments the variable after its current value is used.
   - Pre-increment (++var): Increments the variable before its current value is used.

2. Decrement (--)
   - Post-decrement (var--): Decrements the variable after its current value is used.
   - Pre-decrement (--var): Decrements the variable before its current value is used.
*/
