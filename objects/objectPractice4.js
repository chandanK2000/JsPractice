console.log("---------object Practice level 4 Q. 91-120---------");

// 91. Use Object.keys() to retrieve property names.
console.log("---------- Student Details ----------");

let student = {
  id: 101,
  name: "Chandan",
  age: 25,
  course: "JavaScript",
  isLearning: true,

  address: {
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
  },

  skills: ["HTML", "CSS", "JavaScript", "ReactJS"],

  marks: {
    javascript: 85,
    react: 90,
    nodejs: 80,
  },
};

console.log(student);

let propertyNames = Object.keys(student);

console.log(propertyNames);

console.log("--------------------");

for (let key in student) {
  console.log(key);
}

// 2. Display nested object properties and array values

console.log("----------display nested object properites-------");

for (let key in student) {
  console.log(key, ":", student[key]);

  if (typeof student[key] === "object" && student[key] !== null) {
    for (let nestedKey in student[key]) {
      console.log("  ", nestedKey, ":", student[key][nestedKey]);
    }
  }
}

// 92. Use Object.values() to retrieve property values.

console.log("-------object.values()-------------");

let propertyvalues = Object.values(student);

// console.log(propertyvalues);

for (let key in propertyvalues) {
  console.log(key, ":", propertyvalues[key]);
  // console.log(propertyvalues[key]);
}

// 93. Use Object.entries() to retrieve key-value pairs.

console.log("---------key values pairs with object.entries()---------");

// let keyvaluePairs=Object.entries(student);

// console.log(keyvaluePairs);

// for(let key in keyvaluePairs){
//     console.log(keyvaluePairs[key]);
// }

let keyvaluePairs = Object.entries(student);

for (let [key, value] of keyvaluePairs) {
  console.log("Key:", key, "| Value:", value);
}

// 94. Use Object.fromEntries() to reconstruct an object from entries.
console.log("---------object.fromEntries()-------------");

// Definition: Object.fromEntries() is a built-in JavaScript method that converts an iterable of key-value pairs into a new object.

// Object.entries() converts an object into key-value pairs.
// Object.fromEntries() converts key-value pairs back into an object.

// 2. Understand with a simple example

// Step 1: Original object
let person = {
  name: "Chandan",
  age: 25,
};

console.log(person);

// Step 2: Convert object into entries
let entries = Object.entries(person);

console.log(entries);

// Step 3: Reconstruct the object

console.log("-----reconstruct the object---");

let newPerson = Object.fromEntries(entries);

console.log(newPerson);

// 95. Use Object.hasOwn() to check an own property.

console.log("-------object.hasOwn() property ----------");

// Definition: Object.hasOwn() is a built-in JavaScript method that checks whether an object has a specified property directly on itself.

// In simple words, sir, it checks whether a property belongs to the object itself, not whether it is inherited from another object.

// It returns either true or false.

// Important, sir: Object.hasOwn() returns true even if the property's value is undefined, as long as the property exists directly on the object.

// 2. Simple example
let students = {
  id: 101,
  name: "Chandan",
  age: 25,
  course: "JavaScript",
};

console.log(Object.hasOwn(students, "name"));
console.log(Object.hasOwn(students, "marks"));

// 96. Compare Object.hasOwn() with the in operator.
let studentss = {
  name: "Chandan",
  marks: undefined,
  passed: false,
};

console.log(Object.hasOwn(studentss, "marks")); // true
console.log("marks" in studentss); // true

console.log(Object.hasOwn(studentss, "passed")); // true
console.log("passed" in studentss); // true

// 4. Final comparison to remember
// Feature	Object.hasOwn()	in operator
// Checks own properties	Yes	Yes
// Checks inherited properties	No	Yes
// Syntax	Object.hasOwn(obj, "key")	"key" in obj
// Returns	true or false	true or false

// 97. Use Object.assign() to copy properties into another object.

console.log("------object.assign");

// 1. What is Object.assign()?
// Definition:
// Object.assign() is a built-in JavaScript method that copies an object's own enumerable properties into a target object.

let persons = {
  name: "Chandan",
  age: 25,
};

let employee = {
  job: "Developer",
};

Object.assign(employee, person);

console.log(employee);

// Solve Question 97 using our student object

console.log(student);

let newstudent = {};

Object.assign(newstudent, student);

console.log("new student object is:- ", newstudent);

// What if both objects have the same property?

// let person = {
//   name: "Chandan",
//   age: 25
// };

// let employee = {
//   name: "Rahul",
//   job: "Developer"
// };

// Object.assign(employee, person);

// console.log(employee);

// Important: When the same property exists in both objects, the source object's value overwrites the target object's existing value.

// Here, "Rahul" becomes "Chandan" because person is copied into employee.

// 98. Merge three objects using Object.assign().

console.log("------merge three object ------");

let student1 = {
  name: "chandan",
  email: "ck123@gmail.com",
};

let employees = {
  job: "software developer",
  salary: 34567,
};

let hobbies = {
  indoor: "ludo",
  outdoor: "cricket",
};

let studentdetails = {};

Object.assign(studentdetails, student1, employees, hobbies);

// let studentDetails = Object.assign(
//   {},
//   student1,
//   employees,
//   hobbies
// );

console.log("studentdetails", studentdetails);

// 99. Merge objects using the spread operator.

console.log("---------spread Operator----------");

// 1. What is the spread operator?
// Definition: The spread operator (...) expands the properties of an object into another object.

let employeess = {
  id: 101,
  name: "Chandan",
  job: "Software Developer",
};

let company = {
  companyName: "TCS",
  city: "Bengaluru",
};

let employeeDetails = {
  ...employeess,
  ...company,
};

console.log("employee Details:-", employeeDetails);

// 100. Demonstrate which values overwrite duplicate keys during a merge.

console.log("------ Duplicate keys during merge ------");

// javaScript processes the properties from left to right.
//  When it encounters a duplicate key, the value from the object spread later in the sequence overwrites the earlier value.

let employee1 = {
  id: 101,
  name: "Chandan",
  job: "Software Developer",
  city: "Bengaluru",
};

let company1 = {
  companyName: "TCS",
  job: "Team Lead",
  city: "Hyderabad",
};

let employeeDetails1 = {
  ...employee1,
  ...company1,
};

console.log(employeeDetails1);

// 101. Use Object.create() to create an object with a specified prototype.

console.log("------ Object.create() ------");

let employees1 = {
  name: "Chandan",
  job: "Software Developer",
  city: "Bengaluru",
};

// Create a new object using employee as its prototype
let developer = Object.create(employees1);

developer.salary = 45000;

console.log(developer.name);
console.log(developer.job);
console.log(developer.city);
console.log(developer.salary);

console.log('developer object Here : ',developer);
console.log('employee object Here : ',employees1);



// 4. Check own properties versus inherited properties
console.log(Object.hasOwn(developer, "salary")); // true
console.log(Object.hasOwn(developer, "name"));   // false

console.log("salary" in developer); // true
console.log("name" in developer);   // true
