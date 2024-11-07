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
  "Johns Address": "777 Miracle Lane",
  sayHello: function () {
    console.log("Hello from John!");
  },
};

// John.sayHello(); // Hello
// console.log(John['Johns Address'])

//*** Accesing objects ***

//accessing objects using dot(.) notation

// console.log(person.firstName); // John
// console.log(person.lastName); // Doe
// console.log(person.age); // undefined because thie property(key) does not exists on the person objects

//accessing objects using bracket([]) notation

// console.log(person2["firstName"]); // Jane
// console.log(person2["lastName"]); // Doe
// console.log(person2["age"]); // undefined because thie property(key) does not exists on the person objects

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

//*** Checking object properties using the Object.hasOwnProperty method ***

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
// console.log(Jane['address']['zip'])

// console.log(Jane)

// drilling down to nested object properties
// console.log(Jane.address.city)

//checking object properties
// console.log(Jane.hasOwnProperty('firstName')) //true
// console.log(Jane.hasOwnProperty('lastName')) //true
// console.log(Jane.hasOwnProperty('age')) //true
// console.log(Jane.hasOwnProperty('middleName')) //false

//if you use varable as props we can ommit the use of quotes
const lastNameProp = "lastName";
const ageProp = "age";
const middleNameProp = "middleName";

//checking object properties
// console.log(Jane.hasOwnProperty(firstNameProp)) //true
// console.log(Jane.hasOwnProperty(lastNameProp)) //true
// console.log(Jane.hasOwnProperty(ageProp)) //true
// console.log(Jane.hasOwnProperty(middleNameProp)) //false

//*** Checking object properties using the Object.hasOwnProperty method ***
// console.log(Jane)

//checking object properties
// console.log('firstName' in Jane) //true
// console.log('lastName' in Jane) //true
// console.log('age' in Jane) //true
// console.log('middlename' in Jane) //false

//checking object properties
// console.log(firstNameProp in Jane) //true
// console.log(lastNameProp in Jane) //true
// console.log(ageProp in Jane) //true
// console.log(middleNameProp in Jane)  //false

//example objects challenge

/** 
  Write a function that takes in an object a and a property to check as parameters and checks that the property parameter exists on the object. 
  
  if the property does exist within the object, return the property and it's value using the string `prop = <prop>, value = <propertyValue>`
  
  if the property does not exist within the object, return the string 'The property <propertyName> does not exist'
  */

//declaring the function
function checkObjProp(obj, prop) {
  //check if the propery exists on the object passed in as a prop
  if (obj.hasOwnProperty(prop)) {
    //return the string containing the prop and its value from the rules. Notice we are using string interpolation so we can use variabbles within the string
    return `prop = ${prop}, value = ${obj[prop]}`;
  }

  //notice we omitted the else block. because the if statement will return a value if true, we know that the only way this last line of code will run is if it is false.
  return `The prop ${prop} does not exist on the object`;
}

//using our function by passing in the Jane object, and a prop to check

// console.log(checkObjProp(Jane, 'firstName'))
// console.log(checkObjProp(Jane, firstNameProp)) //using the firstName prop variable
// console.log(checkObjProp(Jane, 'lastName'))
// console.log(checkObjProp(Jane, lastNameProp)) //using the lastName prop variable
// console.log(checkObjProp(Jane, 'age'))
// console.log(checkObjProp(Jane, ageProp)) //using the age prop variable
// console.log(checkObjProp(Jane, 'occupation')) //using an prop that does not exist
// console.log(checkObjProp(Jane, 'favoriteFood')) //using an prop that does not exist

//add occupation to the Jane object
Jane.occupation = "Software Engineer";
Jane.favoriteFood = "pizza";

//check for the newly added props again
// console.log(checkObjProp(Jane, 'occupation'))
// console.log(checkObjProp(Jane, 'favoriteFood'))
