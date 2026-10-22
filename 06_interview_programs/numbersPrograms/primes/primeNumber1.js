console.log("------------------level 2-----------");

// 21. Find all prime factors of a given number.

function PrimeFactor(num) {
  let factors = [];

  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      factors.push(i);
      num = num / i;
    }
  }
  return factors;
}

console.log(PrimeFactor(10)); // [2,5]

// 22. Find the smallest prime factor of a number.
// 23. Find the largest prime factor of a number.
// 27. Find the product of prime factors of a number.
// 28. Find the sum of prime factors of a number.

console.log("----------------------------");

function smallestPrimeFactor(num) {
  let primefactors = [];
  let primefactorproduct = 1;
  let primefactorsum = 0;

  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      primefactors.push(i);
      primefactorproduct *= i;
      primefactorsum += i;
      num = num / i;
    }
  }

  let smallestFactor = primefactors[0];
  let largestFactor = primefactors[0];

  for (let i = 0; i < primefactors.length; i++) {
    if (primefactors[i] < smallestFactor) {
      smallestFactor = primefactors[i];
    }
  }

  for (let i = 0; i < primefactors.length; i++) {
    if (primefactors[i] > largestFactor) {
      largestFactor = primefactors[i];
    }
  }

  return {
    smallestFactor: smallestFactor,
    primefactors: primefactors,
    largestFactor: largestFactor,
    primefactorproduct: primefactorproduct,
    primefactorsum: primefactorsum,
  };
}

console.log(smallestPrimeFactor(24));

// 24. Count the distinct prime factors of a number.
console.log("------------------------");

function countDistinctPrimeFactors(num) {
  let factors = [];

  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      if (!factors.includes(i)) {
        factors.push(i);
      }

      num = num / i;
    }
  }

  return factors;
}

console.log(countDistinctPrimeFactors(24)); // 2
console.log(countDistinctPrimeFactors(100)); // 2
console.log(countDistinctPrimeFactors(30)); // 3

// 25. Count prime factors including repeated factors.
console.log("--------count prime facotrs including repeated---------");

function allPrimefactorcount(num) {
  let primefactor = [];

  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      primefactor.push(i);
      num = num / i;
    }
  }
  return {
    primefactor: primefactor,
    count: primefactor.length,
  };
}
console.log(allPrimefactorcount(24));

// 26. Find the sum of distinct prime factors of a number.
//Q27. Find the product of distinct prime factors of a number.

console.log("----sum of disticnct prime factors-----");

function sumofdisticntPrimefactor(num) {
  let ditinctPrimefactor = [];

  let sum = 0;
  let product = 1;

  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      if (!ditinctPrimefactor.includes(i)) {
        ditinctPrimefactor.push(i);
        sum = sum + i;
        product *= i;
      }
      num = num / i;
    }
  }
  return {
    ditinctPrimefactor: ditinctPrimefactor,
    sum: sum,
    product: product,
  };
}

console.log(sumofdisticntPrimefactor(50));

// 28. Print the prime factorization of a number, including exponents.

console.log("-------Prime factorization including exponents-------");

function primeFactorization(num) {
  let primefactor = [];

  for (let i = 2; i <= num; i++) {
    let count = 0;

    while (num % i === 0) {
      count++;
      num = num / i;
    }

    if (count > 0) {
      primefactor.push({
        prime: i,
        exponent: count,
      });
    }
  }

  return primefactor;
}

console.log(primeFactorization(24));

// 29. Check whether a number has exactly one distinct prime factor.
// 30 Check whether a number has exactly two distinct prime factor.

console.log("----Exactly one distinct prime factor----");

function hasExactlyOneDistinctPrimeFactor(num) {
  let count = 0;

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      count++;

      while (num % i === 0) {
        num = num / i;
      }
    }
  }

  return count === 2;
}

console.log(hasExactlyOneDistinctPrimeFactor(15)); // true
console.log(hasExactlyOneDistinctPrimeFactor(8)); // true
console.log(hasExactlyOneDistinctPrimeFactor(9)); // true
console.log(hasExactlyOneDistinctPrimeFactor(18)); // true
console.log(hasExactlyOneDistinctPrimeFactor(23)); // true

// 1. What is a semiprime number?
// A semiprime number is a number that is the product of exactly two prime numbers. The two prime factors can be the same or different.
// 31. Check whether a number is a semiprime.

console.log("-----Check semiprime number-----");

function isSemiPrime(num) {
  let count = 0;

  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      count++;
      num = num / i;
    }
  }

  return count === 2;
}

console.log(isSemiPrime(4)); // true: 2 × 2
console.log(isSemiPrime(6)); // true: 2 × 3
console.log(isSemiPrime(9)); // true: 3 × 3
console.log(isSemiPrime(12)); // false: 2 × 2 × 3
console.log(isSemiPrime(15)); // true: 3 × 5
console.log(isSemiPrime(7)); // false: 7

