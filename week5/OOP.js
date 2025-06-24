//declaring objects
const myObj = {
  name: "Frank",
};

const myObj2 = new Object({
  name: "Frank",
});

//set up data
const myName = "Romaric";
const myOccupation = "Software Engineer";

/** OOP Basics */

/** Declaring an Object using a function*/

function Person(name, age) {
  //we declare a function called Person which takes in a name, and age as parameters.

  //We then assign the name and age property of the object to be equal to the parameters passed into the function using "this".

  /*Essentially the object created from this function will contain 3 properties: 
    1. a name property equal to the name parameter passed into the function upon creation, an age property 
    2. an age property equal to the age parameter passed into the function upon creation
    3. a function called sayHello that will print a greeting using the name assigned to the object
  
    NOTE: This is similar to the way we declare objects

  */

  this.name = name;
  this.age = age;
  this.sayHello = function () {
    console.log(`Hello, my name is ${this.name}.`);
  };

  /*
  NOTE: 
  The Keyword 'this' refers to the current instance of the object being created.
  In this case, it refers to the object created by the Person function.
   */
}

//Proof that functions are actually objects
// console.log("type of person: ", typeof Person);
// console.log("The prototype of a function is: ", Person.prototype); // All functions have the prototype of the Object data type.

//The prototype is an object that is used to define properties and methods that can be shared across all instances of the function.
//We can create an instance of the Person function using the 'new' keyword
//This creates a new object with the properties and methods defined in the Person function
//We can then access the properties and methods of the object using the dot notation

const person1 = new Person("Alice", 25);
// console.log(person1);
// person1.sayHello(); // invoke sayHello function; Output: "Hello, my name is Alice."
// console.log("person1 name: ", person1.name);

const James = new Person("James", 22);
// console.log(James);
// James.sayHello();

/** Declaring an Object using class syntax*/

//This example achieves the same objective as the function example above using different syntax

class Person2 {
  constructor(name, age) {
    /*
    this constructor function is identical to the function above.
    We assign the name and age parameters passed when creating a new instance of the Person2 Object as fields of the object 
    using the 'this' keyword
    */
    this.name = name;
    this.age = age;
  }

  //we can ommit the use of var, let or const when declaring class fields within a class.
  //We are not creating a variable, we are creating a class field that will be available to all instances of the class.

  //NOTE: we must declare these class fields outside of the construcore function
  sayHello = function () {
    //Notice how we did not need to use var/let/const to declare this function on the class
    console.log(`Hello, my name is ${this.name}.`);
  };
  test = "test"; // This is a class field, not a variable declaration
}

const person2 = new Person2("Laura", 25);
// console.log(person2);
// person2.sayHello(); // Output: "Hello, my name is Alice."
// console.log(person2.test); // Output: "Hello, my name is Alice."

/** Constructor functions */

/** 
  Constructor functions are used to create object instances. 
  
  They serve as templates for creating similar objects with shared properties and methods.
  */

/** The Dog function, or constructor function, can be used to create instances of the Dog class */
// This is a constructor function that creates a Dog object with properties and methods
function Dog(name, breed, owner) {
  this.name = name;
  this.breed = breed;
  this.owner = owner;
  this.greet = function () {
    console.log(
      `hi, my name is ${this.name}, I'm a ${this.breed}, and my owner's name is ${this.owner}`
    );
  };
}

const Fido = new Dog("Fido", "German Shepherd", "Jim Jones");
// console.log(Fido);
// Fido.greet();

/** The Dog function, or constructor function, can be used to create instances of the Dog class */

const Simba = new Dog("Simba", "Pitbull", "Lisa Smith");
// console.log(Simba);
// Simba.greet();

/** The Dog2 Class can be used to create instances of the Dog2 class using class syntax */
// This is a class that creates a Dog object with properties and methods
// It is similar to the Dog function above, but uses class syntax instead of function syntax
class Dog2 {
  constructor(name, breed, owner) {
    this.name = name;
    this.breed = breed;
    this.owner = owner;
  }

  greet = function () {
    console.log(
      `hi, my name is ${this.name}, I'm a ${this.breed}, and my owner's name is ${this.owner}`
    );
  };
}

const Tank = new Dog2("Tank", "German Shepherd", "Jim Jones");
// console.log(Tank);
// Tank.greet();

/** The Dog2 Class can be used to create instances of the Dog2 class */

const Shiloh = new Dog2("Shiloh", "Pitbull", "Lisa Smith");
// console.log(Shiloh);
// Shiloh.greet();

/** Prototypes and Inheritance using function syntax for demonstration purposes (NOT IDEAL)*/
function Student(name, age, grade) {
  Person.call(this, name, age); // Call the Person constructor
  this.grade = grade;
}

Student.prototype = Object.create(Person.prototype); // Inheritance: the student class inherits the Person properties
Student.prototype.constructor = Student; // Set the constructor back to Student

const student1 = new Student("Bob", 18, "A");
// student1.sayHello(); // Output: "Hello, my name is Bob."
// console.log(student1);
// console.log(student1 instanceof Person); // true proof that student1 is an instance of Person
// console.log(student1 instanceof Student); // true proof that student1 is an instance of Student

/** Prototypes and Inheritance using class syntax*/
class Student2 extends Person {
  constructor(name, age, grade) {
    super(name, age); // Call the parent class constructor
    this.grade = grade; //grade is unique to the Student2 class
  }

  introduce() {
    console.log(`I am a student in grade ${this.grade}.`);
  }
}

const student2 = new Student2("Alice", 23, 10);
// console.log(student2);
// student2.sayHello(); // Output: "Hello, my name is Alice." This works because Student2 inherits from Person
// student2.introduce(); // Output: "I am a student in grade 10."

// console.log(student2 instanceof Person)

//fresh example of OOP
class Car {
  constructor(make, model, color, year) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.year = year;
  }

  info = function () {
    console.log(
      `This Car is a ${this.year} ${this.color} ${this.make} ${this.model}`
    );
  };
}

// console.log({ Car });

const civic = new Car("Honda", "Civic", "blue", "2023");
// console.log(civic);
// civic.info()

class SportsCar extends Car {
  constructor(make, model, color, year, horsepower) {
    super(make, model, color, year);
    this.horsepower = horsepower;
  }

  sound = function () {
    console.log("VROOM VROOM");
  };
}

// console.log(SportsCar);

const lambo = new SportsCar("Lamborghini", "Murciélago", "yellow", "2023", 700);
// console.log(lambo);
// lambo.info();
// lambo.sound();

// console.log(Object.keys(lambo))

class HondaModels {
  constructor(models) {
    this.models = models;
  }
}

const hodaMakes = new HondaModels(["civic", "accord", "pilot", "venza"]);
// console.log(hodaMakes);
