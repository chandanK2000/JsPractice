// 1. Write a program to check whether a number is prime.

// function checkPrime(num) {
//   if (num <= 1) {
//     return "number is not prime";
//   }

//   for (let i = 2; i <num i++) {
//     if (num % i === 0) {
//       return `${num}  is not prime`;
//     }
//   }

//   return `${num} is prime`;
// }

// console.log(checkPrime(20)); // number is not prime

// 2. Print all prime numbers from 1 to 50.

// function checkPrime(num) {
//   if (num <= 1) {
//     return false;
//   }

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// function allPrimeNumber() {
//   for (let i = 1; i <= 100; i++) {
//     if (checkPrime(i)) {
//       console.log(i);
//     }
//   }
// }

// allPrimeNumber();

// -----------------------------------------------------------

// 4. Print all prime numbers from 100 to 1 in descending order.
// 5. Count the prime numbers between 1 and 100.
// 6. Find the sum of all prime numbers from 1 to N.
// 18. Find the average of prime numbers between 1 and N.
// 20. Count prime and non-prime numbers in an array.
// 21. calculate the all prime sum from 1 to N.
// 22. calculate the all non-prime sum from 1 to N.

function checkPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function allPrimeNumber() {
  let PrimeCount = 0;
  let NonPrimeCount = 0;
  let PrimeSum = 0;
  let NonPrimeSum = 0;
  let PrimeNumbers = [];
  let nonPrimeNumbers = [];

  for (let i = 100; i >= 1; i--) {
    if (checkPrime(i)) {
      PrimeCount++;
      PrimeSum += i;
      PrimeNumbers.push(i);
      console.log(i);
    } else {
      nonPrimeNumbers.push(i);
      NonPrimeCount++;
      NonPrimeSum += i;
    }
  }

  return {
    PrimeCount: PrimeCount,
    NonPrimeCount: NonPrimeCount,
    PrimeSum: PrimeSum,
    NonPrimeSum: NonPrimeSum,
    PrimeNumbers: PrimeNumbers,
    nonPrimeNumbers: nonPrimeNumbers,
    totalsum: PrimeSum + NonPrimeSum,
    
  };
}

let result = allPrimeNumber();

console.log(result.PrimeNumbers);

console.log("Q5. Total prime numbers:", result.PrimeCount);
console.log("Q5. Total non-prime numbers:", result.NonPrimeCount);

console.log("Q6. Sum of prime numbers:", result.PrimeSum);
console.log("Q6. Sum of non-prime numbers:", result.NonPrimeSum);
console.log("Q6. Sum of total number prime and non prime:", result.totalsum);

console.log("All prime numbers:", result.PrimeNumbers);
console.log("All non-prime numbers:", result.nonPrimeNumbers);
console.log("Average of prime numbers:", result.PrimeSum / result.PrimeCount);
console.log("Average of non prime numbers:", result.NonPrimeSum / result.NonPrimeCount);


// 7. Find the first 10 prime numbers.
// -----------------------------------------------------------

function firstNPrimeNumbers(n) {
  let primeNumbers = [];
  let num = 2;

  while (primeNumbers.length < n) {
    if (checkPrime(num)) {
      primeNumbers.push(num);
    }

    num++;
  }
  return primeNumbers;
}

let first20primeNumbers = firstNPrimeNumbers(20);

console.log("Q7. First 10 prime numbers:", first20primeNumbers);

// ------------------------------------------------

function checkPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// 9. Print prime numbers between two user-given numbers.
// 10. Count prime numbers between two given numbers.
// 11. Find the largest prime number smaller than N.
// 12. Find the smallest prime number greater than N.
function primeNumbersBetween(start, end) {
  let primeNumbers = [];
  let Count = 0;
  let largestprime = null;
  let smallestprime = null;

  for (let i = start; i <= end; i++) {
    if (checkPrime(i)) {
      primeNumbers.push(i);
      Count++;

      if (largestprime === null || i > largestprime) {
        largestprime = i;
      }

      if (smallestprime === null || i < smallestprime) {
        smallestprime = i;
      }
    }
  }

  return {
    primeNumbers: primeNumbers,
    Count: Count,
    largestprime: largestprime,
    smallestprime: smallestprime,
  };
}

let start = 40;
let end = 100;

let results = primeNumbersBetween(start, end);

console.log("Prime numbers:", results.primeNumbers);
console.log("Total prime numbers:", results.Count);
console.log("Largest prime:", results.largestprime);
console.log("Smallest prime:", results.smallestprime);

// 13. Check whether two given numbers are both prime.

console.log("------------------------------");

function checkBothPrime(num1, num2) {
  if (checkPrime(num1) && checkPrime(num2)) {
    return "Both numbers are prime";
  } else {
    return "Both numbers are not prime prime";
  }
}

console.log(checkBothPrime(3, 7));
console.log(checkBothPrime(3, 8));
console.log(checkBothPrime(8, 10));

// 14. Print all prime numbers in an array.

console.log('--------------------------')


function printPrimeNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (checkPrime(arr[i])) {
      console.log(arr[i]);
    }
  }
}

let numbers = [2, 4, 5, 8, 11, 13, 15, 17, 20, 23];

printPrimeNumbers(numbers);

console.log('----------------------------');
// 15. Create a function isPrime(n) that returns true or false.

function isPrime(n){

    if(checkPrime(n)){
        return true
    }else{
        return false
    }

}

console.log(isPrime(10));
console.log(isPrime(7));


console.log('--------------------------');
// 16. Create a function that returns all primes up to N in an array.

function Primes(num){
    let primes=[];

    for(let i=2; i<=num;i++){
        if(checkPrime(i)){
            primes.push(i);
        }
    }
    return primes;
}
console.log(Primes(20));


// 19. Print prime numbers at even indexes of an array.
console.log('-----------------------------');


function printPrimeEvenIndexes(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0 && checkPrime(numbers[i])) {
      console.log(numbers[i]);
    }
  }
}

let numberss = [2, 5, 7, 8, 11, 13, 17, 20];

printPrimeEvenIndexes(numberss);