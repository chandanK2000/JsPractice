// 1.	Create a function that prints "Hello, World!".

function Hello() {
  return "Hello World";
}

console.log(Hello());

// 2.	Create a function that prints your name.

function PrintName() {
  return "chandan Kumar";
}
console.log(PrintName());

// 3.	Create a function that accepts one number and prints it.

function PrintNumber(numbers) {
  return numbers;
}

console.log(PrintNumber(10));

// 4.	Create a function that accepts two numbers and prints their sum.

function subOfTwoNumbers(a, b) {
  return a + b;
}
console.log(subOfTwoNumbers(3, 6.8));

// 5.	Create a function that returns the difference between two numbers.

const substract = function (a, b) {
  return a - b;
};

console.log(substract(20, 6));

// 6.	Create a function that multiplies two numbers.

function multiply(a, b) {
  return a * b;
}
console.log(`The Multiplicaton of two Numbers is:- ${multiply(12, 89)}`);

// 7.	Create a function that divides two numbers.

function divides(a, b) {
  return a / b;
}
console.log(divides(10, 20));

// 8.	Create a function that returns the square of a number.

function squares(a) {
  return a * a;
}

console.log(squares(10));

// 9.	Create a function that returns the cube of a number.

const CubesOfNumbers = (a) => {
  return a * a * a;
};

console.log(CubesOfNumbers(3));

// 10.	Create a function that returns the remainder of two numbers.

function reminderers(a, b) {
  return a % b;
}
console.log(reminderers(20, 3));

// 11.	Create a function that converts minutes into seconds.

function convertMInutes(minues) {
  let seconds = minues * 60;
  return seconds;
}

console.log(convertMInutes(2));

// 12.	Create a function that converts hours into minutes.

function ConvertsHours(Hours) {
  let minues = Hours * 60;
  return minues;
}
console.log(`${ConvertsHours(3)} minutes`);

// 13.	Create a function that converts Celsius to Fahrenheit.

function fahrenheitToCelsius(f) {
  let Celsius = (5 * (f - 32)) / 9;

  return Celsius;
}
console.log(fahrenheitToCelsius(38));

// 14.	Create a function that calculates the area of a rectangle.

function RectangeArea(l, b) {
  let area = l * b;
  return area;
}

console.log(RectangeArea(10, 34));

// 15.	Create a function that calculates the area of a circle.

function CircleArea(r) {
  let pi = 3.14;

  let areaofcircle = pi * r * r;
  return areaofcircle;
}

console.log(CircleArea(7));

// Level 2: Parameters and return (16–30)
// 16.	Create a function that accepts three numbers and returns their sum.

function AllSum(a, b, c) {
  let sum = a + b + c;
  return sum;
}

console.log(AllSum(1, 3, 6, 9));

function AllSum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(AllSum(1, 3, 6, 8));

console.log("-----args example in javascript-----");

function AllSum(...args) {
  console.log(`Arguments Length is :- ${args.length}`);

  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

let abcd = AllSum(2, 4, 5, 6, 7, 8, 9);
console.log(`the sum of all arguments is: ${abcd}`);

// 17.	Create a function that accepts three numbers and returns their average.

let average = function (...args) {
  let sum = 0;
  let count = 0;

  for (let arg of args) {
    sum = sum + arg;
    count++;
  }
  let average = sum / count;
  // return sum/count;
  return average;
};

console.log(average(10, 20, 25, 90, 60));

const AverageofThree = (a, b, c) => {
  let average = (a + b + c) / 3;

  return average;
};

console.log(AverageofThree(10, 20, 30));

// 18.	Create a function that accepts a person's age and returns their birth year using the current year as an input.

function calculateBirthYear(age) {
  let currentyear = new Date().getFullYear();

  let birthYear = currentyear - age;

  return birthYear;
}

console.log(calculateBirthYear(26));

// 19.	Create a function that accepts a number and returns "Even" or "Odd".

function evenodd(num) {
  if (num % 2 == 0) {
    return `${num} is even`;
  } else {
    return `${num} is odd`;
  }
}

console.log(evenodd(21));

// reate a function that checks whether a number is positive, negative, or zero.

const checkNumbers = (num) => {
  let message;

  if (typeof num !== "number" || !Number.isFinite(num)) {
    return "Invalid input! Please enter a valid number.";
  }

  if (num > 0) {
    message = "is positive";
  } else if (num < 0) {
    message = "is negative";
  } else {
    message = "is zero";
  }

  return `${num}  ${message}`;
};
console.log(checkNumbers("*"));

// 21.	Create a function that accepts two numbers and returns the larger number.

function largestNumber(a, b) {
  let message;
  if (a > b) {
    message = `${a} is larger than ${b}`;
  } else if (b > a) {
    message = `${b} is larger than ${a}`;
  } else {
    return "Both numbers are equal";
  }
  return message;
}
console.log(largestNumber(10, 23.67));

function LargestNumber() {
  let largest = -Infinity;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > largest) {
      largest = arguments[i];
    }
  }
  return largest;
}

