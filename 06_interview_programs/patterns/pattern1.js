// console.log("hello");
// 1. Print one star (*) on the screen.

console.log("*");

for (let i = 1; i <= 1; i++) {
  console.log("*");
}
// 2. Print five stars on the same line.

let star = "";
for (let i = 1; i <= 5; i++) {
  star = star + "*";
}
console.log(star);

// Q3. Print five stars on separate lines.

for (let i = 1; i <= 5; i++) {
  console.log("*");
}

// Q4. Print two stars on the first line, three on the second, and four on the third.

for (let i = 2; i <= 4; i++) {
  let star = "";

  for (let j = 1; j <= i; j++) {
    star = star + "*";
  }

  console.log(star);
}

// Q5. Print one star on the first line, two on the second, and three on the third.
console.log("----------");

for (let i = 1; i <= 5; i++) {
  let star = "";

  for (let j = 1; j <= i; j++) {
    star = star + "*";
  }

  console.log(star);
}

// Q7. Print a decreasing star pattern with five rows.

console.log("----------");

for (let i = 5; i >= 1; i--) {
  let star = "";

  for (let j = 1; j <= i; j++) {
    star = star + "*";
  }

  console.log(star);
}

// Q8. Print three rows, each containing four stars.

console.log("----------");
for (let i = 1; i <= 3; i++) {
  let star = "";

  for (let j = 1; j <= 4; j++) {
    star = star + "*";
  }

  console.log(star);
}

// Q9. Print a square of stars with four rows and four columns.

console.log("----------");
for (let i = 1; i <= 4; i++) {
  let star = "";

  for (let j = 1; j <= 4; j++) {
    star = star + j;
  }

  console.log(star);
}

// Q10. Print a rectangle with two rows and six columns.
console.log("----------");
for (let i = 1; i <= 2; i++) {
  let star = "";

  for (let j = 1; j <= 6; j++) {
    star = star + "#";
  }

  console.log(star);
}

// Level 2: Number Patterns (Questions 11–20)
// Q11. Print numbers from 1 to 5 on the same line.
// 12345

console.log("------");

let text = "";
for (let i = 1; i <= 5; i++) {
  text = text + i;
}
console.log(text);

// Q12. Print numbers from 1 to 5 on separate lines.

console.log("------");

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Q13. Print the same number five times.
// 55555

console.log("------");

let texts = "";
for (let i = 1; i <= 5; i++) {
  texts = texts + "5";
}
console.log(texts);

// Q14. Print three rows of 123.
// 123
// 123
// 123

console.log("------");

for (let i = 1; i <= 3; i++) {
  let text1 = "";
  for (let j = 1; j <= 3; j++) {
    text1 = text1 + j;
  }
  console.log(text1);
}

// Q15. Print an increasing number pattern.
// 1
// 12
// 123
// 1234
// 12345

console.log("------");

for (let i = 1; i <= 5; i++) {
  let text1 = "";
  for (let j = 1; j <= i; j++) {
    text1 = text1 + j;
  }
  console.log(text1);
}

// Q16. Print a decreasing number pattern.
// 12345
// 1234
// 123
// 12
// 1

console.log("------");

for (let i = 5; i >= 1; i--) {
  let text1 = "";
  for (let j = 1; j <= i; j++) {
    text1 = text1 + j;
  }
  console.log(text1);
}

// Q17. Print repeated row numbers.
// 1
// 22
// 333
// 4444

console.log("------");

for (let i = 1; i <= 5; i++) {
  let text1 = "";
  for (let j = 1; j <= i; j++) {
    text1 = text1 + i;
  }
  console.log(text1);
}

// Q18. Print a pattern where each row starts from its row number.
// 1
// 23
// 345
// 4567
// 56789

console.log("------");

for (let i = 1; i <= 5; i++) {
  let text1 = "";
  for (let j = i; j <= 2 * i - 1; j++) {
    text1 = text1 + j;
  }
  console.log(text1);
}

// Q19. Print numbers from 5 down to 1 on the same line.
console.log("----------");

let text2 = "";
for (let i = 5; i >= 1; i--) {
  text2 = text2 + i + "";
}
console.log(text2);

