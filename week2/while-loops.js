// JavaScript while Loop

/*
A `while` loop repeats a block of code as long as a specified condition is true.
Syntax:
    while (condition) {
        // code to run as long as the condition is true
    }

1. The `condition` is checked before each iteration.
2. If the condition is `true`, the code block executes.
3. If the condition is `false`, the loop stops.
*/

// Example 1: Basic while loop (Counting from 1 to 5)
//console.log("Example 1: Counting from 1 to 5");
let count = 1;

while (count <= 5) {
  //console.log(count); // Output: 1, 2, 3, 4, 5
  count++; // Increment count by 1
}
// Explanation:
// - The loop runs as long as `count <= 5` is true.
// - After each iteration, `count` is incremented by 1.

// Example 2: Counting down with a while loop (from 5 to 1)
//console.log("Example 2: Counting down from 5 to 1");
let number = 5;

while (number > 0) {
  //console.log(number); // Output: 5, 4, 3, 2, 1
  number--; // Decrement number by 1
}
// Explanation:
// - The loop runs as long as `number > 0` is true.
// - After each iteration, `number` is decremented by 1.

// Example 3: Infinite loop with a break condition
//console.log("Example 3: Infinite loop with break");
let i = 1;

while (true) {
  // Infinite loop
  //console.log(i); // Output: 1, 2, 3, 4, 5
  if (i === 5) break; // Exit loop when i reaches 5
  i++;
}
// Explanation:
// - This loop runs indefinitely due to `while (true)`.
// - The `break` statement stops the loop when `i` reaches 5.

// Example 4: Using continue to skip an iteration
//console.log("Example 4: Skipping iteration with continue");
let num = 0;

while (num < 5) {
  num++;
  if (num === 3) {
    //console.log("Skipping 3");
    continue; // Skip the rest of this iteration
  }
  //console.log(num); // Output: 1, 2, 4, 5 (3 is skipped)
}
// Explanation:
// - The `continue` statement skips the rest of the code when `num` is 3.
// - The loop then moves to the next iteration without printing 3.
