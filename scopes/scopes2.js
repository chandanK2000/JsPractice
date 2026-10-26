console.log("---scopes2 level 2 Q.21-40 covered Here---");

// Definition for your notebook:

// Lexical scope in JavaScript means that a function can access variables based on where the function is written or defined in the code.

// In simple words, sir, a function can access variables from its outer scope where it was created.

// Example

let name = "Chandan";

function outer() {
  let city = "Bihar";

  function inner() {
    console.log(name);
    console.log(city);
  }

  inner();
}

outer();

// =================================================================

// 22. Create an outer function containing a variable name and an inner function that prints it.

function myouter() {
  let myname = "chandu";

  function myinner() {
    console.log(myname);
  }
  myinner();
}

myouter();

// =================================================

// 23. Can an inner function access a variable declared in its outer function? Demonstrate.

function mycountry() {
  let mycountryname = "India";

  function mystate() {
    console.log(mycountryname);
  }
  mystate();
}

mycountry(); // India yes inner fucntion access a variables declared in its outer function sir

// =============================================================

// 24. Can an outer function access a variable declared only inside its inner function? Test it.
console.log("-------------");

function outerfunciton() {
  // console.log(mymother);

  const innerfunction = () => {
    let mymother = "Rajani";
  };
  innerfunction();
}

outerfunciton();
// An outer function cannot directly access a variable declared only
// inside its inner function because that variable belongs to the inner function's scope.

function outer() {
  let x = 10;

  function inner() {
    let y = 20;
    console.log(x);
  }

  inner();
  //   console.log(y);
}

outer();

// ======================================================

// 25. Create three nested functions and access a variable from the outermost function.
function outermost() {
  let employeeName = "Richa darling";

  function middle() {
    function inner() {
      function deepest() {
        console.log(employeeName);
      }

      deepest();
    }

    inner();
  }

  middle();
}

outermost();

// =======================================================

// 26. Predict the output:

let x = 5;
function outer() {
  let x = 10;
  function inner() {
    console.log(x);
  }
  inner();
}
outer(); // 10

// Question 27
// Sir, predict the output:

console.log("-------------------------");

let xy = 5;

function outer() {
  let xy = 10;

  function inner() {
    let xy = 20;
    console.log(xy);
  }

  inner();
  console.log(xy);
}

outer();
console.log(xy); //20,10,5

// ===============================================================

// Question 28
// Predict the output:

console.log("---------------------------------");

// let names = "Chandan";

// function outer() {
//   let names = "Madhav";

//   function inner() {
//     console.log(names);
//   }

//   return inner;
// }

// let result12 = outer();

// result12();

// ======================================================

console.log("---------------------");

// let name1 = "Chandan";

// function outer() {
//   let name1 = "Madhav";

//   function inner() {
//     console.log(name1);
//   }

//   return inner;
// }

// let results31 = outer();

// name1 = "Rahul";

// results31(); //madhav

// ===========================================

console.log("-------------------------");

// Question 27: Print the global x

let abc = 5;
let globalX = abc; // Initialize globalX first

function outers() {
  let abc = 10;

  function inner() {
    console.log(globalX);
  }

  inner();
}

outers();

// =======================================================================

// Question 28: Same variable name in global, outer, and inner scopes

let name2 = "Global";

function outer1() {
  let name2 = "Outer";

  function inner() {
    let name2 = "Inner";

    console.log(name2); // Inner
  }

  inner();

  console.log(name2); // Outer
}

outer1();

console.log(name2); // Global

// ====================================================

// Question 29: What is variable shadowing? Demonstrate using let.

// 1. Definition
// Variable shadowing occurs when a variable declared in an inner scope has the same name as a variable declared in an outer scope. Inside the inner scope, the inner variable takes precedence over the outer variable.

// Sir, in simple words: same variable name, different scopes, and the nearest variable is used.

// 2. Example using let
// Question 29: Variable Shadowing

console.log("-----------------------------------------");

let name3 = "Global";

function outer() {
  let name3 = "Outers";

  console.log(name3);
  console.log("---");

  function inner() {
    let name3 = "Inner";

    console.log(name3);
  }

  inner();

  console.log(name3);
}

outer();

console.log(name3);

