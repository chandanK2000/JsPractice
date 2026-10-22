// please check the basicfunction.js file also most of the questions function related we handled there.

// function 71.	Write a function that returns the longest string passed to it.
// 71. Write a function that returns the longest string passed to it.

function longestString(...args) {
  let largestString = args[0];

  for (let i = 0; i < args.length; i++) {
    if (args[i].length > largestString.length) {
      largestString = args[i];
    }
  }

  return largestString;
}

console.log(
  longestString(
    "chandanojklskjfdlsfjlksdjf",
    "mohan",
    "sohan",
    "anjaliKumari",
    "anamikaprasadyadavlkdjflsjdflkdjflkj",
  ),
);

// 72.	Write a function that returns the shortest string passed to it.

function shortestString(...args) {
  let shortestString = args[0];

  for (let i = 0; i < args.length; i++) {
    if (args[i].length < shortestString.length) {
      shortestString = args[i];
    }
  }

  return shortestString;
}

console.log(
  shortestString(
    "chandanojklskjfdlsfjlksdjf",
    "mohan",
    "sohan",
    "anjaliKumari",
    "anamikaprasadyadavlkdjflsjdflkdjflkj",
  ),
);

// 73.	Write a function that combines all string arguments into one string.

// 73. Write a function that combines all string arguments into one string.

function combineStrings(...args) {
  let result = "";

  for (let i = 0; i < args.length; i++) {
    result = result + args[i] + "-";
  }

  return result;
}

console.log(combineStrings("Hello", "Chandan", "Kumar"));

function combineWithHyphen(...args) {
  return args.join("-");
}

console.log(combineWithHyphen("Ram", "Mohan", "Sohan"));

// 74.	Write a function that returns the unique values from all arguments.

function uniquesArguments() {
  let argumentLists = [];

  for (let i = 0; i < arguments.length; i++) {
    argumentLists.push(arguments[i]);
  }

  argumentLists.sort((a, b) => b - a);

  let uniquesArgumentsList = [...new Set(argumentLists)];

  return uniquesArgumentsList;
}

console.log(uniquesArguments(2, 45, 67, 87, 78, 87, 56, 65, 56, 34, 54, 67));

// 74. Return unique values from all arguments.

function uniquesArguments() {
  return [...new Set(arguments)];
}

console.log(
  uniquesArguments(
    2,
    45,
    67,
    "ram",
    78,
    87,
    "mohan",
    65,
    56,
    34,
    54,
    "ram",
    true,
    false,
    true,
  ),
);

// 75. Return the arguments in reverse order.

function reverseArguments(...args) {
  let reversedArray = [];

  for (let i = args.length - 1; i >= 0; i--) {
    reversedArray.push(args[i]);
  }

  return reversedArray;
}

console.log(reverseArguments(10, 20, 30, 40, 50));

console.log("---------------uniques arreay with loop-----------");

function findUniquesArray(...args) {
  let uniqueArray = [];

  for (let i = 0; i < args.length; i++) {
    if (!uniqueArray.includes(args[i])) {
      uniqueArray.push(args[i]);
    }
  }

  return uniqueArray;
}

let marks = [45, 34, 65, 56, 78, 98, 12, 32, 32, 45];

console.log(findUniquesArray(...marks));

function findUniquesArray(...args) {
  let uniqueArray = [];

  for (let i = 0; i < args.length; i++) {
    let found = false;

    for (let j = 0; j < uniqueArray.length; j++) {
      if (args[i] === uniqueArray[j]) {
        found = true;
        break;
      }
    }

    if (found === false) {
      uniqueArray.push(args[i]);
    }
  }

  return uniqueArray;
}

let marksss = [45, 34, 65, 56, 78, 98, 12, 32, 32];

console.log(findUniquesArray(...marksss));

// Level 6: Arrays and functions (76–90)

console.log("----level 6 array and funcitons------");

// 76.	Create a function that accepts an array and returns its sum.

function studentsMarksArray(...marks) {
  let marksum = 0;
  let count = 0;
  let uniqueArray = [];
  for (let i = 0; i < marks.length; i++) {
    count++;
    marksum += marks[i];
    if (!uniqueArray.includes(marks[i])) {
      uniqueArray.push(marks[i]);
    }
  }
  return {
    marksum: marksum,
    count: count,
    uniqueArray: uniqueArray,
  };
}