// Q20. Print the multiplication table of 2, from 2 to 10.
// 2
// 4
// 6
// 8
// 10
// 12

console.log("----------");

// let text3='';
for (let i = 1; i <= 10; i++) {
  console.log(i * 2);
}

// Level 3: Triangles and Mixed Patterns (Questions 21–30)
// Q21. Print a right triangle of three rows.

console.log("---------");
for (let i = 1; i <= 5; i++) {
  let text = "";
  for (let j = 1; j <= i; j++) {
    text = text + "*";
  }
  console.log(text);
}

// Q22. Print an inverted triangle of four rows.
// ****
// ***
// **
// *

console.log("---------");
for (let i = 4; i >= 1; i--) {
  let text = "";
  for (let j = 1; j <= i; j++) {
    text = text + "*";
  }
  console.log(text);
}

// Q23. Print a triangle using numbers.
// 1
// 12
// 123
// 1234

console.log("---------");
for (let i = 1; i <= 5; i++) {
  let text = "";
  for (let j = 1; j <= i; j++) {
    text = text + j;
  }
  console.log(text);
}

// Q24. Print a triangle using the letter A.
// A
// AA
// AAA
// AAAA

console.log("---------");
for (let i = 1; i <= 5; i++) {
  let text = "";
  for (let j = 1; j <= i; j++) {
    text = text + "A";
  }
  console.log(text);
}

// Q25. Print alternating stars and hashes.
// *
// #
// *
// #

console.log("-----------");

for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    console.log("#");
  } else {
    console.log("*");
  }
}

// Q26. Print stars with a space between each star.
// * * * * *

console.log("-----------");

// for (let i = 1; i <= 4; i++) {
//   let pattern = "";

//   for (let j = 1; j <= 4; j++) {
//     if (i === 1 || i === 4 || j === 1 || j === 4) {
//       pattern += "*";
//     } else {
//       pattern += " ";
//     }
//   }

//   console.log(pattern);
// }

for (let i = 1; i <= 12; i++) {
  let pattern = "";

  for (let j = 1; j <= 12; j++) {
    // if (i === 1 || i === 12 ||j===1||j===3||j===6||j===9||j===12) {
    if (i === 1 || i === 12 || j === 1 || j === 12) {
      pattern += "1" + "  ";
    } else {
      pattern += "0" + "  ";
    }
  }

  console.log(pattern);
}

console.log("--------------------------------");

for (let i = 1; i <= 12; i++) {
  let pattern = "";

  for (let j = 1; j <= 12; j++) {
    if (i === 1 || i === 12 || j === 1 || j === 12 || i === j || i + j === 13) {
      pattern += "* ";
    } else {
      pattern += "  ";
    }
  }

  console.log(pattern);
}

console.log("------------------------------------------");

for (let i = 1; i <= 12; i++) {
  let pattern = "";

  for (let j = 1; j <= 12; j++) {
    if (i === 1 || i === 12 || j === 1 || j === 12 || i === 6 || j === 6) {
      pattern += "* ";
    } else {
      pattern += "  ";
    }
  }

  console.log(pattern);
}

// Q28. Print a pyramid with three rows.
//   *
//  ***
// *****

console.log("-------------------");

for (let i = 1; i <= 5; i++) {
  let pattern = "";

  // Step 1: Print spaces
  for (let j = 1; j <= 5 - i; j++) {
    pattern += " ";
  }

  // Step 2: Print stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    pattern += "*";
  }

  console.log(pattern);
}

console.log("-------------------");

for (let i = 5; i >= 1; i--) {
  let pattern = "";

  // Step 1: Print spaces
  for (let j = 1; j <= 5 - i; j++) {
    pattern += " ";
  }

  // Step 2: Print stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    pattern += "*";
  }

  console.log(pattern);
}

// Q29. Print a diamond-like pattern.

console.log("-------------------------");

for (let i = 1; i < 10; i++) {
  let pattern = "";

  for (let j = 1; j <= 10 - i; j++) {
    pattern += " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    pattern += "*";
  }

  console.log(pattern);
}

for (let i = 9; i >= 1; i--) {
  let pattern = "";

  for (let j = 1; j <= 10 - i; j++) {
    pattern += " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    pattern += "*";
  }

  console.log(pattern);
}

