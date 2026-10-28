console.log("----------array concepts--------------");

// 1. Create an array containing five numbers.

const num = [23, 45, 67, 89, 90];

console.log(num);

// ==============================================
console.log("-------------------------");
// 2. Create an array containing five student names.

const students = ["mohan", "sohan", "raohan", "anjali", "anamika"];

console.log(students);

// ==============================================
console.log("-------------------------");
// 3. Create an array containing numbers, strings, and booleans.

const mixarray = [23, "rahul", true];
console.log(mixarray);

// ==============================================
console.log("-------------------------");

// 4. Print an entire array.

const students1 = new Array("hari", "anawar", "rahim", "ranjan");

console.log(students1);

// ==============================================
console.log("-------------------------");

// 5. Print the first element of an array.
// 6. Print the last element of an array.

console.log(students1[0]); // hari
console.log(students1[students1.length - 1]); // ranjan
console.log(students1.at(-1)); // hari

// ==============================================
console.log("-------------------------");
// 7. Access the third element using its index.

console.log(students1[2]);

// ==============================================
console.log("-------------------------");
// 8. Print every element using a for loop.

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// =====================================
console.log("-------------------------");

// 9. Print every element using a while loop.

let i = 0;

while (i < students.length) {
  console.log(students[i]);
  i++;
}

// =====================================
console.log("-------------------------");

// 10. Print every element using a do...while loop.

let j = 0;

do {
  console.log(students[j]);
  j++;
} while (j < students.length);

// =====================================
console.log("-------------------------");

// 11. Print array elements in reverse order.

for (let i = students.length - 1; i >= 0; i--) {
  console.log(students[i]);
}

// =====================================
console.log("--------------even-----------");

// 12. Print elements at even indexes.

for (let i = 0; i < students.length; i++) {
  if (i % 2 === 0) {
    console.log(students[i]);
  }
}

// =====================================
console.log("----odd index elements-------");
// 13. Print elements at odd indexes.

for (let i = 0; i < students.length; i++) {
  if (i % 2 !== 0) {
    console.log(students[i]);
  }
}

// =====================================
console.log("----odd index elements-------");
// 14. Find the length of an array.

let arraryLength = students.length;
console.log(arraryLength);

// =====================================
console.log("----odd index elements-------");
// 15. Add an element at the end without using push().

console.log(students);
students[students.length] = "raja";

console.log(students);

// =====================================
console.log("-----------");
// 16. Add an element at the beginning without using unshift().

const numbers = [10, 20, 30, 40, 50];

console.log("Original array:", numbers);

for (let i = numbers.length; i > 0; i--) {
  numbers[i] = numbers[i - 1];

  console.log("i =", i);
  console.log("Current array:", [...numbers]);
}

numbers[0] = 5;

console.log("Final array:", numbers);

// =====================================
console.log("---------------------------");

// 17. Remove the last element without using pop().

numbers.length = numbers.length - 1;

console.log(numbers);

// =====================================
console.log("---------------------------");

// 18. Remove the first element without using shift().

for (let i = 0; i < numbers.length - 1; i++) {
  numbers[i] = numbers[i + 1];
}

numbers.length = numbers.length - 1;

console.log(numbers);

// =====================================
console.log("---------------------------");
// 19. Update the second element.

numbers[1] = 80;
console.log(numbers);

// =====================================
console.log("---------------------------");

// 20. Replace the last element.

numbers[numbers.length - 1] = 9;

console.log(numbers);

// =====================================
console.log("---------------------------");

// 21. Create an empty array and add five values.

const array = [];

console.log(array);

array[0] = 10;
array[1] = 20;
array[2] = 30;
array[3] = 40;
array[4] = 50;

console.log(array);

// =====================================
console.log("---------------------------");

// 22. Declare an array using const and modify its elements.

const numberss = [10, 20, 30];

numberss[0] = 100;
numberss[1] = 200;
numberss[2] = 300;

console.log(numberss);

// =====================================
console.log("---------------------------");

// 23. Explain why a const array can still be modified.

// const array can be modified because const prevents reassignment of the variable,
// not modification of the array's elements.

// =====================================
console.log("---------------------------");

// 24. Create an array using new Array().

