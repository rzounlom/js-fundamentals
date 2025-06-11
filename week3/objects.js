/*** Javascript Objects Basics ****/

//*** Declaring objects ***

//Objects are used to store key/value pairs
// using the new keyword
const person = new Object({
  firstName: "John", //key = firstName, value = John
  lastName: "Doe", //key = lastName, value = Doe
});

// console.log(person);

// using object literal syntax
const person2 = {
  firstName: "Jane", //key = firstName, value = Jane
  lastName: "Doe", //key = lastName, value = Doe
};

// console.log(person2);

// we can store any datype within objects. Notice that we have stored a fucntion as the sayHello property
const John = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  "Johns Address": "777 Miracle Lane", // key with a space in it, so we need to use quotes around it
  sayHello: function () {
    console.log("Hello from John!");
  },
};

//*** Accesing objects ***

//accessing objects using dot(.) notation

// console.log(person.firstName); // John
// console.log(person.lastName); // Doe
// console.log(person.age); // undefined because thie property(key) does not exists on the person objects

//accessing objects using bracket([]) notation

// console.log(person2["firstName"]); // Jane
// console.log(person2["lastName"]); // Doe
// console.log(person2["age"]); // undefined because thie property(key) does not exists on the person objects
// console.log(John['Johns Address'])

//Invoking the sayHello function on the John object
// John.sayHello(); // Hello

//using bracket notation with a property stored as a varialbe
const firstNameProp = "firstName";

// console.log(person[firstNameProp]) //Notice that we did not need to use the quotes around the firstNameProp variable

//*** Modifying objects ***

//modifying objects using dot(.) notation
person.firstName = "Michael";
person.lastName = "Williams";
person.age = 30; // since the age prop did not exist, it was added to the person object. If it did exist it would have been updated

// console.log(person);

//modifying objects using bracket([]) notation
person2["firstName"] = "Stacy";
person2["lastName"] = "Smith";
person2["age"] = 25; // since the age prop did not exist, it was added to the person object. If it did exist it would have been updated

// console.log(person2);

//*** Accessing nested object properties***

const Jane = {
  firstName: "Jane",
  lastName: "Doe",
  age: 30,
  sayHello: function () {
    console.log("Hello!");
  },
  address: {
    city: "Indy",
    state: "IN",
    zip: "4565456",
  },
};

//Access Jane's state using dot notation
// console.log(Jane.address.state);

//Access Jane's state using bracket notation
// console.log(Jane["address"]["zip"]);

// console.log(Jane)

// drilling down to nested object properties
// console.log(Jane.address.city)
