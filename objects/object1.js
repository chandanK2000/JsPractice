// What are JavaScript Objects?
// Objects are variables that can store both values and functions.

// Values are stored as key:value pairs called properties.

// Functions are stored as key:function() pairs called methods.

const person = {
  name: "mohan",
  lname: "singh",
  age: 29,
  address: "karnataka",
  state: "Karnataka",
  city: "Bengaluru",
  eyeColor: "red",
  fullName: function () {
    return this.name + " " + this.lname;
  },
};

// adding property in person objects
person.age = 40;
person.nationality = "indian";

// delete propery from person objects
// delete person.address;

// adding method in person objects
person.fullAddress = function () {
  return this.state + ", " + this.city;
};

let firstname = person.name;
let personage = person.age;
let nationality = person.nationality;
console.log(
  `the person name is ${firstname} and age is ${personage} and nationality is ${nationality}`,
);
// Calling the methods
console.log(person.fullName());
console.log(person.fullAddress());
console.log(person);
console.log(`the person fullname is ${person.fullName()}`);
console.log(person.address);

let result = "name" in person;

console.log(result);

// create empty objects

const students = {};

students.firstname = "rohan";
students.lastname = "kumar";
students.age = 27;

let studentName = students.firstname;
let studentage = students.age;

console.log(students);
console.log(`the student name is ${studentName} and age is ${studentage}`);

// nested objects
console.log("-----------Nested Objects----------");

myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};

let mycarname1 = myObj.myCars.car1;
let mycarname2 = myObj.myCars["car2"];
let mycarname3 = myObj["myCars"]["car3"];

console.log(`my car Name is ${mycarname1} and ${mycarname2} and ${mycarname3}`);

// Q why this is using :--------

// this is a keyword that refers to the object associated with the current function call. Its value depends on how the function is called.
// Example:
// const person = {
//     name: "Mohan",
//     age: 29,

//     getDetails: function () {
//         return this.name + " is " + this.age + " years old";
//     }
// };

// console.log(person.getDetails());

// Output:
// Mohan is 29 years old

// Explanation:
// - this.name refers to person.name.
// - this.age refers to person.age.
// - When person.getDetails() is called, this refers to the person object.
// Remember, sir: In a regular object method called as person.getDetails(), this refers to the object before the dot — here, person.

// this example1

console.log("-----------this use -----------");

const person1 = {
  fname: "chandan",
  lname: "kumar",
  email: "ck933970@gmail.com",
  address: "bihar",
  fullname: function () {
    return this.fname + " " + this.lname;
  },
};

const person2 = {
  fname: "mohan",
  lname: "yadav",
  email: "sohan933970@gmail.com",
  address: "up",
  fullname: person1.fullname,
};
console.log(person1.fullname());
console.log(person2.fullname());

// this example 2

const employee1 = {
  name: "Chandan Kumar",
  designation: "React Developer",
  salary: 40000,

  getDetails: function () {
    return `${this.name} works as a ${this.designation} and earns ₹${this.salary} per month.`;
  },
};

const employee2 = {
  name: "Rahul Sharma",
  designation: "Backend Developer",
  salary: 50000,

  getDetails: employee1.getDetails,
};

const employee3 = {
  name: "Amit Singh",
  designation: "Software Tester",
  salary: 35000,

  getDetails: employee1.getDetails,
};

console.log(employee1.getDetails());
console.log(employee2.getDetails());
console.log(employee3.getDetails());

// JavaScript Display Objects
console.log("----------------js display objects example---------");

console.log(person);

// 2. When does [object Object] appear?
// It commonly appears when you try to convert a normal object into a string.
const persons = {
  name: "Mohan",
  age: 40,
};

let text = persons;
console.log(persons);
console.log(text);
console.log(String(persons));
console.log(String(text));
console.log(JSON.stringify(person));
console.log("persons details: " + persons);
console.log("Persons details:", persons);

// Some solutions to display JavaScript objects are:

// Displaying the Object Properties by name
// Displaying the Object Properties in a Loop
// Displaying the Object using Object.values()
// Displaying the Object using JSON.stringify()

// Create an Object
const person4 = {
  name: "John",
  age: 30,
  city: "New York",
};

// Add Properties
let person4Details = person4.name + "," + person4.age + "," + person4.city;

console.log(`the person4 details is ${person4Details}`);

// Using a For .. In Loop

console.log("------print object using for in loop----");

const person5 = {
  name: "rajesh",
  lastname: "yadav",
  email: "rajesh12345@gmail.com",
  address: "karnataka",
};

console.log(person5);

let text5 = "";

for (let x in person5) {
  //   text5 += person5[x] + "\n";
  text5 += x + ": " + person5[x] + "\n";
}
console.log(text5);

console.log("-----------display object uisng object.values()----");

// Using Object.values()
// Object.values() creates an array from the property values:

// Create an Object
const person6 = {
  name: "John",
  age: 30,
  city: "New York",
};

// Create an Array
const myArray = Object.values(person6);

// Stringify the Array
let text6 = myArray.toString();

console.log(text6);

console.log("-------------object.entries()-----------");

// Using Object.entries()
// Object.entries() makes it simple to use objects in loops:

// Example
const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

let text7 = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text7 += fruit + ": " + value + " ";
}

console.log(text7);

console.log("------------using JSON.stringify()----------");

// Using JSON.stringify()
// JavaScript objects can be converted to a string with JSON method JSON.stringify().