// Expected output
// Outer
// Inner
// Outer
// Global

// =========================================================

// 30. Demonstrate variable shadowing using var inside a function.

console.log("----------------------");

// 2. Example using var
// Question 30: Variable Shadowing using var

var name14 = "Global";

function outer() {
  var name14 = "Outer";

  console.log(name14);
}

outer();

console.log(name14);

// Expected output
// Outer
// Global

// ============================================================
console.log("---------------------------------------------");

// 31. Predict the output:
let a = 10;
{
  let a = 20;
  console.log(a);
}
console.log(a);

// expected output:
// 20
// 10

// ===============================================================
console.log("-------------------kjh--------------------");

// 32. Predict the output:
var abcde = 10;
{
  var abcde = 20;
}
console.log(abcde);

// expected output:
// 20 because var abcde is not block scope so the value of the variables is changed here sir inside blcok scope

// ====================================================
// 33. Create an arrow function that accesses a variable from its surrounding scope.

console.log("------------------------------------------");

let myarrowvalues = 30;
const myarrow = () => {
  console.log(myarrowvalues);
};

myarrow();
console.log(myarrowvalues);

// expected output:
// 30
// 30

// ==============================================================================

// Question 34: Can a regular function access a variable declared in its caller's local scope?
// Answer: No, sir. A regular function cannot directly access a variable declared only inside the local scope of the function that calls it.

// This is because JavaScript follows lexical scope: a function looks for variables based on where it was defined, not where it was called.
// 1. Example using two separate functions
// // Question 34: Caller scope vs lexical scope

// function firstFunction() {
//   let myName = "Chandan";

//   secondFunction();
// }

// function secondFunction() {
//   console.log(myName);
// }

// firstFunction();

// Expected output
// ReferenceError: myName is not defined

// ==========================================================

// Question 35: Read a global variable without modifying it

let myCity = "Bengaluru";

function displayCity() {
  console.log(myCity);
}

displayCity();

console.log(myCity);

// =================================================
// 36. Write a function that modifies a global variable. Show the value before and after calling it.

let mySalary = 30000;

function updateSalary() {
  mySalary = 40000;
}

console.log("Before calling function:", mySalary);

updateSalary();

console.log("After calling function:", mySalary);

// 2. Expected output
// Before calling function: 30000
// After calling function: 40000

// =============================================================

// 37. Create a block-scoped variable inside an if statement and use it inside a nested block.

console.log("-------------------------------------------");

if (true) {
  let myName = "Chandan";

  console.log("Inside if:", myName);

  {
    console.log("Inside nested block:", myName);
  }
}

// 2. Expected output
// Inside if: Chandan
// Inside nested block: Chandan

// ==============================================================

// 38. Predict the output:
// let value = 1;
// function test() {
//   console.log(value);
//   let value = 2;
// }
// test();

// Expected Results:
// ReferenceError: Cannot access 'value' before initialization


// ==========================================================

// 39. Explain why lexical scope depends on where a function is defined rather than where it is called.

console.log('--------------------------------------------');
// 1. Definition
// Lexical scope means JavaScript determines which variables a function can access based on where that function is defined in the source code, not where the function is called.

// In simple words, sir: Where the function is created determines which surrounding variables it can access.
// 2. Example
// Question 39: Lexical Scope

// let name5 = "Global";

// function firstFunction() {
//   let name5 = "First Function";

//   function displayname5() {
//     console.log(name5);
//   }

//   return displayName;
// }

// function secondFunction() {
//   let name5 = "Second Function";

//   let result = firstFunction();
//   result();
// }

// secondFunction();


// Expected output
// First Function

// ======================================================

console.log('-------------------------------------');

// Question 40: Write a program demonstrating lexical scope and variable shadowing together.
// 1. Program
// // Question 40: Lexical Scope + Variable Shadowing

let name6 = "Global";

function outer() {
  let name6 = "Outer";

  function inner() {
    let name6 = "Inner";

    console.log("Inside inner:", name6);
  }

  inner();

  console.log("Inside outer:", name6);
}

outer();

console.log("Global scope:", name6);


// 2. Expected output
// Inside inner: Inner
// Inside outer: Outer
// Global scope: Global