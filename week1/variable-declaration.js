// JavaScript Variable Declarations: var, let, and const

// VAR Examples:

// 1. Declaring a variable with var
var name = "Alice"; // Declares a variable 'name' using var
console.log(name); // Output: Alice

// 2. var allows redeclaration
var name = "Bob"; // var allows redeclaration of the same variable
console.log(name); // Output: Bob

// 3. var is function-scoped, not block-scoped
if (true) {
  var age = 30; // Even though this is inside an if block, var is function-scoped
}
console.log(age); // Output: 30 (accessible outside the block)

// 4. var has hoisting behavior
console.log(city); // Output: undefined (var is hoisted but not initialized)
var city = "New York";

// 5. var in a function (function-scoped)
function greet() {
  var greeting = "Hello";
  console.log(greeting); // Output: Hello
}
// console.log(greeting); // Error: greeting is not defined (not accessible outside the function)

// LET Examples:

// 1. Declaring a variable with let
let language = "JavaScript"; // Declares a variable 'language' using let
console.log(language); // Output: JavaScript

// 2. let does not allow redeclaration in the same scope
// let language = "Python";  // Error: Identifier 'language' has already been declared

// 3. let is block-scoped
if (true) {
  let score = 100; // let is only accessible inside this block
  console.log(score); // Output: 100
}
// console.log(score); // Error: score is not defined (outside block)

// 4. let can be updated (mutable)
let framework = "React";
framework = "Vue"; // Updating the value of the variable
console.log(framework); // Output: Vue

// 5. No hoisting like var
// console.log(price); // Error: Cannot access 'price' before initialization
let price = 50;

// CONST Examples:

// 1. Declaring a constant with const
const PI = 3.14159; // Declares a constant 'PI'
console.log(PI); // Output: 3.14159

// 2. const cannot be reassigned
// PI = 3.14; // Error: Assignment to constant variable

// 3. const is block-scoped (just like let)
if (true) {
  const TAX_RATE = 0.1; // const is only accessible inside this block
  console.log(TAX_RATE); // Output: 0.1
}
// console.log(TAX_RATE); // Error: TAX_RATE is not defined (outside block)

// 4. const must be initialized at the time of declaration
// const discount; // Error: Missing initializer in const declaration

// 5. const objects can still be mutated
const user = { name: "John", age: 25 };
user.age = 26; // Although the object reference is constant, its properties can be updated
console.log(user); // Output: { name: 'John', age: 26 }

// Differences between var, let, and const:

/* 
  1. Scope:
     - var is function-scoped: Variables declared with var are accessible throughout the function.
     - let and const are block-scoped: Variables declared inside a block (e.g., if, for) are only accessible within that block.
  
  2. Redeclaration:
     - var allows redeclaration within the same scope.
     - let and const do not allow redeclaration in the same scope.
  
  3. Hoisting:
     - var variables are hoisted to the top of their scope but initialized as undefined.
     - let and const are hoisted but not initialized. Accessing them before initialization results in a ReferenceError.
  
  4. Reassignment:
     - var and let can be reassigned new values.
     - const cannot be reassigned once declared. However, const objects and arrays can have their properties or elements modified.
*/