// JSON.stringify() is included in JavaScript and supported in all browsers.

// The result will be a string written in JSON notation:

// {"name":"John","age":50,"city":"New York"}

// Example
// Create an Object
const person8 = {
  name: "John",
  age: 30,
  city: "New York",
};

// Stringify Object
let text8 = JSON.stringify(person8);

console.log(text8);

//js objects dispaly method mention below all possiblities way
console.log(
  "-----objects dispaly method mention below all possiblities way---------",
);

// Common object for all examples

const person9 = {
  name: "Chandan",
  age: 26,
  city: "Bengaluru",
  profession: "Software Developer",
};

// 1. console.log() — Display the complete object

console.log("1. console.log()");
console.log(person);

// 2. console.dir() — Display an object's properties

console.log("2. console.dir()");
console.dir(person9);

// 3. console.table() — Display as a table
console.log("3. console.table()");
console.table(person9);

// 4. JSON.stringify() — Convert the object into a string

console.log("4. JSON.stringify()");
console.log(JSON.stringify(person));

// 5. JSON.stringify() with indentation — Pretty-print the object

console.log("5. JSON.stringify() with indentation");
console.log(JSON.stringify(person9, null, 2));

// 6. Dot notation — Display a specific property

console.log("6. Dot notation");
console.log(person9.name);
console.log(person9.age);

// 7. Bracket notation — Display a property using its key
console.log("7. Bracket notation");
console.log(person9["city"]);
console.log(person9["profession"]);

// 8. for...in — Display each key and value

console.log("8. for...in");

for (let key in person9) {
  console.log(key + ": " + person9[key]);
}

// 9. Object.keys() — Display all property names

console.log("9. Object.keys()");
console.log(Object.keys(person9));
console.log(Object.keys(person9)[0]);


// 10. Object.values() — Display all property values

console.log("10. Object.values()");
console.log(Object.values(person9));

// 11. Object.entries() — Display keys and values together

console.log("11. Object.entries()");
console.log(Object.entries(person9));

// 12. for...of with Object.entries()

console.log("12. for...of with Object.entries()");

for (let [key, value] of Object.entries(person)) {
  console.log(key + ": " + value);
}


// 13. Object.getOwnPropertyNames() — Get own property names

console.log("13. Object.getOwnPropertyNames()");
console.log(Object.getOwnPropertyNames(person));

// 14. Object.getOwnPropertyDescriptors() — Display property details

console.log("14. Object.getOwnPropertyDescriptors()");
console.log(Object.getOwnPropertyDescriptors(person));

// 15. Object.fromEntries() — Convert entries back into an object

console.log("15. Object.fromEntries()");

const entries = Object.entries(person);
const newPerson = Object.fromEntries(entries);

console.log(newPerson);


// 16. Template literals — Display selected object properties in a sentence

console.log("16. Template literals");

console.log(
  `${person.name} is ${person.age} years old and lives in ${person.city}.`
);

// 17. String concatenation — Display selected properties

console.log("17. String concatenation");

console.log(
  "Name: " + person.name + ", Age: " + person.age
);

// 18. Object.assign() — Copy object properties and display

console.log("18. Object.assign()");

const copiedPerson = Object.assign({}, person);

console.log(copiedPerson);


// 19. Object.create() — Create an object and display it

console.log("19. Object.create()");

const employee = Object.create(person);

employee.name = "Rahul";
employee.designation = "Backend Developer";

console.log(employee);
console.log(employee.name);
console.log(employee.age);


// Quick revision table
// Method	Purpose
// console.log(person)	Inspect the complete object
// console.dir(person)	Inspect object properties
// console.table(person)	View properties in a table
// JSON.stringify(person)	Convert to JSON text
// person.name	Access a property with dot notation
// person["name"]	Access a property with bracket notation
// for...in	Loop through enumerable property names
// Object.keys(person)	Get property names
// Object.values(person)	Get property values
// Object.entries(person)	Get key-value pairs
// Object.getOwnPropertyNames(person)	Get all own string property names
// Object.getOwnPropertyDescriptors(person)	Inspect property descriptors
// Template literals	Display properties in a sentence


// javascript object constructor :

// Object Constructor Functions
// Sometimes we need to create many objects of the same type.

// To create an object type we use an object constructor function.

// It is considered good practice to name constructor functions with an upper-case first letter.

// Constructor function
function Persons(first, last, email, address, age) {
  this.firstname = first;
  this.lastname = last;
  this.email = email;
  this.address = address;
  this.age = age;
}

// Create an object
const myfather = new Persons(
  "john",
  "kumar",
  "john@123gmail.com",
  "karnataka",
  48
);

const mymother = new Persons(
  "reena",
  "kumaria",
  "reena@123gmail.com",
  "karnataka",
  45
);

// Add nationality to first object
// myfather.nationality = "English";

// Will Not Work
// Person.nationality = "English";
// Add a new Property
Persons.prototype.nationality = "nepali";
// Display the age
console.log(`My father is ${myfather.age} years old.`);
console.log(`My father is ${myfather.nationality} `);
console.log(`My father is ${mymother.age} years old.`);

console.log(myfather);
console.log(mymother);


// Constructor Function Methods
// A constructor function can also have methods:

// Example
// Constructor Function for Person objects
function Person12(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.fullName = function() {
    return this.firstName + " " + this.lastName
  };
}

// Create a Person object
const myFathers = new Person12("John", "Doe", 50, "blue");

console.log(myFathers.fullName());