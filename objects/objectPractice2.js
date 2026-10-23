console.log("----------object practice2 Level 2 Q.31-60-----------");

// 31. Print all keys of an object using Object.keys().

const students = {
  name: "chandu",
  lname: "kumar",
  phone: 6360487464,
  age: 20,
  email: "chandu@gmail.com",
  subjets: ["Reactjs", "Python", "Java", "Anjular", "Mysql", "Nodejs"],
  address: {
    state: "karnataka",
    city: "bangalore",
    street: "marathalli Laxmi Layout cross 9",
  },
};

console.log("students details:-", students);

const allKeys = Object.keys(students);
const propertyLength = Object.keys(students).length;

for (let keys of allKeys) {
  console.log(keys);
}

console.log(
  `total property Length of students Objects is :- ${propertyLength}`,
);

// 32. Print all property values using Object.values().

console.log("-----------------------");

const allValues = Object.values(students);

console.log(allValues);

// 33. Print all key-value pairs using Object.entries().

console.log("------------------------");

const keyvaluesPairs = Object.entries(students);

console.log(keyvaluesPairs);

for (let [key, value] of Object.entries(students)) {
  console.log(key, ":", value);
}

// Remember the difference, sir
// - Object.keys(students) → returns property names.
// - Object.values(students) → returns property values.
// - Object.entries(students) → returns key-value pairs.

// 34. Print every property using a for...in loop.

console.log("--------------------");

for (let key in students) {
  console.log(key, ":", students[key]);
}

// 35. Print only the values of an object using a loop.

console.log("---------------------");

for (let values in students) {
  console.log(students[values]);
}

// 36. Count the number of properties in an object.

console.log("------------------");

const propertiescount = Object.keys(students).length;

console.log(
  `The total Property cout of the students Objects is ${propertiescount}`,
);

// 37. Calculate the sum of all numeric property values.

console.log("-------- Employee Details --------");

const employees = {
  id: 101,
  firstName: "Chandan",
  lastName: "Kumar",
  age: 27,
  salary: 45000,
  bonus: 5000,
  experience: 2.5,
  isWorking: true,
  isMarried: 0, //false
  department: "Development",
  city: "Bengaluru",
  skills: ["JavaScript", "ReactJS", "NodeJS"],
  children: ["mohan", "soahn", "rohini"],
  address: {
    state: "Karnataka",
    pincode: 560037,
  },
};

console.log(employees);

console.log("---------------------");

let sum = 0;

for (let key in employees) {
  if (typeof employees[key] === "number") {
    sum += employees[key];
  }
}

console.log("Sum of numeric property values:", sum);

// 38. Find the largest numeric property value.

console.log("----------------");

let largest = -Infinity;

for (let key in employees) {
  if (typeof employees[key] === "number" && employees[key] > largest) {
    largest = employees[key];
  }
}

console.log("Largest numeric property value:", largest);

// 39. Find the smallest numeric property value.
console.log("----------------------");

let smallest = Infinity;

for (let key in employees) {
  if (typeof employees[key] === "number" && employees[key] < smallest) {
    smallest = employees[key];
  }
}

console.log("smallest numeric property value:", smallest);

// 40. Count how many property values are strings.

console.log("----------------------");

let count = 0;
for (let key in employees) {
  if (typeof employees[key] === "string") {
    count++;
  }
}

console.log(`the string count of property of employees Objects is : ${count}`);

// 41. Count how many property values are numbers.

console.log("----------------------");

let Numberscount = 0;
for (let key in employees) {
  if (typeof employees[key] === "number") {
    Numberscount++;
  }
}

console.log(
  `the number count of property of employees Objects is : ${Numberscount}`,
);

// 42. Count Boolean-valued properties.

console.log("----------------------");

let booleancount = 0;
for (let key in employees) {
  if (typeof employees[key] === "boolean") {
    booleancount++;
  }
}

console.log(
  `the booleancount count of property of employees Objects is : ${booleancount}`,
);

console.log("----------------------");

// object count propery

let objectCount = 0;

for (let key in employees) {
  if (
    typeof employees[key] === "object" &&
    employees[key] !== null &&
    !Array.isArray(employees[key])
  ) {
    objectCount++;
  }
}

console.log("Object property count:", objectCount);

// array count propery

let arrayCount = 0;

for (let key in employees) {
  if (Array.isArray(employees[key])) {
    arrayCount++;
  }
}

console.log("array property count:", arrayCount);

// 43. Create a new object containing only numeric properties.

console.log("----------------------");
const numericProperties = {};

for (let key in employees) {
  if (typeof employees[key] === "number") {
    numericProperties[key] = employees[key];
  }
}

console.log(
  `the new object which contains only number properties is`,
  numericProperties,
);

