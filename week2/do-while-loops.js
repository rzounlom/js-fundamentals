// JavaScript do-while Loop: A Beginner's Guide

/*
A `do-while` loop is similar to a `while` loop, but it guarantees that the code inside the loop will run at least once.
Syntax:
    do {
        // code to execute
    } while (condition);

1. The `do` block runs first, executing the code inside.
2. After the `do` block runs, the `while` condition is checked.
3. If the condition is true, the loop repeats; if false, the loop stops.
*/

// Example 1: Basic do-while loop (Counting from 1 to 5)
console.log("Example 1: Counting from 1 to 5");
let count = 1;

do {
  console.log(count); // Output: 1, 2, 3, 4, 5
  count++; // Increment count by 1
} while (count <= 5);
// Explanation:
// - The code inside the `do` block runs first, and then `count <= 5` is checked.
// - Since `count` starts at 1, the loop will run until `count` is greater than 5.

// Example 2: Running the loop at least once even when the condition is false
console.log("Example 2: Run at least once even if condition is false");
let number = 10;

do {
  console.log(number); // Output: 10 (runs once even though condition is false)
  number++;
} while (number < 5);
// Explanation:
// - The loop runs once because the code in the `do` block executes before checking the condition.
// - The condition `number < 5` is false, so the loop stops after one run.

// Example 3: Skipping specific values with continue
console.log("Example 3: Skipping a specific value with continue");
let i = 0;

do {
  i++;
  if (i === 3) {
    console.log("Skipping 3");
    continue; // Skip the rest of the code when i is 3
  }
  console.log(i); // Output: 1, 2, 4, 5 (3 is skipped)
} while (i < 5);
// Explanation:
// - When `i` is 3, the `continue` statement skips `console.log(i)` for that iteration.

// Example 4: Breaking out of a do-while loop early
console.log("Example 4: Breaking out of a loop");
let n = 1;

do {
  console.log(n); // Output: 1, 2, 3
  if (n === 3) {
    break; // Exit the loop when n reaches 3
  }
  n++;
} while (n <= 5);
// Explanation:
// - The loop stops early when `n` is 3 due to the `break` statement, even though the condition is `n <= 5`.
