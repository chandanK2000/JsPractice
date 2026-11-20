console.log("----------js loops example---------");

// 1. for loop

// Used when you know how many times you want to execute a block of code.

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("--------while loop---------");

// 2. while loop
// Executes repeatedly as long as the condition is true.

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

console.log("-------do...while loop------------");
// 3. do...while loop
// Executes the code at least once, then checks the condition.

let j = 1;

do {
  console.log(j);
  j++;
} while (j <= 5);

console.log("--------for...in loop----");
// 4. for...in loop
// Used to iterate over the property keys of an object.

const student = {
  name: "Chandan",
  age: 25,
  city: "Bangalore",
};

for (const key in student) {
  console.log(key, student[key]);
}

console.log("---------for...of loop----");

// 5. for...of loop
// Used to iterate over the values of iterable objects, such as arrays and strings.

const students = ["Chandan", "Mohan", "Rohan"];

for (const student of students) {
  console.log(student);
}

console.log("---------forEach() method----------");
// 6. forEach() method
// Executes a callback function once for each array element.

const numbers = [10, 20, 30, 40];

numbers.forEach(function (number) {
  console.log(number);
});
