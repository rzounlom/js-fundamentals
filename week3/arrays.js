/** Javascript Arrays */

//***Declaring arrays***

//declare arrays using the new keyword (Array Constructor)
const nums = new Array(1, 2, 3, 4, 5);
//console.log(nums);

const colors = new Array("red", "green", "blue");
//console.log(colors);

//in javascript, arrays can hold any data type including numbers, functions, objects, null, undefinded, booleans, etc.
const myVals = new Array(
  1,
  "red",
  false,
  { name: "Romaric" },
  2,
  "green",
  3,
  "blue",
  function myFunc() {
    //console.log("hello");
  }
);
//console.log(myVals);

//declare arrays using literal syntax (most common)
const fruits = ["apple", "banana", "orange"];
//console.log(fruits);

const myEmptyArr = [];
//console.log(myEmptyArr);

const mixed = [42, "hello", true, null, undefined];
//console.log(mixed);

//multidimentional array (arrays within arrays)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//console.log(matrix);

//console.log(matrix[1][2]);

/** Accessubg array elements */

//Indexing - using the index (starting with 0) to access array elements
const myFruits = ["apple", "banana", "orange"];

//console.log(myFruits[0]); // Output: "apple"
//console.log(myFruits[1]); // Output: "banana"
//console.log(myFruits[2]); // Output: "orange"
//console.log(myFruits[20]); // Output: "undefined" --> no value exists at index 20

//using the index to update an array element
myFruits[2] = "pear";
myFruits[6] = "plum";
//console.log(myFruits);
//console.log(myFruits[5]);
//console.log(myFruits[4]);

//***Common array operations ***

//length: returns the length of an array
//console.log(myFruits.length);

//push: adds one or more elements to the end of an array
myFruits.push("grapefruit", "grapes");
// myFruits[3] = 'strawberry'
//console.log(myFruits);

//pop: removes the last element in an array, which can be stored in a variable if needed
const myPopedValue = myFruits.pop();
//console.log(myFruits);
//console.log({ myPopedValue });
myFruits.pop();
//console.log(myFruits);

//storing the removed value in a variable
// const lastFruit = myFruits.pop()
// //console.log(lastFruit)

//shift: removes the first element in an array, which can be stored in a variable if needed
myFruits.shift();
//console.log(myFruits);

//storing the removed value in a variable
const firstFruit = myFruits.shift();
// //console.log(myFruits)
// //console.log(firstFruit)

//unshift: adds one or more elements to the beginning of an array
myFruits.unshift("apple", "cherry", "watermelon");
//console.log(myFruits);

//Array.length
// //console.log(myFruits.length)

//includes: checks a an element exists within an array; returns true/false
//console.log(myFruits.includes("apple")); //true
//console.log(myFruits.includes("straberry")); //false
