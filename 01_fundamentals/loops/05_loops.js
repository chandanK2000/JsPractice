let students = [
  "sohan",
  "mohan",
  "rohan",
  "anil",
  "anwar",
  "anjalikumari",
  "chandankuamrYadav",
  "chanddu",
  "chandani",
  "chandraika",
  "sohan",
  "mohan",
  "rohan",
];

console.log(students.length);

// Question 1 — Print only the names

for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
  // console.log(i+'->'+" "+students[i]+'('+students[i].length+')');
}

// Question 2 — Print names with their index

for (let i = 0; i < students.length; i++) {
  // console.log(i+' ->'+' '+students[i]);
  console.log(`${i} -> ${students[i]}`);
}

// Question 3 — Print names with more than 5 characters

for (let i = 0; i < students.length; i++) {
  if (students[i].length >= 5) {
    console.log(students[i]);
  }
}

// Question 4 — Count short names

let count = 0;
for (let i = 0; i < students.length; i++) {
  if (students[i].length >= 4) {
    count++;
  }
}

console.log(`The count of short Names = ${count}`);

// Question 5 — Find the longest student name

let longestName = students[0];

for (let i = 0; i < students.length; i++) {
  if (students[i].length > longestName.length) {
    longestName = students[i];
  }
}

console.log("longestName :-> ", longestName);
console.log("longestName Length", longestName.length);

// Question 6: Find the shortest student name.

let shortestName = students[0];

for (let i = 0; i < students.length; i++) {
  if (students[i].length < shortestName.length) {
    shortestName = students[i];
  }
}

console.log("shortestName :-> ", shortestName);
console.log("shortestName Length", shortestName.length);

// Question 7 — Count names starting with "a"

let counter = 0;

for (let i = 0; i < students.length; i++) {
  // if(students[i].startsWith("a")){
  //   counter++;
  // }

  if (students[i][0] === "c") {
    counter++;
  }
}

//  if (students[i][students[i].length - 1] === "c")

console.log(counter);

// Question 8 — Count names ending with "n"

let counters = 0;

for (let i = 0; i < students.length; i++) {
  if (students[i].endsWith("n")) {
    counters++;
  }
}

console.log(counters);

// with include sir

// let counters=0

// for(let i=0;i<students.length;i++){
//   if(students[i].includes("n")){
//     counters++;
//   }
// }

// console.log(counters)

// Question 9 — Count names containing the letter "o"

let letterOcount = 0;

for (let i = 0; i < students.length; i++) {
  if (students[i].indexOf("o") !== -1) {
    letterOcount++;
  }
}

console.log("Names containing o:", letterOcount);

// Question 10 — Count names with an even number of characters

let evenCount = 0;

for (let i = 0; i < students.length; i++) {
  if (students[i].length % 2 === 0) {
    evenCount++;
  }
}

console.log("Names with even length:", evenCount);

// Question 11 — Print names at even indexes.

console.log("-----Print names at even indexes------");

for (let i = 0; i < students.length; i++) {
  if (i % 2 === 0) {
    console.log(students[i]);
  }
}

// Question 11 — Print names at odd indexes.

console.log("-----Print names at odd indexes------");

for (let i = 0; i < students.length; i++) {
  if (i % 2 != 0) {
    console.log(students[i]);
  }
}

// reverse order name print
console.log("-----reverse names at  indexes------");

for (let i = students.length - 1; i >= 0; i--) {
  console.log(students[i]);
}

// Question 12 — Find duplicate names

let employees = [
  "sohan",
  "mohan",
  "rohan",
  "anil",
  "anwar",
  "anjali",
  "anmaika",
  "rahim",
  "danish",
  "sohan",
  "rahim",
  "mohan",
  "mohan",
];

// console.log("Duplicate names:");

// for(i=0; i<employees.length;i++){

//   for(j=i+1;j<employees.length;j++){
//     if(employees[i]===employees[j]){
//       console.log(employees[i]);
//       break;
//     }
//   }
// }


console.log("Employee name frequencies:");

for (let i = 0; i < employees.length; i++) {

    let alreadyChecked = false;

    // Step 1: Check whether this name appeared earlier
    for (let k = 0; k < i; k++) {
        if (employees[i] === employees[k]) {
            alreadyChecked = true;
            break;
        }
    }

    // Step 2: Count only the first occurrence of each name
    if (alreadyChecked === false) {

        let count = 0;

        for (let j = 0; j < employees.length; j++) {
            if (employees[i] === employees[j]) {
                count++;
            }
        }

        console.log(employees[i] + " - " + count + " times");
    }
}



// Question 13 — Find the second-longest employee name




