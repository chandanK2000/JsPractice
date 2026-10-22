console.log("-----------randomNUmber example in javascript------");

const randomNumber = Math.random();
console.log(randomNumber);

// Level 1: Random Number Coding Challenges
// Question 1 — Generate a random decimal
// Task: Write JavaScript code to generate a random decimal number between 0 (inclusive) and 1 (exclusive)

let randomNumbers = Math.random();

console.log(randomNumbers);

// Question 2 — Generate a random integer from 0 to 9

let randomnumber1 = Math.floor(Math.random() * 10);

console.log(randomnumber1);

// Question 3 — Generate a random integer from 1 to 10

let randomnumber2 = Math.floor(Math.random() * 10) + 1;

console.log(randomnumber2);

// Question 4 — Generate a random integer from 20 to 50

let max = 50;
let min = 20;

let randomNumbers3 = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumbers3);

// Question 5 — Generate a random odd number
// Task: Write JavaScript code to generate a random odd integer between 1 and 19, including both endpoints.

let max1 = 19;
let min1 = 1;

let randomNumbers4 = Math.floor(Math.random() * 10) * 2 + 1;

console.log(randomNumbers4);

// Generate a random multiple of 5 between 5 and 50, including both endpoints.

let randomnumber5 = Math.floor(Math.random() * 10) * 5 + 5;

console.log(randomnumber5);

// Question 8 — Generate a random multiple of 10

let randomnumber6 = Math.floor(Math.random() * 10) * 10 + 10;
console.log(randomnumber6);

// Question 9 — Generate a random number between 50 and 100

let randomnumber7 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

console.log(randomnumber7);

// Question 10 — Random number: Even or Odd?

// let randomnumber8=Math.floor(Math.random()*(100-1+1))+1;

// if(randomnumber8%2==0){
//     console.log(`${randomnumber8} is even number`)
// }
// else{
//      console.log(`${randomnumber8} is odd number`);
// }

// Next challenge — Random number divisible by 5

let randomnumber8 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

let divisiableNumber = 5;

if (randomnumber8 % divisiableNumber == 0) {
  console.log(`${randomnumber8} is divisiable by ${divisiableNumber}`);
} else {
  console.log(`${randomnumber8} is  not divisiable by ${divisiableNumber}`);
}

// Question 12 — Generate 5 random numbers
// Task: Use a for loop to generate and print 5 random integers between 1 and 100.

for (let i = 1; i <= 5; i++) {
  let randomnumber9 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

  console.log(randomnumber9);
}

//question 13 Generate 10 random integers between 1 and 50 using a for loop. Print only the numbers that are even.

console.log("-----random number between 1-50 only even---");
for (let i = 1; i <= 10; i++) {
  let randomnumber9 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;

  if (randomnumber9 % 2 === 0) {
    console.log(randomnumber9);
  }
}

// Question 15 — Find the largest random number

let largestNumber = 0;

for (let i = 1; i <= 5; i++) {
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  console.log("Random number:", randomNumber);

  if (randomNumber > largestNumber) {
    largestNumber = randomNumber;
  }
}

console.log("Largest random number:", largestNumber);

// Question 16 — Find the smallest random number

console.log("-----smallest random number---");

let smallestRandomNumber = 101;

for (let i = 1; i <= 5; i++) {
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  console.log("Random number:", randomNumber);

  if (randomNumber < smallestRandomNumber) {
    smallestRandomNumber = randomNumber;
  }
}

console.log("smallest random number:", smallestRandomNumber);

// Question 17 — Count how many times the number 50 appears

console.log("-----Count how many times the number 50 appears----");

let count50 = 0;

for (let i = 1; i <= 20; i++) {
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  console.log("Random number:", randomNumber);

  if (randomNumber === 50) {
    count50++;
  }
}

console.log("Number 50 appeared:", count50, "times");

// Question 18 — Generate random numbers until 50 appears

console.log("----Generate random numbers until 50 appears---");

let randomNumber10 = 0;

while (randomNumber10 !== 50) {
  randomNumber10 = Math.floor(Math.random() * 100) + 1;

  console.log("Random number:", randomNumber10);
}

console.log("Found 50! Stopping the loop.");

// Question 20 — Store 10 random numbers in an array
console.log("---------Store 10 random numbers in an array-----");

let randomArray = [];
console.log(randomArray);

for (let i = 1; i <= 10; i++) {
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  console.log("Random number:", randomNumber);
  randomArray.push(randomNumber);
}

console.log(randomArray);

// Question 21 — Find the largest number in a random array
console.log("---- Find the largest number in a random array----");

let randomArrays = [];
console.log(randomArray);

for (let i = 1; i <= 10; i++) {
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  console.log("Random number:", randomNumber);
  randomArrays.push(randomNumber);
}

let largestNumbers = randomArray[0];

for (let i = 0; i < randomArrays.length; i++) {
  if (randomArrays[i] > largestNumbers) {
    largestNumbers = randomArrays[i];
  }
}

console.log(randomArrays);
console.log("Largest number:", largestNumbers);

// Question 22 — Find the smallest number in the random array

console.log("---Find the smallest number in the random array----");

let randomarrayss = [];

for (let i = 1; i <= 10; i++) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    console.log("Random number:", randomNumber);
    randomarrayss.push(randomNumber);
}

let smallestNumbers = randomarrayss[0];

for (let i = 0; i < randomarrayss.length; i++) {
    if (randomarrayss[i] < smallestNumbers) {
        smallestNumbers = randomarrayss[i];
    }
}

console.log("Random array:", randomarrayss);
console.log("Smallest array element:", smallestNumbers);
