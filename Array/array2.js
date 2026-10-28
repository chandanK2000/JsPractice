console.log("------array level 2 : array program Q-41-80");

// 41. Find the sum of all elements.
// 42. Find the average of all elements.

const num = [10, 23, 24, 67, 89, 12, 19, 34];

function sumallElements() {
  let sum = 0;
  let average = 0;

  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }
  average = sum / num.length;

  return {
    sum: sum,
    average: average,
  };
}

console.log(sumallElements());

console.log("--------------------------");

const numbers = [10, 20, 30, 40];

const sum = numbers.reduce((total, num) => {
  console.log("Total:", total, "| Num:", num);

  return total + num;
}, 0);

console.log("Final Sum:", sum);

// =====================================
// 43. Find the largest element without using Math.max().

function largetstElement() {
  const numbers = [10, 20, 30, 40];

  let largest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}
console.log(largetstElement());

// =====================================
// 44. Find the smallest element without using Math.min().

function smallestElement() {
  const numbers = [10, 20, 30, 40];

  let smallest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }
  return smallest;
}
console.log(smallestElement());

// =====================================
// 45. Count even numbers.
// 46. Count odd numbers.

function countEvenNumbers() {
  const numbers = [10, 29, 30, 40, 45, 91];

  const evenElementArray = [];
  const oddElementArray = [];
  let evencount = 0;
  let oddcount = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenElementArray.push(numbers[i]);
      evencount++;
    } else {
      oddElementArray.push(numbers[i]);
      oddcount++;
    }
  }

  return {
    evencount: evencount,
    oddcount: oddcount,
    evenElementArray: evenElementArray,
    oddElementArray: oddElementArray,
  };
}

console.log(countEvenNumbers());

// ========================================
// 47. Count positive numbers.
// 48. Count negative numbers.
// 49. Count zeros.

function countPositive() {
  const num = [9, 10, 23, 56, -56, 12, 45, -89, 67, -4, 0, 90, 0, 12, 0];

  let negativecount = 0;
  let positivecount = 0;
  let zerocount = 0;

  let positivearray = [];
  let negativearray = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i] > 0) {
      positivearray.push(num[i]);
      positivecount++;
    } else if (num[i] < 0) {
      negativearray.push(num[i]);
      negativecount++;
    } else {
      zerocount++;
    }
  }

  return {
    positivecount,
    negativecount,
    zerocount,
    positivearray,
    negativearray,
    totalarraysize: num.length,
  };
}

console.log(countPositive());

// 50. Calculate the sum of even elements.
// 51. Calculate the sum of odd elements.
// 52. Find the product of all elements.
// 53. Count elements greater than 10.

function analyzeNumbers() {
  let num = [10, 5, 6, 8, 10, 24, 68, 9, 23];
  let oddElementsum = 0;
  let evenElementsum = 0;
  let product = 1;
  let elementgreater10 = [];
  let elementgreate10count = 0;

  for (let i = 0; i < num.length; i++) {
    product *= num[i];
    if (num[i] % 2 === 0) {
      evenElementsum = evenElementsum + num[i];
    } else {
      oddElementsum += num[i];
    }

    if (num[i] > 10) {
      elementgreater10.push(num[i]);
      elementgreate10count++;
    }
  }
  return {
    oddElementsum: oddElementsum,
    evenElementsum: evenElementsum,
    product: product,
    elementgreater10: elementgreater10,
    elementgreate10count: elementgreate10count,
  };
}
console.log(analyzeNumbers());

// ============================================
// 54. Print elements greater than a given number.

function printElements(givenNumber) {
  const numbers = [10, 20, 13, 24, 56, 78, -56, 90, 16, 0];

  let text = "";

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > givenNumber) {
      text += numbers[i] + "\n";
    }
  }

  return text;
}

console.log(printElements(10));

console.log("---------------------------------------------");

// 55. Print elements smaller than the average.

function getSortedElements(givenNumber) {
  const numbers = [10, 20, 13, 24, 56, 78, -56, 90, 16, 0];

  let result = [];
  let belowAverage = [];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];

    if (numbers[i] > givenNumber) {
      result.push(numbers[i]);
    }
  }

  const average = sum / numbers.length;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < average) {
      belowAverage.push(numbers[i]);
    }
  }

  result.sort((a, b) => a - b);

  return {
    result: result,
    average: average,
    sum: sum,
    originalArray: numbers,
    belowAverage: belowAverage,
  };
}

console.log(getSortedElements(10));

// ===============================================

// 56. Create a new array containing squares of all numbers.

function squaresAllNumbers(num) {
  const squaresOfElements = [];

  for (let i = 1; i <= num; i++) {
    // squaresOfElements.push(i * i);
    squaresOfElements.push(Math.pow(i, 2));
  }
  return squaresOfElements;
}

console.log(squaresAllNumbers(10));

console.log("------------------------------------");

function squaresAllNumbers(numbers) {
  const squaresOfElements = [];

  for (let i = 0; i < numbers.length; i++) {
    squaresOfElements.push(numbers[i] ** 2);
  }

  return squaresOfElements;
}

