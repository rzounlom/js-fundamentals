/*** Array Helper Methods  ***/

//setup data: array of numbers for examples
const numbers = [7, 8, 9, 10, 2, 3, 4, 5, 6];

//setup data: an array of objects for examples
const employees = [
  {
    id: 1,
    firstName: "James",
    lastName: "Johnson",
    title: "PM",
    salary: 80000,
    exp: 5,
    active: true,
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    title: "PM",
    salary: 90000,
    exp: 5,
    active: false,
  },
  {
    id: 3,
    firstName: "Kim",
    lastName: "Kelly",
    title: "Software Engineer",
    salary: 100000,
    exp: 8,
    active: true,
  },
  {
    id: 4,
    firstName: "Renee",
    lastName: "Jones",
    title: "Software Engineer 3",
    salary: 140000,
    exp: 12,
    active: true,
  },
  {
    id: 5,
    firstName: "Jane",
    lastName: "Doe",
    title: "Software Engineer Manager",
    salary: 180000,
    exp: 15,
    active: true,
  },
];

/** forEach --> Iterates through each element of the array and executes a callback function for each element.*/

// numbers.forEach(function (number, idx) {
//   //log each number in the numbers array. NOTE:the second parameter is the index of the item. it's optional, but is useful in certain situations.

//   console.log({ add2: number + 2, idx });
// });

//update numbers array using forEach
// numbers.forEach(function (number, idx) {
//   //log each number in the numbers array. NOTE:the second parameter is the index of the item. it's optional, but is useful in certain situations.

//   numbers[idx] = number * 2;
// });

// console.log("updated the original numbers array", numbers);

const printArrayNums = function (number, idx) {
  //log each number in the numbers array. NOTE:the second parameter is the index of the item. it's optional, but is useful in certain situations.

  console.log({ add2: number + 2, idx });
};

// numbers.forEach(printArrayNums);

//print the first and last name of each employee in a greeting
employees.forEach(function (employee) {
  // const {firstName, lastName, title, exp} = employee
  // console.log(`Hi, my name is ${employee.firstName} ${employee.lastName} and I'm a ${employee.title} with ${employee.exp} years of experience.`)
  // console.log(
  //   `Hi, my name is ${employee.firstName} ${employee.lastName} and I'm a ${employee.title} with ${employee.exp} years of experience.`
  // );
});

/** map --> Creates a new array by applying a function to each element of the original array. */

//returns a new array with each number doubled
const doubled = numbers.map(function (number) {
  return number * 2;
});

// console.log(doubled);
// console.log(numbers); //numbers stays the same

//returns a new array of strings specifying the employee name and new doulbed salary
const doubleEmployeeSalaries = employees.map(function (employee) {
  return `${
    employee.firstName
  } ${employee.lastName}'s new salary is $${employee.salary * 2}`;
});

// console.log(doubleEmployeeSalaries);
// console.log(employees);

/** filter -->  Creates a new array containing elements that pass a certain condition specified by a callback function. */

//returns a new array containing all even numbers
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

// console.log(evenNumbers);
// console.log(numbers);

//returns a new array of all employees who have Software Engineer in their title
const softwareEngineers = employees.filter(function (employee) {
  return employee.title.includes("Software Engineer");
});

// console.log(softwareEngineers);

/** find -->  Returns the first element in the array that satisfies a provided condition. */

//find the first number that is greater than 2
const greaterThanTwo = numbers.find(function (number) {
  return number > 2;
});

// console.log({ greaterThanTwo });

const greaterThan100 = numbers.find(function (number) {
  return number > 100;
});

// console.log({ greaterThan100 });

//find the first employee with employee id of 4
const foundEmployee = employees.find(function (employee) {
  return employee.id === 4;
});

// console.log({ foundEmployee });

//NOTE: in the above example, if the id was not found, then the find function will return undefined

//find the first employee with employee id of 30(does not exist)
const foundEmployee2 = employees.find(function (employee) {
  return employee.id === 30;
});

// console.log({ foundEmployee2 });

/** reduce --> Applies a function to each element of the array and accumulates the result into a single value.*/

//returns the sum of all numbers in the numbers array
const sum = numbers.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
}, 0); // Initial value of accumulator is 0

// console.log({ sum });

//returns the sum of all employee salaries
const sumOfEmployeeSalaries = employees.reduce(function (
  totalSalary,
  currentEmployee
) {
  return (totalSalary += currentEmployee.salary);
},
0);

// console.log({ sumOfEmployeeSalaries });

/** some --> Checks if at least one element in the array satisfies a provided condition. */

//returns true if there is at least 1 even number in the numbers array
const hasEvenNumber = numbers.some(function (number) {
  return number % 2 === 0;
});

// console.log({ hasEvenNumber });

//returns true if at least one employee has more than 10 years of experience
const hasTenYearsExp = employees.some(function (employee) {
  return employee.exp >= 10;
});

// console.log({ hasTenYearsExp });

/** every -->  Checks if all elements in the array satisfy a provided condition. */

//returns true if all numbers in the numbers array are even
const allEven = numbers.every(function (number) {
  return number % 2 === 0;
});

// console.log({ allEven });

//returns true if all employees are Software Engineers
const allSoftwareEngineers = employees.every(function (employee) {
  return employee.title.includes("Software Engineer");
});

// console.log({allSoftwareEngineers})

/** sort --> Sorts the elements of the array in place and returns the sorted array.

*/

//returns sorted numbers in the numbers array
const sortedNumbers = numbers.sort(function (a, b) {
  return a - b;
});

// console.log(sortedNumbers)

//returns an array of employees sorted alphabetiaclly by last name
const sortedEmployees = employees.sort(function (a, b) {
  switch (true) {
    case a.lastName < b.lastName:
      return -1;
    case a.lastName > b.lastName:
      return 1;
    default:
      return 0;
  }
});

// console.log(sortedEmployees)

//Here is a detailed explination of of ordering an array of objects with strings values: https://www.freecodecamp.org/news/how-to-sort-alphabetically-in-javascript/

/** concat --> Combines two or more arrays and returns a new array. */

const moreNumbers = [4, 5, 6];
const combined = numbers.concat(moreNumbers);

// console.log(combined)

/**  includes --> Checks if the array contains a specific element, returning a boolean. */

const hasThree = numbers.includes(3);

// console.log(hasThree)

//
