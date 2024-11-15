//Promises and Async/Await: Test API we will be using can be found at: https://jsonplaceholder.typicode.com/

/* Promises --> provide a way to handle asynchronous operations more elegantly and manage their results and errors.
MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/
//Example 1: Basic Promise:
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = { id: 1, name: "Alice" };
    resolve(data);
    reject(() => new Error("Unnsuccessful call"));
  }, 4000);
});

// fetchData
//   .then((data) => {
//     console.log("Fetched data:", data);
//   })
//   .catch((error) => console.log(error));

//Promises using Fetch

//Example 1: Fetch a Single Todo
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((json) => {
//     console.log("Todo:", json); // Output: Todo: { userId: 1, id: 1, title: "delectus aut autem", completed: false }
//   })
//   .catch((error) => {
//     console.error("Error fetching the todo:", error);
//   });

//Example 2: Fetch all Todos
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Failed to fetch todos");
//     }
//     return response.json();
//   })
//   .then((todos) => {
//     console.log("All Todos:", todos.slice(0, 5)); // Output: First 5 todos
//   })
//   .catch((error) => {
//     console.error("Error fetching todos:", error);
//   });

/* Async/Await --> provide a cleaner way to handle asynchronous operations more elegantly and manage their results and errors.
MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
*/

//Fetch Examples using Async/Await Single

//Example 1: Fetch a Single Todo
async function fetchSingleTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const todo = await response.json();
    console.log("Todo:", todo); // Output: Todo: { userId: 1, id: 1, title: "delectus aut autem", completed: false }
  } catch (error) {
    console.error("Error fetching the todo:", error);
  }
}

// fetchSingleTodo();

//Example 2: Fetch a all Todos
async function fetchAllTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }
    const todos = await response.json();
    console.log("All Todos:", todos.slice(0, 5)); // Output: First 5 todos
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

// fetchAllTodos();

/*
Key Differences Between Promise Syntax and Async/Await
Readability:

Promise syntax uses .then and .catch, which can lead to chaining and indentation.
Async/await allows code to look synchronous, making it more readable for sequential operations.
Error Handling:

In Promise syntax, .catch handles errors for the entire chain.
In async/await, try-catch blocks are used for error handling.
Real-World Use:

Use Promise syntax when chaining multiple asynchronous operations.
Use async/await for cleaner code in asynchronous functions.
Both styles are valid and understanding both will help you work effectively with JavaScript.
 */
