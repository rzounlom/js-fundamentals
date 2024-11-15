/* Arrow Function  --> A concise way to define a function using a more compact syntax.*/

//basic syntax

function basicFunction(parameters) {
  //basic function syntax
  // function body
  // return parameters;
}

// const myFunc = function (parameters) { //basic function syntax
//         // function body
//         // return parameters;
//     };

const basicArrowFunction = (parameters) => {
  //basic arrow function syntax
  // function body
  // return parameters;
};

//Example 1: Basic Arrow Function:
const greet = () => {
  console.log("Hello, world!");
  return;
};

// greet(); // Output: "Hello, world!"

const greet2 = () => console.log("Hello, world 2!"); // implicit return
// greet2();

//Example 2: Arrow Function with Parameters:
const sum = (a, b) => {
  return a + b;
};

const sum2 = (a, b) => a + b; //implicit return

// console.log(sum(5, 10)); // Output: 15
// console.log(sum2(5, 11)); // Output 16

//Example 3: Arrow Function with Implicit Return:
const square = (x) => x * x;

// console.log(square(4)); // Output: 16

//Example 4: Arrow Function in Map:
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((x) => x * x);
//same function using basic function syntax
const squaredNumbers2 = numbers.map(function (x) {
  return x * x;
});

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
// console.log(squaredNumbers2); // Output: [1, 4, 9, 16, 25]

//Example 5: Arrow Function with Object Literals:
const createPerson = (name, age) => ({ name: name, age: age });

//non arrow function example
const createPerson2 = function (name, age) {
  return { name: name, age: age };
};

const person = createPerson("Alice", 30);
// console.log(person); // Output: { name: "Alice", age: 30 }