console.log(
  `the largest number is :- ${LargestNumber(10, 20, 50, 34, 67, 45)}`,
);

// 22.	Create a function that accepts two numbers and returns the smaller number.
function smallestNumber(a, b) {
  let message;
  if (a < b) {
    message = `${a} is smaller than ${b}`;
  } else if (b < a) {
    message = `${b} is smaller than ${a}`;
  } else {
    return "Both numbers are equal";
  }
  return message;
}
console.log(smallestNumber(10, 10.8));

function SmallestNumbers() {
  let smallest = Infinity;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < smallest) {
      smallest = arguments[i];
    }
  }
  return smallest;
}

console.log(
  `the smallest number is :- ${SmallestNumbers(10, 20, 50, 34, 67, 45)}`,
);

console.log(Math.max(10, 20, 50, 34, 67, 45)); // 67
console.log(Math.min(10, 20, 50, 34, 67, 45)); // 10

// 23.	Create a function that returns the absolute value of a number.

console.log("---absoulute numbers---");

function absoluteValue(num) {
  return Math.abs(num);
}

console.log(absoluteValue(-10)); // 10
console.log(absoluteValue(20)); // 20
console.log(absoluteValue(0)); // 0

function AbsolutesNumber(num) {
  if (num < 0) {
    return -num;
  } else {
    return num;
  }
}

console.log(AbsolutesNumber(10));
console.log(AbsolutesNumber(-40));
console.log(AbsolutesNumber(0));

// 24.	Create a function that returns the power of a number using Math.pow().

function mathPow(num, exponent) {
  return Math.pow(num, exponent);
}

console.log(mathPow(12, 3));

console.log(Math.pow(10, 2));

// 25.	Create a function that returns the square root of a number.

function sqareroot(num) {
  return `The square root of ${num} is :- ${Math.sqrt(num)}`;
}

console.log(sqareroot(28));

// Question 26: Create a function that returns the cube of a number using Math.pow().

function cubeofNumber(num, exponent) {
  return `The cube of ${num} is : ${Math.pow(num, exponent)}`;
}

console.log(cubeofNumber(2, 3));

// 26.	Create a function that checks whether a person is eligible to vote.

function voteEligiable(age) {
  if (age >= 18) {
    return "you are eligiable";
  } else {
    return "your age is not valid for vote sir";
  }
}

console.log(voteEligiable(12));

// 27.	Create a function that converts kilometers to meters.

function convertKilometertoMeter(kilometer) {
  return `${kilometer} kilometer is equal to ${kilometer * 1000} meters`;
}
console.log(convertKilometertoMeter(3.02));

// 28.	Create a function that calculates the final price after a discount.

function finalPrice(price, discounts) {
  let discoutnAmount = (price * discounts) / 100;
  let finalPrice = price - discoutnAmount;
  return finalPrice;
}

console.log(finalPrice(2000, 12));

// 29.	Create a function that calculates simple interest.

function simpleInterest(principal, time, rate) {
  let interest = (principal * time * rate) / 100;

  let totalAmount = interest + principal;

  return {
    interest: interest,
    totalAmount: totalAmount,
    time: time,
    rate: rate,
  };

  //   return [interest, totalAmount];
}

// let result = simpleInterest(2000, 2, 3);
let result = simpleInterest(2600, 4, 5);
console.log(result);

