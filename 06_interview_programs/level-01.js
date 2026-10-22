const num1 = 10;
const num2 = 20;
const sum = num1 + num2;
console.log(sum);

// const num1=parseInt(prompt('please enter first number'));
// const num2=parseInt(prompt('please enter second number'));

// const sum=num1+num2
// console.log(sum);

console.log("-------Example: Square Root of a Number------");

// const number=prompt('enter the number');
const number = 28;

const squareRoot = Math.sqrt(number);
console.log(`The square root of numbers ${number} is ->` + " " + squareRoot);

console.log("----- Program to Swap Two Variables--");

let a = 20;
let b = 10;
console.log("the values of a", a);
console.log("the values of b", b);

let temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

let c = 10;
let d = 20;

a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

console.log("---JavaScript Program to Convert Kilometers to Miles------");

// We know that 1 kilometer is equal to 0.621371 miles.

function convertMiles() {
  const kilovalues = document.getElementById("convert").value;
  console.log(kilovalues);

  let factor = 0.621371;
  let miles = kilovalues * factor;

  document.getElementById("result").innerHTML = miles;
}

console.log(
  "---------Javascript Program to Convert Celsius to Fahrenheit-------",
);

const celsius = 45;

// calculate fahrenheit
const fahrenheit = celsius * 1.8 + 32;
// celsius = (fahrenheit - 32) / 1.8;

// display the result
console.log(
  `${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`,
);

console.log("js program to generate a random Number");

// JavaScript Program to Find the Largest Among Three Numbers

function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

console.log(findLargest(10, 25, 15)); // 25
console.log(findLargest(50, 20, 30)); // 50
console.log(findLargest(5, 10, 100)); // 100

// JavaScript Program to Print the Fibonacci Sequence

// The Fibonacci sequence is the integer sequence where the first two terms are 0 and 1. After that, the next term is defined as the sum of the previous two terms.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, ...