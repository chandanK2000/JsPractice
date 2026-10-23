console.log("-------------object Practice example --------------");

// 1. Create a student object with name, age, course, and isLearning properties.

const student = {
  name: "chandan",
  age: 27,
  course: "bca",
  isLearning: true,
};

console.log(student);

console.log("------------------------");

// 2. Create an object representing a car with brand, model, year, and color.

const mycar = {};

mycar.brand = "BMW";
mycar.model = "something";
mycar.year = 2026;
mycar.color = "red";

console.log(mycar);
console.log(mycar.model);
console.log(mycar["year"]);

console.log("--------------------");

// 3. Create an object representing a book with title, author, and price.

const book = new Object();

console.log(book);

book.title = "Hey Ram";
book.author = "chandan sir";
book.price = 500;

console.log(book); //complete object return with propery and values
console.log(book.price); //500
console.log(book["author"]); //chandan sir

console.log("---------------------");

// 4. Create an object representing an employee with id, name, salary, and department.

const employee = {
  id: 101,
  name: "Rajan Chaurasiya",
  salary: 5000,
  department: "Software Management",
};

console.log(employee);
console.log(employee.name);
console.log(employee.department);

console.log("---------------------------");

// Question 5 — Access and update properties

// Create an object named laptop with brand, model, and price.

// Then:
// 1. Print the original price.
// 2. Update the price to 60000.
// 3. Add a new property named processor with the value 'Intel i7'.
// 4. Print the updated object.

const Laptop = {
  brand: "something",
  model: "BMW",
  price: 90000,
};

console.log("Original Laptop Price : " + Laptop.price);

Laptop.price = 60000;
Laptop.processor = "Intel i7";
console.log(Laptop);

console.log("-------------------------");

// Question 6 — Delete an object property

// Create an object named student with these properties:
// - name: "Rahul"
// - age: 22
// - course: "JavaScript"
// - city: "Bengaluru"

const Students = {
  name: "Rahul",
  age: 22,
  course: "JavaScript",
  city: "Bengaluru",
};

console.log("Students Objects", Students);

// delete and object Propery

delete Students.city;

console.log("after delte Students Object", Students);
console.log("city" in Students);

console.log("------------------");

// 6. Access the name property using dot notation.

console.log(Students.name);

console.log("-----------------------");
// 7. Access the age property using bracket notation.

console.log(Students["age"]);

// 8. Print the values of all properties individually.

console.log("----------------");

console.log(Students.name);
console.log(Students.age);
console.log(Students.course);
console.log(Students.city ?? "city not available");
console.log(Students.city || "City not available");
console.log(Students?.city);

console.log("----------------------");

// 9. Update the student's age.

Students.age = 30;

console.log("updated student Objects", Students);
console.log("updated student age", Students.age);

// 10. Change the student's course to "ReactJS".

console.log("--------------------");

Students.course = "ReactJS";

console.log("updated student Objects", Students);
console.log("updated student course", Students.course);

// 11. Add an email property to an existing object.

console.log("--------------------");

Students.email = "Rahul123@gmail.com";

console.log("updated student Objects", Students);
console.log("add student email:-", Students.email);

// 12. Add a city property to a person object.

console.log("-------------------");

const Persons = {
  name: "Richa",
  lname: "rani",
  email: "richa@12345gmail.com",
};

console.log(Persons);

Persons.city = "Himachal Pardesh";

console.log(Persons);

// 13. Delete the email property from an object.

console.log("original Objects", Persons);

delete Persons.email;

console.log("after delete email the Persons Objects:->", Persons);

// 14. Check whether an object contains a name property using the in operator.

console.log("-----------------------");

console.log("email" in Persons); // expected output false

console.log("-----------------------");

// 15. Check whether an object contains an email property using Object.hasOwn().

const result = Object.hasOwn(Persons, "email");

console.log(result);

const result1 = Object.hasOwn(Persons, "name");
console.log(result1); //true

console.log("--------------------");

// 16. Access a property whose key is stored in a variable.

const person = {
  name: "Rahul",
  age: 25,
  city: "Bengaluru",
};

key = "name";

console.log(person[key]);

console.log("-----------------------");

// 17. Create an object with a property key containing a space, such as "first name".
// 18. Access the "first name" property using bracket notation.

const person1 = {
  "first name": "Rahul",
  age: 25,
  city: "Bengaluru",
};

console.log(person1);
console.log(person1["first name"]);