console.log(squaresAllNumbers([2, 4, 6, 8]));

// ===================================================

// 57. Create a new array containing cubes of all numbers.

function cubeAllNumbers(numbers) {
  const cubeAllNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    cubeAllNumbers.push(numbers[i] ** 3);
  }

  return cubeAllNumbers;
}

console.log(cubeAllNumbers([2, 4, 6, 8]));

// ================================================

// 58. Double every element without using map().

function DoubleEveryElements(number) {
  let doubledElements = [];
  for (let i = 0; i < number.length; i++) {
    doubledElements.push(number[i] * 2);
  }

  return doubledElements;
}

console.log(DoubleEveryElements([10, 20, 30, 40, 50]));

// =====================================================
// 59. Replace every negative number with zero.

function ReplaceNegative() {
  const num = [10, 20, -90, -45, 0, 12, 24, -34, 80, 34];

  for (let i = 0; i < num.length; i++) {
    if (num[i] < 0) {
      num[i] = 0;
    }
  }
  return num;
}

console.log(ReplaceNegative());

// =====================================
// 60. Replace every zero with 100.

function ReplaceBYZero() {
  const num = [10, 20, 0, -90, -45, 0, 0, 12, 24, -34, 80, 34, 0, 0];

  for (let i = 0; i < num.length; i++) {
    if (num[i] === 0) {
      num[i] = 100;
    }
  }
  return num;
}

console.log(ReplaceBYZero());

// =====================================================
// Move all zeros to the end of the array, while keeping the order of the other elements unchanged.

function moveZeros() {
  const numbers = [0, 10, 0, 20, 30, 0, 40];
  const result = [];
  let zeroCount = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0) {
      result.push(numbers[i]);
    } else {
      zeroCount++;
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }

  return {
    result: result,
    zeroCount: zeroCount,
  };
}

console.log(moveZeros());

// ================================================
// 61. Copy all elements into another array using a loop.

function copyArray() {
  let copiedArray = [];

  const num = [78, 5, 6, 12, 15, 89, 98, 34, 56, 65];

  for (let i = 0; i < num.length; i++) {
    copiedArray.push(num[i]);
  }

  return copiedArray;
}

console.log(copyArray());

// ======================================================
// 62. Reverse an array without using reverse().

function ReverseArray() {
  let ReversedArray = [];

  const num = [78, 5, 6, 12, 15, 89, 98, 34, 56, 65];

  for (let i = num.length - 1; i >= 0; i--) {
    ReversedArray.push(num[i]);
  }

  return ReversedArray;
}

console.log(ReverseArray());

// ================================================
console.log("----------compare----");

// 63. Compare two arrays element by element.

function checktwoarrays(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

console.log(checktwoarrays([10, 20, 30], [10, 40, 30]));

// ===========================================
console.log("------kdlkf------------------");
// 64. Check whether two arrays contain the same values in the same order.

function compareArrays(arr1, arr2) {
  // Step 1: Check array lengths
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Step 2: Compare each element
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // Step 3: All elements match
  return true;
}

console.log(compareArrays([10, 20, 30], [10, 20, 30]));
console.log(compareArrays([10, 20, 30], [30, 20, 10]));
console.log(compareArrays([10, 20, 30], [10, 20, 40]));
console.log(compareArrays([10, 20], [10, 20, 30]));

// ===================================================

// 65. Find the first occurrence of a target using a loop.

function firstOccurance(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(firstOccurance([10, 20, 30, 40, 70, 20, 40], 20));
console.log(firstOccurance([10, 20, 30, 40, 70, 20, 40], 90));
console.log(firstOccurance([10, 30, 30, 40, 70, 20, 40], 30));

// ==================================================
// 66. Find the last occurrence of a target using a loop.

console.log("------------------last occurnace-------------");

function findLastOccurrence(numbers, target) {
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] === target) {
      //   return numbers[i];
      return i;
    }
  }

  return -1;
}

console.log(findLastOccurrence([10, 20, 30, 20, 40], 20));
console.log(findLastOccurrence([10, 20, 30, 40], 50));
console.log(findLastOccurrence([5, 8, 5, 9], 5));

// ==========================================
// 67. Count how many times a target occurs.

function targetOccurs(numbers, target) {
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      count++;
    }
  }
  return `The ${target} came ${count} in this array ${numbers}`;
}

console.log(targetOccurs([10, 20, 10, 10, 20, 10, 70, 80, 56, 65], 20));
console.log(targetOccurs([10, 20, 10, 10, 20, 10, 70, 80, 56, 65], 10));
console.log(targetOccurs([10, 20, 10, 10, 20, 10, 70, 80, 56, 65], 80));

// =============================================
// 68. Find all indexes of a given element.

function findAllIndexes(numbers, target) {
  const indexes = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
      indexes.push(i);
    }
  }

  return indexes;
}

console.log(findAllIndexes([10, 20, 30, 20, 40, 20], 20));
console.log(findAllIndexes([5, 8, 5, 9, 5], 5));
console.log(findAllIndexes([10, 20, 30], 50));

