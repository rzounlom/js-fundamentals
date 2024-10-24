// JavaScript Assignment Operators: An Introduction

/*
Assignment operators are used to assign values to variables in JavaScript.
Here are the most common assignment operators:
1. Assignment (=)
2. Addition Assignment (+=)
3. Subtraction Assignment (-=)
4. Multiplication Assignment (*=)
5. Division Assignment (/=)
6. Modulus Assignment (%=)
7. Exponentiation Assignment (**=)
*/

// 1. Assignment Operator (=)
// The assignment operator is used to assign a value to a variable.

// Example 1: Assigning a number
let age = 25;
//console.log("Age:", age); // Output: Age: 25

// Example 2: Assigning a string
let name = "Alice";
//console.log("Name:", name); // Output: Name: Alice

// Example 3: Assigning the result of an expression
let result = 5 + 3;
//console.log("Result:", result); // Output: Result: 8

// 2. Addition Assignment Operator (+=)
// The addition assignment operator adds a value to a variable and then assigns the result to the variable.

// Example 1: Adding a number to a variable
let score = 10;
score += 5; // Equivalent to: score = score + 5
//console.log("Score after += 5:", score); // Output: Score after += 5: 15

// Example 2: Adding a string to a variable
let greeting = "Hello";
greeting += " World"; // Equivalent to: greeting = greeting + " World"
//console.log("Greeting after +=:", greeting); // Output: Greeting after +=: Hello World

// Example 3: Using += with an expression
let total = 50;
total += 10 * 2; // Equivalent to: total = total + (10 * 2)
//console.log("Total after +=:", total); // Output: Total after +=: 70

// 3. Subtraction Assignment Operator (-=)
// The subtraction assignment operator subtracts a value from a variable and assigns the result to the variable.

// Example 1: Subtracting a number from a variable
let balance = 100;
balance -= 20; // Equivalent to: balance = balance - 20
//console.log("Balance after -= 20:", balance); // Output: Balance after -= 20: 80

// Example 2: Subtracting a value calculated from an expression
let steps = 10;
steps -= 3 + 2; // Equivalent to: steps = steps - (3 + 2)
//console.log("Steps after -= 5:", steps); // Output: Steps after -= 5: 5

// Example 3: Subtracting a value from a variable in a loop
for (let i = 10; i > 0; i -= 2) {
  //console.log("i after -= 2:", i); // Output: i after -= 2: 10, 8, 6, 4, 2
}

// 4. Multiplication Assignment Operator (*=)
// The multiplication assignment operator multiplies a variable by a value and assigns the result to the variable.

// Example 1: Multiplying a variable by a number
let price = 20;
price *= 2; // Equivalent to: price = price * 2
//console.log("Price after *= 2:", price); // Output: Price after *= 2: 40

// Example 2: Multiplying by an expression
let width = 5;
width *= 3 + 1; // Equivalent to: width = width * (3 + 1)
//console.log("Width after *=:", width); // Output: Width after *=: 20

// Example 3: Doubling a value in a loop
let counter = 1;
while (counter < 100) {
  counter *= 2; // Doubling the counter
  //console.log("Counter after *= 2:", counter);
}
// Output: Counter after *= 2: 2, 4, 8, 16, 32, 64

// 5. Division Assignment Operator (/=)
// The division assignment operator divides a variable by a value and assigns the result to the variable.

// Example 1: Dividing a variable by a number
let points = 50;
points /= 2; // Equivalent to: points = points / 2
//console.log("Points after /= 2:", points); // Output: Points after /= 2: 25

// Example 2: Dividing by an expression
let length = 100;
length /= 2 + 3; // Equivalent to: length = length / (2 + 3)
//console.log("Length after /=:", length); // Output: Length after /=: 20

// Example 3: Repeated division in a loop
let count = 100;
while (count > 1) {
  count /= 2;
  //console.log("Count after /= 2:", count);
}
// Output: Count after /= 2: 50, 25, 12.5, 6.25, 3.125, 1.5625, 0.78125

// 6. Modulus Assignment Operator (%=)
// The modulus assignment operator assigns the remainder of division to a variable.

// Example 1: Getting the remainder of division
let remainder = 10;
remainder %= 3; // Equivalent to: remainder = remainder % 3
//console.log("Remainder after %= 3:", remainder); // Output: Remainder after %= 3: 1

// Example 2: Modulus with a variable
let modResult = 25;
modResult %= 4; // Equivalent to: modResult = modResult % 4
//console.log("ModResult after %= 4:", modResult); // Output: ModResult after %= 4: 1

// Example 3: Modulus to check even/odd
let number = 7;
let isOdd = number % 2;
//console.log("Is number odd (1 means yes):", isOdd); // Output: Is number odd: 1 (1 means true, it's odd)

// 7. Exponentiation Assignment Operator (**=)
// The exponentiation assignment operator raises a variable to the power of a value and assigns the result.

// Example 1: Raising a variable to a power
let base = 3;
base **= 2; // Equivalent to: base = base ** 2 (3 raised to the power of 2)
//console.log("Base after **= 2:", base); // Output: Base after **= 2: 9

// Example 2: Exponentiation with an expression
let baseNum = 2;
baseNum **= 3 + 1; // Equivalent to: baseNum = baseNum ** (3 + 1)
//console.log("BaseNum after **=:", baseNum); // Output: BaseNum after **= 16

// Example 3: Exponentiation in a loop
let value = 2;
for (let i = 1; i <= 3; i++) {
  value **= i; // Raising to successive powers
  //console.log(`Value after raising to the power of ${i}:`, value);
}
// Output:
// Value after raising to the power of 1: 2
// Value after raising to the power of 2: 4
// Value after raising to the power of 3: 64

/*
Summary of Assignment Operators:

1. Assignment (=): Assigns a value to a variable.
   Example: x = 10;

2. Addition Assignment (+=): Adds a value to a variable and assigns the result.
   Example: x += 5 (x = x + 5);

3. Subtraction Assignment (-=): Subtracts a value from a variable and assigns the result.
   Example: x -= 3 (x = x - 3);

4. Multiplication Assignment (*=): Multiplies a variable by a value and assigns the result.
   Example: x *= 2 (x = x * 2);

5. Division Assignment (/=): Divides a variable by a value and assigns the result.
   Example: x /= 2 (x = x / 2);

6. Modulus Assignment (%=): Assigns the remainder of division to a variable.
   Example: x %= 3 (x = x % 3);

7. Exponentiation Assignment (**=): Raises a variable to the power of a value and assigns the result.
   Example: x **= 2 (x = x ** 2).
*/