console.log("-----------------------");

// 19. Create an object using shorthand property names.

// Sir, 😊 shorthand property names means when your variable name and object property name are the same, you can write the name only once.

const names = "Chandan";
const age = 27;
const course = "JavaScript";

// Without shorthand
const student2 = {
  name: names,
  age: age,
  course: course,
};

console.log(student2);

console.log("----------------------");

// Using shorthand property names

const Name = "Chandan";
const Age = 27;
const Course = "JavaScript";

const student3 = {
  Name,
  Age,
  Course,
};

console.log(student3);

// 20. Create an object with a computed property name.

// a computed property name means using a variable or an expression inside square brackets [] to determine an object's property name.

console.log("-------------------------");

const keys = "name";

const student4 = {
  [keys]: "Chandan",
};

console.log(student4);
console.log(student4.name);

console.log("hello sir how are you");

// 21. Create an object containing a string, number, Boolean, array, and another object.

console.log("------------------------");

const employesDetails = {
  fname: "chandu",
  lname: "kumari",
  age: 29,
  isLearning: true,
  phone: [6360477363, 938749333],
  address: {
    state: "karnataka",
    district: "bengaluru",
    city: "marathali",
    street: "cross 1 laxmi layout",
  },
  fullname: function () {
    return this.fname + " " + this.lname;
  },
};

console.log(typeof employesDetails.fname); // string
console.log(typeof employesDetails.age); // number
console.log(typeof employesDetails.isLearning); // boolean
console.log(Array.isArray(employesDetails.phone)); // true
console.log(typeof employesDetails.address); // object
console.log(employesDetails.fullname()); // chandu kumari

console.log("----------------------");

// 22. Store a function as an object property and call it.

let employeefullname = employesDetails.fullname();

console.log(employeefullname);

// 23. Create an object with a method that prints a greeting.

console.log("-------------------------");

const emp = {
  fname: "rani",
  lname: "shristavawa",
  greetings: function () {
    return `Hello ${this.fname} ${this.lname} Namaste`;
  },
};

console.log(emp);

let greet = emp.greetings();
console.log(typeof emp.greetings); //function
console.log(greet);
console.log(typeof greet); // strings

// 24. Create two different objects representing two students.

console.log("----------------");

const students1 = {
  name: "rajesh",
  lname: "yadav",
  email: "rajesh1234@gmail.com",
  address: "bihar",
  city: "patna",
  eyecolor: "red",
  age: 20,
};

const students2 = {
  name: "mohan",
  lname: "ray",
  email: "mohan@gmail.com",
  address: "up",
  city: "baliya",
  eyecolor: "blue",
  age: 27,
};

// 25. Compare two objects with identical properties using ===.
console.log("-----------------");

let comparison = students1 === students2;

console.log(comparison); //false;

// If both variables refer to the same object, the result is true:
const students3 = students1;

console.log(students1 === students3); // true

// 26. Create an empty object and add five properties afterward.

console.log("----------------------");

const property = {};

property.powner='sanju singh';
property.pname='sai Teja';
property.location='marathalli';
property.rent=1234567;
property.build=2026;

  console.log(property);

// 27. Check whether a property exists without checking its value.

console.log('-------------------------');

console.log('powner' in property); //true


// 28. Print the number of own enumerable string-keyed properties.

console.log('-----------------------');

console.log(Object.keys(property));

// 29. Retrieve an object's property names using Object.keys().

console.log('-------------------------');

// let ObjectKeyList=Object.keys(property);
// console.log(ObjectKeyList);
// console.log(ObjectKeyList[0]);
// console.log(ObjectKeyList[1]);
// console.log(ObjectKeyList[2]);
// console.log(ObjectKeyList[3]);
// console.log(ObjectKeyList[4]);
// console.log(ObjectKeyList[5]);

for (let key in property) {
  console.log(key);
}

console.log('---------------');

for (let key of property) {
  console.log(key);
}


// 30. Explain through code the difference between a missing property and a property whose value is undefined.

console.log('--------- Missing vs Undefined ---------');

const studentss = {
  name: 'Rahul',
  age: undefined
};

// Existing property
console.log(studentss.name); // Rahul

// Property exists, but its value is undefined
console.log(studentss.age); // undefined

// Missing property
console.log(studentss.city); // undefined

// Check whether the properties exist
console.log('age' in studentss);  // true
console.log('city' in studentss); // false