console.log("---------------------------");

for (let i = 1; i <= 9; i++) {
  let pattern = "";

  for (let j = 1; j <= 9 - i; j++) {
    pattern += " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    pattern += i;
  }

  console.log(pattern);
}

console.log("------------------");

for (let i = 1; i <= 9; i++) {
  let pattern = "";

  for (let j = 1; j <= 9 - i; j++) {
    pattern += " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    if (i === 3 || i === 9 || k === 1 || k === 2 * i - 1) {
      pattern += "1";
    } else {
      pattern += " ";
    }
  }

  console.log(pattern);
}

// console.log('---------------------------------------');

// ****
// ***
// **
// *

function starPrints() {
  for (let i = 10; i >= 1; i--) {
    let text = "";
    for (let j = 1; j <= i; j++) {
      text = text + "*";
    }
    console.log(text);
  }
}
starPrints();

console.log("---------print T example ----------");

let row = 6;
let col = 3;
let middleRow = Math.ceil(row / 2);

for (let i = 1; i <= row; i++) {
  let pattern = "";

  for (let j = 1; j <= col; j++) {
    if (i === middleRow || j === col || j === 1) {
      // pattern += "*" + " ";
      pattern += '*'+"("+i + "," + j +')'+ " ";
    } else {
      pattern += "  ";
    }
  }

  console.log(pattern);
}

console.log("---------------------");

for (let i = 1; i <= 7; i++) {
  let text = "";
  for (let j = 1; j <= 7; j++) {
    text += j;
  }
  console.log(text);
}

console.log("---------------");
for (let i = 1; i <= 9; i++) {
  let text = "";
  for (let j = 9; j >= 1; j--) {
    if (i % 2 === 0) {
      text += j;
    } else {
      text += "@";
    }
  }
  console.log(text);
}

console.log("--------------");

for (let i = 1; i <= 7; i++) {
  let text = "";

  for (let j = 1; j <= i; j++) {
    text += j;
  }

  for (let k = i; k < 7; k++) {
    text += "@";
  }

  console.log(text);
}

console.log("---------------");
for (let i = 1; i <= 4; i++) {
  let text = "";
  // let vowels=['A','E','I','O','U'];
  let vowels = ["a", "e", "i", "o", "u"];

  for (let j = 0; j <= vowels.length - 1; j++) {
    text += vowels[j];
    // text += String.fromCharCode(65+j);
    // text += String.fromCharCode(97+j);
  }
  console.log(text);
}

console.log("---------Rotate the vowels------");

let vowels = ["a", "e", "i", "o", "u"];

for (let i = 0; i < vowels.length; i++) {
  let text = "";

  for (let j = 0; j < vowels.length; j++) {
    text += vowels[(i + j) % vowels.length];
  }

  console.log(text);
}

console.log("---------Rotating patterns Numbers------");

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  let text = "";

  for (let j = 0; j < numbers.length; j++) {
    text += numbers[(i + j) % numbers.length];
  }

  console.log(text);
}

// ======================================================

console.log("----------------");
// 123
// 456
// 789

console.log("----------------");

let num = 1;

for (let i = 1; i <= 3; i++) {
  let text = "";

  for (let j = 1; j <= 3; j++) {
    text += num;
    num++;
  }

  console.log(text);
}

// Method 1: Using i and j (without a separate num variable)
console.log("-----------------");

for (let i = 0; i < 3; i++) {
  let text = "";

  for (let j = 1; j <= 3; j++) {
    text += i * 3 + j;
  }

  console.log(text);
}

// Method 2: Using an array

console.log("-----------------");

let numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let index = 0;

for (let i = 1; i <= 3; i++) {
  let text = "";

  for (let j = 1; j <= 3; j++) {
    text += numberss[index];
    index++;
  }

  console.log(text);
}

// Method 3: Using while loops

console.log("-----------------");

let nums = 1;
let i = 1;

while (i <= 3) {
  let text = "";
  let j = 1;

  while (j <= 3) {
    text += nums;
    nums++;
    j++;
  }

  console.log(text);
  i++;
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, +" " + j);
  }
  console.log("--------");
}