// 32. Print all semiprime numbers up to N.

console.log("---------------semi prime number----------");

function isSemiprime(num) {
  let count = 0;

  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      count++;
      num = num / i;
    }
  }

  return count === 2;
}

function printSemiprimes(N) {
  for (let i = 2; i <= N; i++) {
    if (isSemiprime(i)) {
      console.log(i);
    }
  }
}

printSemiprimes(30);

// 33. Find numbers with exactly three prime factors,
// counting multiplicity.

console.log("---xactly three prime factors counting multiplicity.----------");

function hasExactlyThreePrimeFactors(num) {
  let count = 0;

  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      count++;
      num = num / i;
    }
  }

  return count === 3;
}

function printNumbers(N) {
  for (let i = 2; i <= N; i++) {
    if (hasExactlyThreePrimeFactors(i)) {
      console.log(i);
    }
  }
}

printNumbers(30);

// 34. Find numbers with exactly three distinct prime factors.

console.log("--------------hasExactlyThreeDistinctPrimeFactors---------");

function hasExactlyThreeDistinctPrimeFactors(num) {
  let count = 0;

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      let isPrime = true;

      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        count++;

        while (num % i === 0) {
          num = num / i;
        }
      }
    }
  }

  return count === 3;
}

function printNumbersWithThreeDistinctPrimeFactors(N) {
  for (let i = 2; i <= N; i++) {
    if (hasExactlyThreeDistinctPrimeFactors(i)) {
      console.log(i);
    }
  }
}

printNumbersWithThreeDistinctPrimeFactors(100);

// Q35. Check whether all prime factors of a number are distinct.

console.log("----------all PrimeFactors Distinct----------");

function allPrimeFactorsDistinct(num) {
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      num = num / i;

      if (num % i === 0) {
        return false;
      }
    }
  }

  return true;
}

console.log(allPrimeFactorsDistinct(30)); // true
console.log(allPrimeFactorsDistinct(12)); // false
console.log(allPrimeFactorsDistinct(70)); // true
console.log(allPrimeFactorsDistinct(18)); // false

// 36. Check whether a number is a power of a single prime.

console.log("-------------number is a power of a single prime-------");

function isPowerOfSinglePrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      while (num % i === 0) {
        num = num / i;
      }

      return num === 1;
    }
  }

  return false;
}

console.log(isPowerOfSinglePrime(8)); // true
console.log(isPowerOfSinglePrime(9)); // true
console.log(isPowerOfSinglePrime(25)); // true
console.log(isPowerOfSinglePrime(12)); // false
console.log(isPowerOfSinglePrime(30)); // false

// Q37. Find the number of prime factors of N! without calculating N!

console.log("-----number of prime factors of N! without calculating N-------");

function countPrimeFactorsOfFactorial(N) {
  let count = 0;

  for (let i = 2; i <= N; i++) {
    let num = i;

    for (let j = 2; j <= num; j++) {
      while (num % j === 0) {
        count++;
        num = num / j;
      }
    }
  }

  return count;
}

console.log(countPrimeFactorsOfFactorial(5)); // 5
console.log(countPrimeFactorsOfFactorial(6)); // 7
console.log(countPrimeFactorsOfFactorial(7)); // 8

// 38. Find the smallest prime factor for every number from 2 to N.
console.log(
  "------------smallest prime factor for every number from 2 to N-------",
);

function findSmallestPrimeFactors(N) {
  for (let num = 2; num <= N; num++) {
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) {
        console.log(`${num} -> ${i}`);
        break;
      }
    }
  }
}

findSmallestPrimeFactors(20);

//Q 39. Print the prime factorization of every number from 2 to N.

console.log("-------prime factorization of every number from 2 to N.-----");

function printPrimeFactorizations(N) {
  for (let num = 2; num <= N; num++) {
    let temp = num;
    let factors = [];

    for (let i = 2; i <= temp; i++) {
      while (temp % i === 0) {
        factors.push(i);
        temp = temp / i;
      }
    }

    console.log(`${num} = ${factors.join(" × ")}`);
  }
}

printPrimeFactorizations(10);

// 40. Find the number up to N with the greatest number of distinct prime factors.

console.log(
  "----number up to N with the greatest number of distinct prime factors---",
);
function countDistinctPrimeFactors(num) {
  let count = 0;

  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      count++;

      while (num % i === 0) {
        num = num / i;
      }
    }
  }

  return count;
}

function numberWithGreatestDistinctPrimeFactors(N) {
  let maxNumber = 2;
  let maxCount = 0;

  for (let num = 2; num <= N; num++) {
    let count = countDistinctPrimeFactors(num);

    if (count > maxCount) {
      maxCount = count;
      maxNumber = num;
    }
  }

  return {
    number: maxNumber,
    distinctPrimeFactorCount: maxCount,
  };
}

console.log(numberWithGreatestDistinctPrimeFactors(30));