console.log(`Interest is ${result.interest}`);
console.log(`Total amount is ${result.interest}`);

console.log("--------rectange------");

function rectangle(length, width) {
  return {
    area: `${length * width} square meters`,
    perimeter: `${2 * (length + width)} meters`,
    length: `${length} meters`,
    width: `${width} meters`,
    diagonal: `${Math.sqrt(length ** 2 + width ** 2)} meters`,
  };
}

console.log(rectangle(10, 5));

// Level 3: Functions with loops (31–45)
// 31.	Create a function that prints numbers from 1 to 10.

// function printNumbers(num) {
//   for (let i = 1; i <= num; i++) {
//     console.log(i);
//   }
// }

// printNumbers(10);

function printNumbers(num) {
  let text = "";

  for (let i = 1; i <= num; i++) {
    text = text + i + "\n\n";
  }

  return text;
}

console.log(printNumbers(10));

// 32.	Create a function that prints numbers from 10 down to 1.
console.log("----------print 10 to 1-----");

let downPrint = function (num) {
  for (let i = num; i >= 1; i--) {
    console.log(i);
  }
};

downPrint(5);

// 33.	Create a function that prints all even numbers up to a given number.

function printEvenUpToGiven(num) {
  let evenNumbers = [];
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
      count++;
    }
  }

  return {
    evenNumbers: evenNumbers,
    count: count,
  };
}

console.log(printEvenUpToGiven(10));

// 34.	Create a function that prints all odd numbers up to a given number.

function printOddUpToGiven(num) {
  let oddnumbers = [];
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      oddnumbers.push(i);
      count++;
    }
  }

  return {
    oddnumbers: oddnumbers,
    count: count,
  };
}

console.log(printOddUpToGiven(23));

// 35.	Create a function that returns the sum of numbers from 1 to n.

function sumofN(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return `the sum of number 1 to ${num}:- ${sum}`;
}

console.log(sumofN(12));

// 36.	Create a function that returns the sum of all even numbers from 1 to n.

function sumofallEventNUmbers(num) {
  let sum = 0;
  let sumArray = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      // text=text+i+'\n';
      sumArray.push(i);
      sum = sum + i;
    }
  }
  return {
    sumArray: sumArray,
    sum: sum,
  };
}

console.log(sumofallEventNUmbers(15));

// 37.	Create a function that returns the sum of all odd numbers from 1 to n.

function sumofalloddNUmbers(num) {
  let oddsum = 0;
  let oddArray = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 != 0) {
      oddArray.push(i);
      oddsum = oddsum + i;
    }
  }
  return {
    oddArray: oddArray,
    oddsum: oddsum,
  };
}

console.log(sumofalloddNUmbers(15));

// 3. Next practice question — Question 38
// Create a function that returns the largest number in an array.

// function LargestElement() {
//   let marks = [12, 23, 45, 65, 24, 56, 67, 87, 32, 90, 12, 23, 112];
//   let count = 0;

//   let largestelement = -Infinity;

//   for (let i = 0; i < marks.length; i++) {
//     count++;
//     if (marks[i] > largestelement) {
//       largestelement = marks[i];
//     }
//   }

//   // return Math.max(marks);

//   // return marks.length;
//   return {
//     largestelement: largestelement,
//     count: count,
//   };
// }

// console.log(LargestElement());

function LargestElement(marks) {
  let count = 0;
  let largestelement = -Infinity;

  for (let i = 0; i < marks.length; i++) {
    count++;

    if (marks[i] > largestelement) {
      largestelement = marks[i];
    }
  }

  return {
    largestelement: largestelement,
    count: count,
  };
}

let marks = [12, 23, 45, 65, 24, 56, 67, 87, 32, 90, 12, 23, 112];

console.log(LargestElement(marks));
console.log(LargestElement([10, 20, 30]));
console.log(LargestElement([5, 2, 100, 8]));
console.log(LargestElement([45, 12, 67, 9]));

function Large(num) {
  return Math.max(...num);

  // return num;
}
// let markss=(10,20,30,45,67);
let markss = [10, 20, 30, 45, 67];

console.log(Large(markss));

// 38.	Create a function that returns the factorial of a number.