let studentmarks = [10, 30, 40, 50, 34, 54, 56, 78, 40];

// console.log(studentsMarksArray(10,30,40,50,34,54,56,78));
console.log(studentsMarksArray(...studentmarks));

// 77.	Create a function that returns the maximum element in an array.
// 78.	Create a function that returns the minimum element in an array.

function findMaximum(numbers) {
  let largestelement = numbers[0];
  let text = "";
  for (let i = 0; i < numbers.length; i++) {
    // text = text + numbers[i] + "\n";
    if (largestelement < numbers[i]) {
      largestelement = numbers[i];
    }
  }
  return largestelement;
}

console.log(findMaximum([10, 25, 5, 80, 40]));
// Expected output: 80

// 79.	Create a function that counts even numbers in an array.
// 80.	Create a function that counts odd numbers in an array.

function evenArraycount(numbers) {
  let evencount = 0;
  let oddcount = 0;
  let evenList = [];
  let oddList = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evencount++;
      evenList.push(numbers[i]);
    } else {
      oddcount++;
      oddList.push(numbers[i]);
    }
  }
  return {
    evencount: evencount,
    oddcount: oddcount,
    totalarray: numbers.length,
    evenList: evenList,
    oddList: oddList,
  };
}

console.log(evenArraycount([12, 34, 5, 6, 7, 890, 65, 63, 69]));

// 81.	Create a function that returns a new array containing only positive numbers.

function possitiveArray(numbers) {
  let positivearray = [];
  let negativearray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      positivearray.push(numbers[i]);
    } else {
      negativearray.push(numbers[i]);
    }
  }
  return {
    positivearray: positivearray,
    negativearray: negativearray,
  };
}

console.log(possitiveArray([67, 89, 90, 56, 65, 34, 54, -89, -23, 54]));

// Question 81: Create a function that returns the count, list, and sum of all even numbers and odd numbers

function arrayAnalyize(numbers) {
  let evencount = 0;
  let oddcount = 0;
  let originalarray = numbers;
  let evensum = 0;
  let oddsum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evensum += numbers[i];
      evencount++;
    } else {
      oddsum += numbers[i];
      oddcount++;
    }
  }
  return {
    originalarray: originalarray,
    evencount: evencount,
    oddcount: oddcount,
    totalarraylength: numbers.length,
    evensum: evensum,
    oddsum: oddsum,
  };
}
console.log(arrayAnalyize([90, 67, 87, 45, 12, 31]));

// 83.	Create a function that counts the frequency of each number in an array.

function countFrequency(numberarray) {
  let checkedNumbers = [];

  for (let i = 0; i < numberarray.length; i++) {
    // Check whether we have already counted this number
    if (checkedNumbers.includes(numberarray[i])) {
      continue;
    }

    let count = 0;

    for (let j = 0; j < numberarray.length; j++) {
      if (numberarray[i] === numberarray[j]) {
        count++;
      }
    }

    console.log(`${numberarray[i]} - ${count} times`);

    // Remember the number we have counted
    checkedNumbers.push(numberarray[i]);
  }
}

countFrequency([10, 23, 34, 43, 10, 34, 12, 20, 78, 87, 78]);

function countStringFrequency(names) {
  let checkedNames = [];

  for (let i = 0; i < names.length; i++) {
    if (checkedNames.includes(names[i])) {
      continue;
    }

    let count = 0;

    for (let j = 0; j < names.length; j++) {
      if (names[i] === names[j]) {
        count++;
      }
    }

    console.log(`${names[i]} - ${count} times`);

    checkedNames.push(names[i]);
  }
}

countStringFrequency(["Rahul", "Aman", "Rahul", "Aman", "Rahul", "Rohit"]);

// 84.	Create a function that removes duplicate values from an array.

function checkduplicates(...numbers) {
  let uniquesValues = [...new Set(numbers)];
  return uniquesValues;
}

let number = [10, 10, 20, 30, 40, 60];

console.log(checkduplicates(...number));

// using  includes() and for loop

function removeDuplicates(numbers) {
  let uniqueValues = [];

  for (let i = 0; i < numbers.length; i++) {
    if (!uniqueValues.includes(numbers[i])) {
      uniqueValues.push(numbers[i]);
    }
  }

  return uniqueValues;
}

