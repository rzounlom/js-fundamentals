// JavaScript Boolean Operators Conditionals and if statements: An Introduction

/*
The `if` statement is used to execute a block of code only if a specified condition is true.
Syntax:
    if (condition) {
        // code to run if condition is true
    }
If the condition is false, the code inside the `if` block is skipped.
*/

// Example 1: Basic if statement
// This example checks if a number is positive.
let number = 10;

if (number > 0) {
  //   console.log("The number is positive."); // Output: The number is positive.
}
// Explanation: The condition `number > 0` is true, so the code inside the `if` block runs.

//Example 2: Checking if a user is both logged in and has admin privileges (&& (AND) operator):
const isLoggedIn = true;
const isAdmin = false;

if (isLoggedIn && isAdmin) {
  //console.log("User has admin privileges.", isLoggedIn && isAdmin); // Output: User has admin privileges. false
} else {
  //console.log("User does not have admin privileges.", isLoggedIn && isAdmin); // Output: User does not have admin privileges. false
}

//Example 3: Verifying if a number is both positive and even (&& operator):
const number2 = 7;

if (number2 > 0 && number2 % 2 === 0) {
  // you can have as many checks as you want but make sure your logic is sound
  //console.log("The number is positive and even.");
} else {
  //console.log("The number is not positive and even.");
}

//Example 4: Checking if a user is older than 30 or has a laylaty card (|| (OR) operator):
const customerAge = 40;
const hasLoyaltyCard = false;

if (customerAge < 30 || hasLoyaltyCard) {
  //console.log("Customer is eligible for a discount.");
} else {
  //console.log("Customer is not eligible for a discount.");
}

//Example 5: Verifying if a vehicle is either a car or a motorcycle (|| (OR) operator):
const vehicleType = "bike";

if (vehicleType === "car" || vehicleType === "motorcycle") {
  //console.log("This vehicle is a car or a motorcycle.");
} else {
  //console.log("This vehicle is not a car or a motorcycle.");
}

//Example 6: Deciding if a user can access a premium feature based on subscription or high reputation (|| (OR) operator):
const hasSubscription = true;
const reputationScore = 500;

if (hasSubscription || reputationScore > 1000) {
  //console.log("User can access premium feature.");
} else {
  //console.log("User cannot access premium feature.");
}

//if else-if statement: chaining multiple conditions
//example 1:  chaining if statements to evaluate multiple conditions
const score = 70; //student score on test

if (score >= 90) {
  //console.log("You got an A!");
} else if (score >= 80) {
  //console.log("You got a B.");
} else if (score >= 70) {
  //console.log("You got a C.");
} else if (score >= 60) {
  //console.log("You got a D.");
} else {
  //console.log("You got an F.");
}

//Switch statement: a cleaner way to handle multiple conditions

//example 1: same example as above using a switch statement just different syntax
const score2 = 90;

switch (
  true //switch statement evaluates the expression in the parentheses
) {
  case score2 >= 90:
    //console.log("You got an A!");
    break;
  case score2 >= 80:
    //console.log("You got a B.");
    break;
  case score2 >= 70:
    //console.log("You got a C.");
    break;
  case score2 >= 60:
    //console.log("You got a D.");
    break;
  default: //default case if none of the cases match
  //console.log("You got an F.");
}

//example 2: switching on a varable instead of 'true'
const candyType = "test";

switch (candyType) {
  case "m&ms":
    //console.log("You selected: m&ms");
    break;
  case "snickers":
    //console.log("You selected: snickers");
    break;
  case "skittles":
    //console.log("You selected: skittles");
    break;
  default:
  //console.log("Hmmm... not sure what candy type you selected");
}

// Same example using else if instead
const candyType2 = "test";

if (candyType2 === "m&ms") {
  // onsole.log("You selected: m&ms");
} else if (candyType2 === "snickers") {
  // console.log("You selected: snickers");
} else if (candyType2 === "skittles") {
  // console.log("You selected: skittles");
} else {
  // console.log("Hmmm... not sure what candy type you selected");
}
