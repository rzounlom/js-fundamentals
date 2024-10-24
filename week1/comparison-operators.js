// JavaScript Comparison Operators: An Introduction

/*
Comparison operators are used to compare two values and return a boolean result (true or false).
Here are the main comparison operators:
1. Equal (==)
2. Strict Equal (===)
3. Not Equal (!=)
4. Strict Not Equal (!==)
5. Greater Than (>)
6. Greater Than or Equal (>=)
7. Less Than (<)
8. Less Than or Equal (<=)
*/

// 1. Equal (==)
// The equal operator checks if two values are equal, performing type coercion (automatic type conversion).

// Example 1: Comparing numbers
//console.log(5 == 5); // Output: true

// Example 2: Comparing number and string (type coercion happens)
//console.log(5 == "5"); // Output: true (because of type coercion)

// Example 3: Comparing different values
//console.log(10 == 20); // Output: false

// 2. Strict Equal (===)
// The strict equal operator checks if two values are equal AND of the same type (no type coercion).

// Example 1: Comparing numbers
//console.log(5 === 5); // Output: true

// Example 2: Comparing number and string (no type coercion)
//console.log(5 === "5"); // Output: false (different types)

// Example 3: Comparing boolean values
//console.log(true === true); // Output: true

// 3. Not Equal (!=)
// The not equal operator checks if two values are not equal, performing type coercion.

// Example 1: Comparing different numbers
//console.log(10 != 5); // Output: true

// Example 2: Comparing number and string (type coercion happens)
//console.log(5 != "5"); // Output: false (due to type coercion)

// Example 3: Comparing strings
//console.log("hello" != "world"); // Output: true

// 4. Strict Not Equal (!==)
// The strict not equal operator checks if two values are not equal OR not of the same type (no type coercion).

// Example 1: Comparing different numbers
//console.log(10 !== 5); // Output: true

// Example 2: Comparing number and string (no type coercion)
//console.log(5 !== "5"); // Output: true (different types)

// Example 3: Comparing boolean values
//console.log(true !== false); // Output: true

// 5. Greater Than (>)
// The greater than operator checks if the left-hand value is greater than the right-hand value.

// Example 1: Comparing numbers
//console.log(10 > 5); // Output: true

// Example 2: Comparing strings (based on lexicographical order)
//console.log("banana" > "apple"); // Output: true (because 'b' comes after 'a')

// Example 3: Comparing numbers and strings (type coercion happens)
//console.log(10 > "5"); // Output: true (type coercion)

/* 
6. Greater Than or Equal (>=)
The greater than or equal operator checks if the left-hand value is greater than or equal to the right-hand value.
*/

// Example 1: Comparing numbers
//console.log(10 >= 10); // Output: true

// Example 2: Comparing different numbers
//console.log(15 >= 20); // Output: false

// Example 3: Comparing number and string (type coercion happens)
//console.log(7 >= "5"); // Output: true

// 7. Less Than (<)
// The less than operator checks if the left-hand value is less than the right-hand value.

// Example 1: Comparing numbers
//console.log(5 < 10); // Output: true

// Example 2: Comparing strings (based on lexicographical order)
//console.log("apple" < "banana"); // Output: true (because 'a' comes before 'b')

// Example 3: Comparing numbers and strings (type coercion happens)
//console.log(5 < "10"); // Output: true

// 8. Less Than or Equal (<=)
// The less than or equal operator checks if the left-hand value is less than or equal to the right-hand value.

// Example 1: Comparing numbers
//console.log(5 <= 5); // Output: true

// Example 2: Comparing different numbers
//console.log(5 <= 3); // Output: false

// Example 3: Comparing number and string (type coercion happens)
//console.log(5 <= "10"); // Output: true

/*
Summary of Comparison Operators:

1. Equal (==): Compares two values after performing type coercion.
   Example: 5 == "5"; (true because of type coercion)

2. Strict Equal (===): Compares two values without performing type coercion; values must be of the same type.
   Example: 5 === "5"; (false because they are of different types)

3. Not Equal (!=): Compares two values after performing type coercion to check if they are not equal.
   Example: 5 != "5"; (false because they are equal after type coercion)

4. Strict Not Equal (!==): Compares two values without type coercion to check if they are not equal.
   Example: 5 !== "5"; (true because they are of different types)

5. Greater Than (>): Checks if the left-hand value is greater than the right-hand value.
   Example: 10 > 5; (true)

6. Greater Than or Equal (>=): Checks if the left-hand value is greater than or equal to the right-hand value.
   Example: 5 >= 5; (true)

7. Less Than (<): Checks if the left-hand value is less than the right-hand value.
   Example: 5 < 10; (true)

8. Less Than or Equal (<=): Checks if the left-hand value is less than or equal to the right-hand value.
   Example: 5 <= 5; (true)
*/
