"use strict";
console.log("----------scope example in javascript-----------");

// Topic 1: What is Scope in JavaScript?
// Definition: Scope in JavaScript determines where a variable or function can be accessed in a program.

// In simple words, sir, scope tells us where we can use a variable.

// Global variables has Global Scope:

// All scripts and functions in the same web page can access a variable with global scope.

// Example 1: Global Scope

// let name = "Chandan";

// function greet() {
//   console.log(name);
// }

// greet();
// console.log(name);

// Function Scope
// All JavaScript functions have their own scope.

// Variables defined inside a function are not accessible (visible) from outside the function.

// Variables declared with var, let and const are quite similar when declared inside a function.

// They all have Function Scope:

function myFunction1() {
  var carName = "Volvo"; // Function Scope
}

function myFunction2() {
  let carName = "Volvo"; // Function Scope
}

function myFunction3() {
  const carName = "Volvo"; // Function Scope
}
// Example
// Variables declared within a JavaScript function, are LOCAL to the function:

// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// // code here can NOT use carName
// Local Variables have Function Scope
// They can only be accessed from within the function
// No scripts or functions outside the function can access them
// Variables with the same name can be used outside the function
// Variables with the same name can be used in different functions
// Local variables are created when a function starts
// Local variables are deleted when the function is completed
// Arguments (parameters) work as local variables inside functions

// hoisting exaple

// 1. What is hoisting?
// Definition for your notebook: Hoisting is JavaScript's behavior of processing variable and function declarations before executing the code in their respective scope.

// console.log(a);

// var a=10;

// console.log(a)

// Conceptual model only, not literal code rewriting
// var a; // initialized as undefined

// console.log(a);

// a = 10;

// console.log(a);

// 3. What happens with let and const?

// console.log(a)

// let a=20;

let a = 20;
console.log(a);

// Example A: Function declaration
// greet();

// function greet() {
//   console.log("Hello Chandan");
// }

console.log("-----------------");
// Example B: Function expression using var
// greet();

// var greet = function () {
//   console.log("Hello Chandan");
// };

// Example C: Function expression using let
// greet();

// let greet = function () {
//   console.log("Hello Chandan");
// };

// 1. What is Closure?
// Definition for your notebook:

// A closure is a feature in JavaScript where an inner function remembers and can access variables from its outer function, even after the outer function has finished executing.

console.log("-----closure example in javascript------");
function outer() {
  let name = "chandan kumar yadav";

  function inner() {
    console.log(name);
  }
  return inner;
}

let result = outer();

result();


// 3. How does it work?
// 1

// outer() executes

// The variable name is created with the value "Chandan".
// 2

// return inner
// The outer function returns the inner function itself. It does not execute inner yet.
// 3

// result() executes
// The inner function can still access the name variable from its outer scope and prints "Chandan".

// 4. Why is this called a closure?
// Sir, normally, after outer() finishes, its execution is complete. But the returned inner function retains access to the variable name from the outer function's scope.

// That retained access is called a closure.


// one more example below

function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

let results = counter();

results();
results();
results();