function factorials(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorials(8));

// 39.	Create a function that prints a multiplication table for a given number.

function tablePrint(num) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${i * num}`);
  }
}
tablePrint(16);

// Option 2: Return the table as an array

function tablePrint(num) {
  let table = [];

  for (let i = 1; i <= 10; i++) {
    table.push(`${num} x ${i} = ${num * i}`);
  }

  return table;
}

console.log(tablePrint(16));

// Option 3: Make the table range configurable

function tablePrint(num, limit) {
  for (let i = 1; i <= limit; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

tablePrint(16, 20);

// function printTables(num) {
//   for (let i = 1; i <= num; i++) {
//     console.log(`Table of ${i}:`);

//     for (let j = 1; j <= 10; j++) {
//       console.log(`${i} x ${j} = ${j * i}`);
//     }

//     console.log("*************");
//   }
// }

// printTables(5);

// 40.	Create a function that counts the digits in a number.
// 41.	Create a function that returns the sum of the digits of a number.
// 42.	Create a function that reverses the digits of a number.

function digitscounts(num) {
  num = Math.abs(Math.trunc(num));

  let originalNumber = num;
  let count = 0;
  let digtitsum = 0;
  let reversNumber = 0;

  if (num === 0) {
    return {
      originalNumber: 0,
      count: 1,
      digtitsum: 0,
      reversNumber: 0,
      message: "It is a palindrome number.",
    };
  }

  while (num > 0) {
    let digits = num % 10;

    digtitsum += digits;
    reversNumber = reversNumber * 10 + digits;

    num = Math.floor(num / 10);
    count++;
  }

  let message =
    originalNumber === reversNumber
      ? "It is a palindrome number."
      : "It is not a palindrome number.";

  return {
    originalNumber: originalNumber,
    count: count,
    digtitsum: digtitsum,
    reversNumber: reversNumber,
    message: message,
  };
}

console.log(digitscounts(121));
console.log(digitscounts(123));

// 43.	Create a function that checks whether a number is a palindrome.

function palindromeCheck(num) {
  let originalNumber = num;
  let reversNumber = 0;

  if (num < 0) {
    return {
      originalNumber: originalNumber,
      reversNumber: null,
      message: "Negative numbers are not palindromes.",
    };
  }

  let temp = num;

  while (temp > 0) {
    let digits = temp % 10;
    reversNumber = reversNumber * 10 + digits;
    temp = Math.floor(temp / 10);
  }

  let message =
    originalNumber === reversNumber
      ? "It is a palindrome number."
      : "It is not a palindrome number.";

  return {
    originalNumber: originalNumber,
    reversNumber: reversNumber,
    message: message,
  };
}

console.log(palindromeCheck(121));
console.log(palindromeCheck(1210));
console.log(palindromeCheck(-121));

// Create a function that checks whether a number is an Armstrong number.

// 153 → Armstrong number, because \(1^3+5^3+3^3=153\).

// 123 → Not an Armstrong number.

function CheckArmsStrongNUmber(num) {
  let originalNumber = num;
  let sumofdigitscube = 0;

  while (num > 0) {
    let digits = num % 10;

    sumofdigitscube += Math.pow(digits, 3);

    num = Math.floor(num / 10);
  }

  let message =
    sumofdigitscube === originalNumber
      ? "It is an Armstrong number."
      : "It is not an Armstrong number.";

  return {
    originalNumber: originalNumber,
    sumofdigitscube: sumofdigitscube,
    message: message,
  };
}

console.log(CheckArmsStrongNUmber(153));
console.log(CheckArmsStrongNUmber(123));

// Question 45, sir
// Create a function that checks whether a number is a perfect number.

// What is a perfect number?
// A perfect number is a positive integer that equals the sum of all its positive divisors, excluding the number itself.
// Example 1: Number 6
// The divisors of 6, excluding 6 itself, are 1, 2, and 3.
// \[
// 1+2+3=6
// \]

// Since the sum equals the original number, 6 is a perfect number. ✅
// Example 2: Number 28
// The divisors of 28, excluding 28 itself, are 1, 2, 4, 7, and 14.
// \[
// 1+2+4+7+14=28
// \]

// So, 28 is also a perfect number. ✅
// Example 3: Number 12
// The divisors of 12, excluding 12 itself, are 1, 2, 3, 4, and 6.
// \[
// 1+2+3+4+6=16
// \]

// Since \(16 \ne 12\), 12 is not a perfect number. ❌

function CheckPerfectNumber(num) {
  let originalNumber = num;

  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  let message =
    originalNumber === sum
      ? "it is perfect Number"
      : "it is not perfect number";
  return {
    originalNumber: originalNumber,
    sumofDivisiors: sum,
    message: message,
  };
}

console.log(CheckPerfectNumber(28));

// 44.	Create a function that checks whether a number is prime.
// 1. What is a prime number?
// A prime number is a whole number greater than 1 that has exactly two factors: 1 and itself

function checkPrime(num) {
  if (num <= 1) {
    return `This ${num} is not Prime`;
  }

  // for (let i = 2; i < num; i++) {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return `This ${num} is not Prime`;
    }
  }

  return `This ${num} is  Prime`;
}

console.log(checkPrime(13));

// 45.	Create a function that prints all prime numbers between two given numbers.

function checkPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function printPrimeAndNonPrime(start, end) {
  let primeCount = 0;
  let nonPrimeCount = 0;

  for (let i = start; i <= end; i++) {
    if (checkPrime(i)) {
      console.log(`${i} is Prime`);
      primeCount++;
    } else {
      console.log(`${i} is Not Prime`);
      nonPrimeCount++;
    }
  }

  console.log("Total Prime Numbers:", primeCount);
  console.log("Total Non-Prime Numbers:", nonPrimeCount);
  console.log("Total Numbers:", primeCount + nonPrimeCount);
}

printPrimeAndNonPrime(10, 15);

// 46.	Create a function that accepts any number of arguments and returns their total count.

function ArgumentsCounts(...num) {
  return num.length;
}

console.log(ArgumentsCounts(10, 20, 30, 40, 50, 60, 3, 6, 123));

function ArgumentsCounts() {
  let count = 0;
  for (let i = 1; i <= arguments.length; i++) {
    count = count + 1;
  }
  return count;
}

console.log(ArgumentsCounts(10, 20, 30, 40, 50, 60, 8));

console.log("-----------arguments counts----------");

function ArgumentsCounts() {
  return arguments.length;
}

console.log(ArgumentsCounts(10, 20, 30, 40, 50, 60, 8));

//Q 47 Create a function that accepts any number of arguments and returns their sum.

function argumentsum() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }

  return sum;
}

console.log(argumentsum(1, 4, 5, 8));

// 48.	Create a function using arguments that returns the largest argument.

function LargestArguments() {
  // return arguments.length;

  let largestArguments = -Infinity;
  let count = 0;
  let allArguments = [];

  for (let i = 0; i < arguments.length; i++) {
    count++;

    // Print every argument
    // console.log(`Argument ${count}: ${arguments[i]}`);

    // Store every argument in the array
    allArguments.push(arguments[i]);

    if (arguments[i] > largestArguments) {
      largestArguments = arguments[i];
    }
  }
  // return `The Largest argumetns is :- ${largestArguments}`;
  return {
    count: count,
    largestArguments: largestArguments,
    allArguments: allArguments,
  };
}

console.log(LargestArguments(10, 20, 30, 41));

// 49.	Create a function using arguments that returns the smallest argument.

function SmallestArguments() {
  // return arguments.length;

  let smallestarguments = Infinity;
  let count = 0;
  let allArguments = [];

  if (count === 0) {
    return {
      count: 0,
      smallestarguments: null,
      allArguments: [],
    };
  }

  for (let i = 0; i < arguments.length; i++) {
    count++;

    // Print every argument
    // console.log(`Argument ${count}: ${arguments[i]}`);

    // Store every argument in the array
    allArguments.push(arguments[i]);

    if (arguments[i] < smallestarguments) {
      smallestarguments = arguments[i];
    }
  }
  // return `The Largest argumetns is :- ${smallestarguments}`;
  return {
    count: count,
    smallestarguments: smallestarguments,
    allArguments: allArguments,
  };
}

console.log(SmallestArguments(10, 20, 30, 41));

// 50.	Create a function that returns the average of all arguments.

function AverageofArguments() {
  let sum = 0;
  let argumentsLength = arguments.length;

  if (argumentsLength === 0) {
    return "No arguments provided";
  }

  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }

  let average = sum / argumentsLength;

  return `The average of arguments is ${average}`;
}

console.log(AverageofArguments(1.2, 3, 5));

// 51.	Create a function that counts how many arguments are positive.
// 52.	Create a function that counts how many arguments are negative.

function countPositive(num) {
  let count = 0;
  let negativecount = 0;
  let zerocount = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > 0) {
      count++;
    } else if (arguments[i] < 0) {
      negativecount++;
    } else {
      zerocount++;
    }
  }

  return {
    positivecount: count,
    negativecount: negativecount,
    zerocount: zerocount,
  };
}

console.log(
  countPositive(10, 20, 30, 40, 50, -56, -8, -1, -3, -2, 1, 1, 34, 56, 0, 0),
);

// 53.	Create a function that counts how many arguments are even.
// 54.	Create a function that counts how many arguments are odd.

function evenArgumentcount() {
  let evenargumentcount = 0;
  let oddargumentcount = 0;
  let zerocount = 0;

  let evennumbers = [];
  let oddnumbers = [];
  let zeronumbers = [];

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === 0) {
      zerocount++;
      zeronumbers.push(arguments[i]);
    } else if (arguments[i] % 2 === 0) {
      evenargumentcount++;
      evennumbers.push(arguments[i]);
    } else {
      oddargumentcount++;
      oddnumbers.push(arguments[i]);
    }
  }

  return {
    evenargumentcount: evenargumentcount,
    oddargumentcount: oddargumentcount,
    zerocount: zerocount,

    evennumbers: evennumbers,
    oddnumbers: oddnumbers,
    zeronumbers: zeronumbers,
  };
}

console.log(
  evenArgumentcount(
    10,
    20,
    30,
    40,
    50,
    -56,
    -8,
    -1,
    -3,
    -2,
    1,
    1,
    34,
    56,
    0,
    0,
  ),
);

// 55.	Create a function that returns the sum of only the even arguments.
// 56.	Create a function that returns the sum of only the odd arguments.

function sumofEvenOddArguments() {
  let evenargumentcount = 0;
  let oddargumentcount = 0;
  let zerocount = 0;

  let evenSum = 0;
  let oddSum = 0;

  let evennumbers = [];
  let oddnumbers = [];
  let zeronumbers = [];

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] === 0) {
      zerocount++;
      zeronumbers.push(arguments[i]);
    } else if (arguments[i] % 2 === 0) {
      evenargumentcount++;
      evenSum += arguments[i];
      evennumbers.push(arguments[i]);
    } else {
      oddargumentcount++;
      oddSum += arguments[i];
      oddnumbers.push(arguments[i]);
    }
  }

  return {
    evenargumentcount: evenargumentcount,
    oddargumentcount: oddargumentcount,
    zerocount: zerocount,

    evenSum: evenSum,
    oddSum: oddSum,

    evennumbers: evennumbers,
    oddnumbers: oddnumbers,
    zeronumbers: zeronumbers,
  };
}

console.log(
  sumofEvenOddArguments(
    10,
    20,
    30,
    40,
    50,
    -56,
    -8,
    -1,
    -3,
    -2,
    1,
    1,
    34,
    56,
    0,
    0,
  ),
);

// 57.	Create a function that returns the product of all arguments.

console.log("-------product of all arguments-------------");

function allProductArguments(num) {
  let product = 1;
  for (let i = 0; i < arguments.length; i++) {
    product = product * arguments[i];
  }
  return `The Product of all arguments is:-> ${product}`;
}

console.log(allProductArguments(10, 2, 3, 4, -5));

// 58.	Create a function that finds the second-largest argument.
// 59.	Create a function that finds the second-smallest argument.
// 60.	Create a function that returns the difference between the maximum and minimum arguments.

function secondLargestArguments() {
  let numbers = [];
  let count = 0;

  for (let i = 0; i < arguments.length; i++) {
    count++;
    numbers.push(arguments[i]);
  }

  // Sort numbers from largest to smallest
  numbers.sort((a, b) => b - a);

  // Remove duplicate numbers
  let uniqueNumbers = [...new Set(numbers)];

  // Find largest and second-largest
  let largestArgument = uniqueNumbers[0];
  let secondLargest = uniqueNumbers[1];

  // Find smallest and second-smallest
  let smallestArgument = uniqueNumbers[uniqueNumbers.length - 1];
  let secondSmallest = uniqueNumbers[uniqueNumbers.length - 2];

  differenceOfArguments = largestArgument - smallestArgument;

  return {
    numbers: numbers,
    uniqueNumbers: uniqueNumbers,
    count: count,

    largestArgument: largestArgument,
    secondLargest: secondLargest,

    secondSmallest: secondSmallest,
    smallestArgument: smallestArgument,

    differenceOfArguments: differenceOfArguments,
  };
}

console.log(secondLargestArguments(10, 20, 30, 40, 40, 50, 60, 45, 45, 50));

// Level 5: Rest parameters ...args (61–75)
// 61.	Write a function countArgs(...args) that returns the number of arguments.

function countsargs(...args) {
  return `The number of args:-> ${args.length}`;
}

let student_marks = [10, 2, 4, 5, 2, 7, 8, 9, 10, 5, 4, 7, 8];

// console.log(countsargs(10,2,4,5,2,7,8,9));
console.log(countsargs(...student_marks));

// 62.	Write a function sum(...args) that returns their sum.

console.log("........argssum........");

function argsSum(...argsLists) {
  let sum = 0;

  for (let i = 0; i < argsLists.length; i++) {
    sum += argsLists[i];
  }

  return `The all Args sum is:- ${sum}`;
}

let artsList = [4, 7, 8, 9, 6, 6];

console.log(argsSum(...artsList));
console.log(argsSum(6, 7, 8, 2, 3, 4));

// 63.	Write a function findMax(...args) that returns the maximum.

console.log("..........max arguments......");

function findMax(...args) {
  let max = args[0];

  for (let i = 1; i < args.length; i++) {
    if (args[i] > max) {
      max = args[i];
    }
  }

  return `the max arguments is  ${max}`;
}

console.log(findMax(10, 50, 20, 80, 30));
console.log(findMax(4, 7, 2, 15, 9));

// 64.	Write a function findMin(...args) that returns the minimum.
console.log("----------min argument--------");

function findMin(...args) {
  let min = args[0];

  for (let i = 1; i < args.length; i++) {
    if (args[i] < min) {
      min = args[i];
    }
  }

  return `the min arguments is  ${min}`;
}

console.log(findMin(10, 50, 20, 80, 30));
console.log(findMin(4, 7, 2, 15, 9));

// 65.	Write a function average(...args) that returns their average.
// 66.	Write a function that returns only positive values from ...args.
// 67.	Write a function that returns only negative values from ...args.
// 68.	Write a function that returns an array of even arguments.
// 69.	Write a function that returns an array of odd arguments.

function analyzeArguments(...args) {
  let sum = 0;

  let positiveNumbers = [];
  let negativeNumbers = [];
  let evenNumbers = [];
  let oddNumbers = [];

  for (let i = 0; i < args.length; i++) {
    sum += args[i];

    if (args[i] > 0) {
      positiveNumbers.push(args[i]);
    } else if (args[i] < 0) {
      negativeNumbers.push(args[i]);
    }

    if (args[i] % 2 === 0) {
      evenNumbers.push(args[i]);
    } else {
      oddNumbers.push(args[i]);
    }
  }

  let average = args.length > 0 ? sum / args.length : 0;

  return {
    average: average,
    positiveNumbers: positiveNumbers,
    negativeNumbers: negativeNumbers,
    evenNumbers: evenNumbers,
    oddNumbers: oddNumbers,
  };
}

console.log(analyzeArguments(10, -5, 20, -8, 7, 3, 0, 12, -4));

function argumentcountgreater(...num) {
  let count = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] > 100) {
      count++;
    }
  }

  return `The argument count greater then 100 :- ${count}`;
}

let numbers = [1, 3, 100, 112, 345, 78];

console.log(argumentcountgreater(...numbers));
