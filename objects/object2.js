"use strict";
console.log("-------object practice----");

// An empty object (“empty cabinet”) can be created using one of two syntaxes:

// let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax

console.log("--------object constructor---------");

let user = new Object();
user.name = "chandan";
user.age = 26;
user["likes birds"] = true;

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user["likes birds"]);
// alert(user.name);

console.log("--------object literal---------");

let user1 = {};
user1.name = "mohan";
((user1.age = 27), console.log(user1));
console.log(user1.name);
console.log(user1.age);

console.log("---------------------------------");

// Object references and copying

let employee = {
  name: "john",
  age: "29",
  address: "Himachal Pardesh",
};

let admin = employee;
console.log(admin);

console.log(admin.name);
console.log(employee.name);

let a = {};
let b = a; // copy the reference

console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true

// two independent object ars not equal
let c = {};
let d = {}; // two independent objects

console.log(c == d); // false

// 1. Object cloning in JavaScript

console.log("------------object cloning in javascript----------");

const person = {
  name: "Chandan",
  age: 26,
  city: "Bengaluru",
};

const person1 = {
  name: "Chandan",
  age: 26,
  city: "Bengaluru",
};

console.log(person === person1); // false

console.log("----- Object.assign() -----");

const clonePerson = Object.assign({}, person);

console.log(clonePerson);
console.log(clonePerson === person);

// Method 2: Using the spread operator ...

console.log("---------method two ---spread operator---");

const clonepersons = { ...person };

console.log(clonepersons);
console.log(clonepersons === person);

// Method 3: Using JSON.parse() and JSON.stringify()

console.log("---------Using JSON.parse() and JSON.stringify()r---");

const person2 = {
  name: "Chandan",
  address: {
    city: "Bengaluru",
    state: "Karnataka",
  },
};

const clonedPerson = JSON.parse(JSON.stringify(person2));

console.log(clonedPerson);
console.log(clonedPerson === person2);
console.log(clonedPerson.address === person2.address);

// Method 4: Using structuredClone()
console.log("-----structuredClone()----------");

console.log("----- structuredClone() -----");

const person3 = {
  name: "Chandan",
  address: {
    city: "Bengaluru",
    state: "Karnataka",
  },
};

const clonedPersons = structuredClone(person3);

clonedPerson.address.city = "Mysuru";

console.log(person3.address.city);
console.log(clonedPersons.address.city);

// 1. What is optional chaining (?.)?

console.log("================optional chaining example =====================");
// Optional chaining lets you access a property or call a method safely when the value before ?. might be null or undefined.

// Example 1: Accessing a missing property
// Without optional chaining, JavaScript can throw an error.
const person5 = {
  name: "Chandan"
};

console.log("STEP 1");
console.log(person5.name);

console.log("STEP 2");

try {
  console.log(person5.address.city);
} catch (error) {
  console.log("ERROR CAUGHT:", error.message);
}

console.log("STEP 3");

const person6 = {
  name: "Chandan"
};

console.log(person6.address?.city);
console.log("Program continues");


const users = {
  name: "Chandan",
  address: {
    city: "Bengaluru"
  }
};

console.log(users.address?.city);
console.log(users.contact?.phone);
console.log("Finished");

console.log('------------employees-------------')

const employees = {
  name: "Chandan",
  department: {
    manager: {
      name: "Rahul"
    }
  }
};

console.log(employees.department?.manager?.name);
console.log(employees.department?.team?.length);
console.log(employees.company?.address?.city);
console.log("Program completed");


const userss = {
  name: "Chandan"
};

console.log(userss.address?.city ?? "City not available");