// =======================================
// 69. Check whether an array is empty.

let employees2 = [10, 20, 30];

if (employees2.length === 0) {
  console.log(` array is empty`);
} else {
  console.log(employees2);
}

// ==============================================
// 70. Find the second element without directly using [1].
function secondElement() {
  const employees2 = [10, 20, 30, 40];

  for (let i = 0; i < employees2.length; i++) {
    if (i === 1) {
      return employees2[i];
    }
  }
}

console.log(secondElement());

// ========================================
// 71. Find the second-largest element.

function findSecondLargest() {
  const numbers = [10, 45, 20, 78, 56];

  let largest = numbers[0];

  // First, find the largest
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  // Next, find the second-largest
  let secondLargest = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < largest && numbers[i] > secondLargest) {
      secondLargest = numbers[i];
    }
  }

  return secondLargest;
}

console.log(findSecondLargest());

// =============================================
// 72. Find the second-smallest element.

function findSecondSmallest() {
  const numbers = [10, 45, 20, 78, 56];

  let smallest = numbers[0];

  // Step 1: Find the smallest element
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }

  // Step 2: Find the second-smallest element
  let secondSmallest = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > smallest && numbers[i] < secondSmallest) {
      secondSmallest = numbers[i];
    }
  }

  return secondSmallest;
}

console.log(findSecondSmallest());

// ===========================================
// 73. Find the sum of the first and last elements.

function sumFirstAndLast() {
  const numbers = [10, 20, 30, 40, 50];

  let first = numbers[0];
  let last = numbers[numbers.length - 1];

  return first + last;
}

console.log(sumFirstAndLast());

// ================================================
// 74. Swap two elements using a temporary variable.

function swapElements() {
  const numbers = [10, 20, 30, 40, 50];

  let temp = numbers[0];

  numbers[0] = numbers[1];
  numbers[1] = temp;

  return numbers;
}

console.log(swapElements());

// ==========================================
// 75. Swap two elements using destructuring.

function swapElements() {
  const numbers = [10, 20, 30, 40, 50];

  [numbers[0], numbers[1]] = [numbers[1], numbers[0]];

  return numbers;
}

console.log(swapElements());

// ================================================

// 76. Move all zeros to the end.

function moveZeros() {
  const numbers = [0, 10, 0, 20, 30, 0, 40];
  const result = [];
  let zeroCount = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0) {
      result.push(numbers[i]);
    } else {
      zeroCount++;
    }
  }

  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }

  return result;
}

console.log(moveZeros());

// ================================================
// 77. Separate even and odd numbers into two arrays.
// 78. Separate positive and negative numbers into two arrays.
function separateNumbers() {
  const numbers = [10, -5, 7, 20, -8, 13, 0, -3, 6];

  const evenNumbers = [];
  const oddNumbers = [];
  const positiveNumbers = [];
  const negativeNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    // Q77: Separate even and odd numbers
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    } else {
      oddNumbers.push(numbers[i]);
    }

    // Q78: Separate positive and negative numbers
    if (numbers[i] > 0) {
      positiveNumbers.push(numbers[i]);
    } else if (numbers[i] < 0) {
      negativeNumbers.push(numbers[i]);
    }
  }

  return {
    evenNumbers,
    oddNumbers,
    positiveNumbers,
    negativeNumbers,
  };
}

console.log(separateNumbers());

// =====================================================
// 79. Create an array containing only unique values using loops.

function getuniquesvalues() {
  const numbers = [10, 20, 10, 30, 20, 40, 30, 50];
  const uniqueNumbers = [];
  const frequncy = {};

  for (let i = 0; i < numbers.length; i++) {
    let found = false;
    for (let j = 0; j < uniqueNumbers.length; j++) {
      if (numbers[i] === uniqueNumbers[j]) {
        found = true;
        break;
      }
    }

    if (found === false) {
      uniqueNumbers.push(numbers[i]);
    }
  }
  return uniqueNumbers;
}

console.log(getuniquesvalues());

// get frequencies sir

function getUniqueValues() {
  const numbers = [10, 20, 10, 30, 20, 40, 30, 50, 67];
  const frequency = {};

  for (let i = 0; i < numbers.length; i++) {
    if (frequency[numbers[i]] === undefined) {
      frequency[numbers[i]] = 1;
    } else {
      frequency[numbers[i]]++;
    }
  }

  return frequency;
}

console.log(getUniqueValues());

function countNames() {
  const names = ["Sir", "Mohan", "Sohan", "Mohan", "Mohan"];
  const frequency = {};

  for (let i = 0; i < names.length; i++) {
    if (frequency[names[i]] === undefined) {
      frequency[names[i]] = 1;
    } else {
      frequency[names[i]]++;
    }
  }

  return frequency;
}

console.log(countNames());

// =======================================================
// 80. Find the difference between the largest and smallest elements.

function findDifference() {
  const numbers = [10, 45, 20, 78, 5, 56];

  let largest = numbers[0];
  let smallest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }

    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }

  return largest - smallest;
}

console.log(findDifference());

// ----------------------------------------------------------------------