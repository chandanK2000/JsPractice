// 1. Count the digits in a number.
// 2. Find the sum of all digits.
// 3. Reverse the digits.
// 4. Check whether a number is a palindrome.
// 5. Find the product of all digits.
// 6. Count even and odd digits.
//  7. Count the odd digits in a number.
// 8.Find the largest digit in a number.
// 9. Find the smallest digit in a number.

function countDigit(number) {
  let originalNumber = number;
  let count = 0;
  let sum = 0;
  let reverseNumber = 0;
  let message;
  let product = 1;
  let evenDigits = [];
  let oddDigits = [];
  let digits;
  let largestdigits = 0;
  let smallestdigits = 9;

  while (number > 0) {
    digits = number % 10;

    sum = sum + digits;
    reverseNumber = reverseNumber * 10 + digits;
    product = product * digits;
    count++;

    if (digits > largestdigits) {
      largestdigits = digits;
    }

    if (digits < smallestdigits) {
      smallestdigits = digits;
    }

    if (digits % 2 === 0) {
      evenDigits.push(digits);
    } else {
      oddDigits.push(digits);
    }

    number = Math.floor(number / 10);
  }

  if (originalNumber === reverseNumber) {
    message = "Number is palindrome";
  } else {
    message = "Number is not palindrome";
  }

  return {
    originalNumber: originalNumber,
    count: count,
    sum: sum,
    reverseNumber: reverseNumber,
    message: message,
    product: product,
    evenDigits: evenDigits,
    oddDigits: oddDigits,
    evenDigitCount: evenDigits.length,
    oddDigitCount: oddDigits.length,
    largestdigits: largestdigits,
    smallestdigits: smallestdigits,
  };
}

console.log(countDigit(178658590));

// 10. Count how many times a particular digit occurs.

function countDigitFrequency(number, targetDigit) {
  let originalNumber = number;
  let count = 0;

  while (number > 0) {
    let digit = number % 10;

    // Step 1: Check whether digit matches targetDigit

    if (digit === targetDigit) {
      count++;
    }

    // Step 2: If it matches, increase count

    number = Math.floor(number / 10);
  }

  return {
    number: originalNumber,
    targetDigit: targetDigit,
    frequency: count,
  };
}

console.log(countDigitFrequency(17865859985, 9));

// 11. Count the frequency of every digit from 0 to 9.

function countEveryDigit(number) {
  let originalNumber = number;
  let frequency = {};

  // Initialize the frequency of digits 0 to 9
  for (let i = 0; i <= 9; i++) {
    frequency[i] = 0;
  }

  // Count each digit
  while (number > 0) {
    let digit = number % 10;

    frequency[digit]++;

    number = Math.floor(number / 10);
  }

  return {
    originalNumber: originalNumber,
    frequency: frequency,
  };
}

console.log(countEveryDigit(1234567654321));

// 12. Find the first digit of a number.

function firstDigits(number) {
  let originalNumber = number;

  while (number >= 10) {
    number = Math.floor(number / 10);
  }

  return {
    originalNumber: originalNumber,
    firstDigit: number,
  };
}

console.log(firstDigits(456));

//  12. Find the last digit of a number.

function lastDigit(number) {
  let originalNumber = number;
  let digit = Math.abs(number) % 10;

  return {
    originalNumber: originalNumber,
    lastDigit: digit,
  };
}

console.log(lastDigit(45678));

// 14. Find the sum of the first and last digits.

function sumFirstLastDigit(number) {
  let originalNumber = number;
  number = Math.abs(number);

  let lastDigit = number % 10;

  while (number >= 10) {
    number = Math.floor(number / 10);
  }

  let firstDigit = number;
  let sum = firstDigit + lastDigit;

  return {
    originalNumber: originalNumber,
    firstDigit: firstDigit,
    lastDigit: lastDigit,
    sum: sum,
  };
}

console.log(sumFirstLastDigit(45678));

// 15. Remove the last digit of a number.

console.log("---remove last digits---");
function removeLastDigits(number) {
  let originalNumber = number;
  let lastdigits = number % 10;
  let newNumber = Math.floor(number / 10);

  return {
    originalNumber: originalNumber,
    lastdigits: lastdigits,
    newNumber: newNumber,
  };
}

console.log(removeLastDigits(456373));

// 16. Remove the first digit of a number.

// 16. Remove the first digit of a number.

function removeFirstDigits(number) {
  let originalNumber = number;
  let divisor = 1;

  while (number >= 10) {
    number = Math.floor(number / 10);
    divisor = divisor * 10;
  }

  let remainingNumber = originalNumber % divisor;

  return {
    originalNumber: originalNumber,
    remainingNumber: remainingNumber,
  };
}

console.log(removeFirstDigits(456373));

// 17. Swap the first and last digits of a number.

function swapFirstLastDigits(number) {
  let originalNumber = number;
  let divisor = 1;

  // Find the divisor and first digit
  while (number >= 10) {
    number = Math.floor(number / 10);
    divisor = divisor * 10;
  }

  let firstDigit = number;
  let lastDigit = originalNumber % 10;

  // Extract the middle digits
  let middleDigits = Math.floor((originalNumber % divisor) / 10);

  // Build the swapped number
  let swappedNumber = lastDigit * divisor + middleDigits * 10 + firstDigit;

  return {
    originalNumber: originalNumber,
    firstDigit: firstDigit,
    lastDigit: lastDigit,
    middleDigits: middleDigits,
    swappedNumber: swappedNumber,
  };
}

console.log(swapFirstLastDigits(45678));