console.log(removeDuplicates([10, 10, 20, 30, 40, 60]));

// using filter and index of method

function removeDuplicates(numbers) {
  return numbers.filter((value, index) => {
    return numbers.indexOf(value) === index;
  });
}

console.log(removeDuplicates([10, 10, 20, 30, 40, 60]));

// 85.	Create a function that returns the second-largest unique number in an array.

function secondLargest(...numbers) {
  let uniquesValues = [...new Set(numbers)];

  uniquesValues.sort((a, b) => b - a);

  let secondlargest = uniquesValues[1];

  return {
    secondlargest: secondlargest,
    uniquesValues: uniquesValues,
  };
}

let numbers = [10, 10, 20, 30, 40, 60];

console.log(secondLargest(...numbers));

// 86.	Create a function that returns the longest name in an array.

function longestName(...employees) {
  let longestName = employees[0];

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].length > longestName.length) {
      longestName = employees[i];
    }
  }

  return longestName;
}

let employees = [
  "chandu",
  "anjlai kumari",
  "anamika",
  "rahul sahani",
  "baliram bhai",
  "ray bahadur",
  "Ranveer kumar yadav",
];

console.log(longestName(...employees));

// 87.	Create a function that returns the shortest name in an array.

function shortestName(...employees) {
  let shortestName = employees[0];

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].length < shortestName.length) {
      shortestName = employees[i];
    }
  }

  return `${shortestName} - ${shortestName.length}`;
}

let employees1 = [
  "chandu",
  "anjlai kumari",
  "anamika",
  "rahul sahani",
  "baliram bhai",
  "ray bahadur",
  "Ranveer kumar yadav",
];

console.log(shortestName(...employees1));

// 88.	Create a function that searches for a particular value in an array.

function searchValue(numbersarray, searchvalues) {
  for (let i = 0; i < numbersarray.length; i++) {
    if (numbersarray[i] === searchvalues) {
      return `values ${searchvalues} found at index ${i}`;
    }
  }
  return `Value ${searchvalues} not found`;
}

let numbersarray = [10, 20, 30, 40, 50];
// let searchvalues=30;

console.log(searchValue(numbersarray, 10));
console.log(searchValue(numbersarray, 30));
console.log(searchValue(numbersarray, 50));
console.log(searchValue(numbersarray, 36));

// 89.	Create a function that reverses an array without using reverse().

function reverseArray(numberarrays) {
  let reverseArray = [];

  for (let i = numberarrays.length - 1; i >= 0; i--) {
    reverseArray.push(numberarrays[i]);
  }
  return reverseArray;
}

let numberarrays = [10, 23, 56, 78, 98, 54];

console.log(reverseArray(numberarrays));

// using for loop and unshift();

function reverseArray(numbers) {
  let reversedArray = [];

  for (let i = 0; i < numbers.length; i++) {
    reversedArray.unshift(numbers[i]);
  }

  return reversedArray;
}

console.log(reverseArray([10, 20, 30, 40, 50]));

// 90.	Create a function that merges two arrays and removes duplicates.

function mergeArrays(array1, array2) {
  return [...new Set([...array1, ...array2])];
}

let numbers1 = [10, 20, 30, 40];
let numbers2 = [30, 40, 50, 60];

console.log(mergeArrays(numbers1, numbers2));

// Method 2: Using a for loop and includes()
// This is a very good method for your practice because it uses loops and conditions.

function mergeArrays(array1, array2) {
  let uniqueValues = [];

  for (let i = 0; i < array1.length; i++) {
    if (!uniqueValues.includes(array1[i])) {
      uniqueValues.push(array1[i]);
    }
  }

  for (let i = 0; i < array2.length; i++) {
    if (!uniqueValues.includes(array2[i])) {
      uniqueValues.push(array2[i]);
    }
  }

  return uniqueValues;
}

console.log(mergeArrays([10, 20, 30, 40], [30, 40, 50, 60]));

// Method 3: Using concat() and Set
function mergeArrays(array1, array2) {
  let mergedArray = array1.concat(array2);
  return [...new Set(mergedArray)];
}

console.log(mergeArrays([1, 2, 3, 4], [3, 4, 5, 6]));