const employees = new Array("ranjan", "raju", "rahim", "rampukar", "rosa");

console.log(employees);

// =====================================
console.log("---------------------------");

// 26. Create an array using Array.of(5).

const numbers1 = Array.of(5);

console.log(numbers1);
console.log(numbers1.length);
console.log(numbers1[0]);

// Array.of() creates an array using the values you pass to it.
const arr1 = Array.of(5);
const arr2 = Array.of(10, 20, 30);

console.log(arr1); // [5]
console.log(arr2); // [10, 20, 30]
console.log(arr2[0]); // 10

// =====================================
console.log("---------------------------");

// 28. Check whether a variable is an array.

const fruits = ["apple", "mango", "litchi", "pomegranate"];

const name = "chandan kumar";
const age = 27;

console.log(Array.isArray(fruits)); //true;
console.log(Array.isArray(name)); //false;
console.log(Array.isArray(age)); //false;

// =====================================
console.log("---------------------------");
// 29. Use Array.isArray() on an array, object, and string.

const a = [10, 20, 30];
const studentsDetails = {
  name: "chandan",
  age: 27,
  address: "karnataka",
};
const c = "hello";

const d = null;

console.log(Array.isArray(a)); //true
console.log(Array.isArray(studentsDetails)); //false
console.log(Array.isArray(c)); //false
console.log(Array.isArray(d)); //false

// =====================================
console.log("---------------------------");

// 30. Create a copy of an array using the spread operator.

const animals = ["buffalo", "ox", "cow", "dog", "elephant"];
console.log(animals);

const newanaimals = [...animals];
console.log("new animals", newanaimals);

// =====================================
console.log("---------------------------");

// 31. Copy an array using slice().

const fruits1 = ["Apple", "Mango", "Banana"];

const newFruits = fruits1.slice();

console.log("Original array:", fruits1);
console.log("Copied array:", newFruits);

// Sir, when we call slice() without arguments, it returns a shallow copy of the entire array.

// =====================================
console.log("---------------------------");

// 32. Explain the difference between copying an array and assigning its reference.

// =====================================
console.log("---------------------------");

// 33. Swap the first and last elements.

const numbers2 = [10, 20, 30, 40, 50];

let temp = numbers2[0];

numbers2[0] = numbers2[numbers2.length - 1];

numbers2[numbers2.length - 1] = temp;

console.log(numbers2);

// =====================================
console.log("---------------------------");

// 34. Find the middle element of an odd-length array.

const numbers3 = [50, 60, 70, 80, 90];

const midindex = Math.floor(numbers3.length / 2);

console.log("middle index", midindex);
console.log("Middle element:", numbers3[midindex]);

// =====================================
console.log("---------------------------");

// 35. Find the middle two elements of an even-length array.

const numbers6 = [10, 20, 30, 40, 50, 60];

const middleIndex = numbers6.length / 2;

console.log("First middle element:", numbers6[middleIndex - 1]);
console.log("Second middle element:", numbers6[middleIndex]);

// =====================================
console.log("---------------------------");

// 36. Access the last element using at(-1).

console.log(students.at(-1));

// =====================================
console.log("---------------------------");

// 37. Access the second-last element using at(-2).

console.log(students.at(-2));

// =====================================
console.log("---------------------------");

// 38. Iterate over an array using for...of.

for (let x of students) {
  console.log(x);
}

// =====================================
console.log("---------------------------");

// 39. Iterate over an array using for...in.

for (let x in students) {
  console.log(x + " " + students[x]);
}

// =====================================
console.log("---------------------------");

// 40. for each example

const students2=['ramu',"anil","anawar","ruhi","surbhi","anamika","rajani"];

console.log(students2.length);

// for loop
for(let i=0;i<students2.length-1;i++){
    console.log(`${i}:- ${students[i]}`);
}

// for off
for(let x of students){
    console.log(`${x}`);
}

// for each

console.log('-------for each example----------');

console.log(students2);

function getstudents(student,index){
    console.log(index,student);
}



students2.forEach(getstudents);
console.log('--------------------------------');

students2.forEach((students,index)=>{
    console.log(`${index}:- ${students.toUpperCase()}`);
})