// only numberic Object below listed sir
console.log("----------------------");

const numericDetails = {
  id: 101,
  age: 27,
  salary: 45000,
  bonus: 5000,
  experience: 2.5,
};

console.log(`The Numberic Propery Objecs is`, numericDetails);

// 44. Create a new object containing only string properties.

console.log("----------------------");

const stringDetails = {
  firstName: "Chandan",
  lastName: "Kumar",
  department: "Development",
  city: "Bengaluru",
};

console.log(stringDetails);

// 45. Convert all string values in an object to uppercase.

console.log("----------------------");

for (let key in employees) {
  if (typeof employees[key] === "string") {
    employees[key] = employees[key].toUpperCase();
  }
}

console.log(employees);

// 46. Convert all string values in an object to lowercase.

console.log("----------------------");

for (let key in employees) {
  if (typeof employees[key] === "string") {
    employees[key] = employees[key].toLowerCase();
  }
}

console.log(employees);

// 47. Multiply all numeric property values by two.

console.log("----------------------");

for (let key in employees) {
  if (typeof employees[key] === "number") {
    employees[key] = employees[key] * 2;
  }
}

console.log(employees);

// 48. Create a new object with every numeric value increased by 10.
// numericDetails

console.log("------------------");

const updatedEmployees = {};

for (let key in employees) {
  if (typeof employees[key] === "number") {
    updatedEmployees[key] = employees[key] + 10;
  } else {
    updatedEmployees[key] = employees[key];
  }
}

console.log(updatedEmployees);
console.log(employees);

employees.bonus = 1200;
employees.id = 1200;

// 49. Find the property whose value matches a supplied value.
console.log("--------------------");

const targetValue = 1200;
for (let key in employees) {
  if (typeof employees[key] === "number" && employees[key] <= targetValue) {
    console.log(key);
  }
}

// console.log(employees);

// 50. Find all keys whose values are greater than 50.

console.log("--------------------");

for (let key in employees) {
  if (typeof employees[key] === "number" && employees[key] > 50) {
    console.log(key);
  }
}

// console.log(employees);

// 51. Check whether any property has a falsy value.

console.log("--------------------");

console.log("---------falsy values-----------");

for (let key in employees) {
  if (!employees[key]) {
    console.log(key);
  }
}

// In JavaScript, falsy values include false, 0, "", null, undefined, NaN, and -0.

// 52. Check whether all property values are numbers.

console.log("--------------------");

let allNumbers = true;

for (let key in employees) {
  if (typeof employees[key] !== "number") {
    allNumbers = false;
    break;
  }
}

console.log("Are all property values numbers?", allNumbers);

// 53. Find properties with empty-string values.

console.log("---------------------------");

for (let key in employees) {
  if (employees[key] == "") {
    console.log(employees[key]);
  }
}

// 54. Remove properties whose values are null or undefined.

console.log("--------------------");

for (let key in employees) {
  //   if (employees[key] == null || employees[key] == undefined) {
  if (employees[key] == null) {
    delete employees[key];
  }
}

console.log(employees);

// 55. Create a copy containing only truthy-valued properties.
console.log("----------------------");

// Sir 😊, truthy values means values that JavaScript treats as true when checking a condition.

const truthyEmployees = {};

for (let key in employees) {
  if (employees[key]) {
    truthyEmployees[key] = employees[key];
  }
}

console.log(truthyEmployees);

console.log("hello brother are you working  ?");

// 56. Convert an object's keys into an array.
console.log("-----------------");

const employeeKeys = Object.keys(employees);

console.log(employeeKeys);

// 57. Convert an object's values into an array.
console.log("-----------------");

const employeesvalues = Object.values(employees);

console.log(employeesvalues);

// 58. Swap the keys and values of an object when all values are unique strings.

const employeess = {
  firstName: "Chandan",
  lastName: "Kumar",
  city: "Bengaluru",
};

const swappedEmployees = {};

for (let key in employeess) {
  swappedEmployees[employeess[key]] = key;
}

console.log("swapped employess", swappedEmployees);

// 59. Create a frequency object counting the occurrences of each string in an array.

console.log('-----------------------------');


const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const frequency = {};

for (let fruit of fruits) {
  if (frequency[fruit]) {
    frequency[fruit]++;
  } else {
    frequency[fruit] = 1;
  }
}

console.log(frequency);
// 60. Convert an array of key-value pairs into an object using Object.fromEntries().

console.log('---------------------------------------');


const entries = [
  ["name", "Chandan"],
  ["age", 27],
  ["city", "Bengaluru"],
  ["salary", 45000]
];

const entriesss = Object.fromEntries(entries);

console.log(entriesss);
