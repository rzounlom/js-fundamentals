// JavaScript for loop: An Introduction
/*
A `for` loop is used to repeat a block of code a specific number of times.
Syntax:
    for (initialization; condition; increment/decrement) {
        code to execute in each loop iteration
    }

1. Initialization: Sets the starting point (e.g., let i = 0).
2. Condition: The loop runs as long as this condition is true (e.g., i < 5).
3. Increment/Decrement: Updates the counter (e.g., i++ or i--).
*/

// Example 1: Basic for loop (Counting from 1 to 5)
//console.log("Example 1: Counting from 1 to 5");
for (let i = 1; i <= 5; i++) {
  // console.log(i); // Output: 1, 2, 3, 4, 5
}
// Explanation:
// - `i` starts at 1. The loop runs as long as `i <= 5`.
// - After each iteration, `i` increments by 1 (i++).

//basic for loop when declaring a varaible ahead of time
//console.log("Basic for loop when declaring a variable ahead of time");
let idx = 1; //initialization(declare i as index)
for (; idx <= 5; idx++) {
  //condition(how many times to loop); update(what to increase index by after each iteration)
  // console.log("Iteration " + idx);
}

// Example 2: Counting down (from 5 to 1)
//console.log("Example 2: Counting down from 5 to 1");
for (let i = 5; i > 0; i--) {
  // console.log(i); // Output: 5, 4, 3, 2, 1
}
// Explanation:
// - `i` starts at 5. The loop runs as long as `i > 0`.
// - After each iteration, `i` decrements by 1 (i--).

// Example 3: Skipping values with increment of 2
//console.log("Example 3: Skipping values with increment of 2");
for (let i = 0; i <= 10; i += 2) {
  // console.log(i); // Output: 0, 2, 4, 6, 8, 10
}
// Explanation:
// - `i` starts at 0 and increments by 2 each time (i += 2).
// - This loop counts every other number from 0 to 10.

// Example 4: Breaking out of a loop early
//console.log("Example 4: Breaking out of a loop early");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    // console.log("Break out of loop at 5");
    break; // Stops the loop when `i` is 5 you can also use the 'return' keyword to break out of loop
  }
  // console.log(i); // Output: 1, 2, 3, 4
}
// Explanation:
// - The `break` statement exits the loop when `i` reaches 5, stopping further iterations.

// Example 5: Skipping an iteration with continue
//console.log("Example 5: Skipping an iteration with continue");
for (let i = 1; i <= 10; i++) {
  if (i === 3) {
    // console.log("Skipping 3");
    continue; // Skips the rest of the code in the loop for `i = 3`
  }
  // console.log(i); // Output: 1, 2, 4, 5
}
// Explanation:
// - The `continue` statement skips the current iteration when `i` is 3.
// - The loop then moves to the next iteration, so 3 is not printed.

//Example 6: print all even numbers from 1 - 10 to the console
//console.log("Example 6: Printing even numbers from 1 to 10");
for (let i = 0; i <= 10; i++) {
  if (i === 0) {
    // continue; //continue skips the current iteration if hte condition is met
    // console.log("Skipping 0!");
    continue;
  }

  if (i % 2 === 0) {
    //modulus
    //console.log(i)
    // console.log("even number: ", i);
  }
}

// Explanation:
// - The `continue` statement skips to the next iteration if i is 0 since we don't want to compute it.

//Exammple looping over a string and getting access to each character
let str = "hello world";
for (let i = 0; i < str.length; i++) {
  //we can also loop over other JS datastructures like Strings
  // console.log(str[i]); // prints each character of the string "hello world"
}

//example string problem
//write a for loop that reverses a string
let reversedStr = "";
for (let i = 0; i < str.length; i++) {
  // loop through each character in the string
  reversedStr = str[i] + reversedStr; // prepend the current character to the reversed string
}

// console.log(reversedStr); //dlrow olleh

//EXTRAS (optional):
/* for ... of loop
Description: The for...of loops allows us to iterate (loop) over datatypes such as strings, arrays, objects, etc.

The only down side of the for...of loop is that you do not have access to the index
*/

//Basic example
/* for (let variable of iterable) {  'variable' is the name of the varible you will use to store the value after each iteration; 'iterable' is what you will be iterating over

  code to be executed for each element
}
*/

// Example 1: print each letter of the following string to the console using a for...of loop
const myStr = "Print me to the console";

for (let char of myStr) {
  //the variable char represents each value in the string during each iteraiton; NOTE: we do not have access to the index using this loop
  // console.log("Char using for...of loop", char);
}

//same example using a for loop
for (let i = 0; i < myStr.length; i++) {
  //traditional for loop
  // console.log("char using basic for loop", myStr[i]); //we access the value of an iterable using bracket notation; NOTE: we will be covering how to access iterables next week.
}