// Level 7: Advanced function challenges (91–100)
// 91.	Create a function that accepts another function as an argument and executes it.

function greet() {
  console.log("hello sir how are you !");
}

function executefunction(callback) {
  callback();
}

executefunction(greet);

// How does it work, sir?
// 1. greet() is a function that prints a message.
// 2. executeFunction(callback) accepts another function as its parameter.
// 3. executeFunction(greet) passes the greet function to executeFunction.
// 4. Inside, callback() executes the function that was passed.

// Method 2: Pass an anonymous function
// You can also pass a function directly without giving it a name.

function executeFunction(callback) {
  callback();
}

executeFunction(function () {
  console.log("hello chandan sir what about you");
});

// Method 3: Using an arrow function
function executeFunction(callback) {
  callback();
}

executeFunction(() => {
  console.log("Executed using an arrow function!");
});

// Method 4: Pass arguments to the callback
function add(a, b) {
  console.log("Sum:", a + b);
}

function executeFunction(callback) {
  callback(10, 20);
}

executeFunction(add);

// Method 5: Return the callback's result
function multiply(a, b) {
  return a * b;
}

function executeFunction(callback) {
  return callback(5, 4);
}

let result = executeFunction(multiply);

console.log(result);

// 92.	Create a function that returns another function.

function outerFunction() {
  function innerFunction() {
    console.log("Hello sir!");
  }

  return innerFunction;
}

let results = outerFunction();

results();

// 93.	Create an arrow function that calculates the square of a number.

const squareNumbers = (a) => {
  let squares = a * a;
  return `the squares of  number ${a} is ${squares}`;
};

console.log(squareNumbers(20));

// 96.	Create a function that generates a random integer between a minimum and maximum value.

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInteger(1, 10));
console.log(randomInteger(50, 100));
console.log(randomInteger(200, 500));

// 97.	Create a function that generates a random six-digit number.
function generateSixDigitNumber() {
  return Math.floor(100000 + Math.random() * 900000);
}

console.log(generateSixDigitNumber());

function generateSixDigitNumber() {
  let min = 100000;
  let max = 999999;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateSixDigitNumber());

function changeBackgroundColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  let color = `rgb(${red}, ${green}, ${blue})`;

  document.body.style.backgroundColor = color;

  console.log("background color", color);
}

function changedivbgcolors() {
  const backgroundColors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "skyblue",
    "lightgreen",
    "black",
  ];

  let randomIndex = Math.floor(Math.random() * backgroundColors.length);

  let color = backgroundColors[randomIndex];

  document.getElementById("demobg").style.backgroundColor = color;
}

const backgroundColors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "skyblue",
  "lightgreen",
  "black",
];

let colorIndex = 0;

function colorchange() {
  document.getElementById("changecolor").style.color =
    backgroundColors[colorIndex];

  colorIndex++;

  if (colorIndex >= backgroundColors.length) {
    colorIndex = 0;
  }
}

// 99.	Create a function that accepts a list of student marks and returns the grade for each student.
// Question 91: Return the grade for each student

function studentGrades(marks) {
  let results = [];

  for (let i = 0; i < marks.length; i++) {
    let grade;

    if (marks[i] >= 90) {
      grade = "A";
    } else if (marks[i] >= 80) {
      grade = "B";
    } else if (marks[i] >= 70) {
      grade = "C";
    } else if (marks[i] >= 60) {
      grade = "D";
    } else if (marks[i] >= 40) {
      grade = "E";
    } else {
      grade = "F";
    }

    results.push({
      student: i + 1,
      marks: marks[i],
      grade: grade
    });
  }

  return results;
}

let studentMarks = [95, 82, 76, 65, 45, 32];

console.log(studentGrades(studentMarks));

// 100.	Create a calculator function that accepts two numbers and an operator (+, -, *, /) and returns the correct result.

function calculator(num1, operator, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      return "Cannot divide by zero";
    }

    return num1 / num2;
  } else {
    return "Invalid operator";
  }
}

console.log(calculator(10, "+", 5)); // 15
console.log(calculator(10, "-", 5)); // 5
console.log(calculator(10, "*", 5)); // 50
console.log(calculator(10, "/", 5)); // 2
console.log(calculator(10, "/", 0)); // Cannot divide by zero
console.log(calculator(10, "%", 5)); // Invalid operator
