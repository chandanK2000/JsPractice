console.log("----scopes example in javascript-----------");

// 1. What is scope in JavaScript? Write a simple example.

// Scope in JavaScript is the area of a program where a variable or function can be accessed

// example

let name = "chandan";

function greet() {
  let messege = "Hello";

  console.log(name);
  console.log(messege);
}

greet();
console.log(name);

// =========================================================

// 2. Declare a global variable name and access it inside a function.

console.log(
  "--- Declare a global variable name and access it inside a function-----",
);

let myname = "chandan kumar yadav";

function displayNmae() {
  console.log(myname);
}

displayNmae();

// ===========================================================

// 3. Create a function with a local variable age. Try accessing it outside the function.

console.log(
  "---Create a function with a local variable age. Try accessing it outside the function.---",
);

function myage() {
  let age = 29;

  return age;
}

console.log(myage()); //29
// console.log(age); // age is not defined reference error

// ==================================================================

// 4. Declare let city = "Delhi" globally and print it inside a function.
console.log(
  '--Declare let city = "Delhi" globally and print it inside a function---',
);

let city = "Delhi";

function DisplayCity() {
  console.log(city);
}

DisplayCity(); //Delhi

// ====================================================

// Create a function with var message = "Hello". Print it inside the function.

console.log(
  '---Create a function with var message = "Hello". Print it inside the function--',
);

var message = "Hello";

const Mygreet = () => {
  console.log(message);
};

Mygreet(); //Hello

// ================================================================

// 6. Create a function with let message = "Hello". Print it inside the function.

console.log(
  '--Create a function with let message = "Hello". Print it inside the function--',
);

let messages = "Hello";

let Hello = function () {
  console.log(messages);
};

Hello();

// ==================================================

// 7. Create a function with const message = "Hello". Print it inside the function.

console.log(
  '---Create a function with const message = "Hello". Print it inside the function.--',
);

const Messagess = "Hello";

function MyMessagess() {
  console.log(Messagess);
}

MyMessagess();

// ================================================================
// 8. Declare let x = 10 globally and let x = 20 inside a function. Print both values in their respective scopes.

console.log(
  "--Declare let x = 10 globally and let x = 20 inside a function. Print both values in their respective scopes.--",
);

let x = 10;

function Results() {
  let x = 20;
  console.log(x);
}

Results(); // prints 20 inside
console.log(x); // this is gloabl varialbes x print 10

// =======================================================================

// 9. Predict the output: let y = 10; function test() { let y = 20; console.log(y); } test(); console.log(y);

console.log(
  "--Predict the output: let y = 10; function test() { let y = 20; console.log(y); } test(); console.log(y)--",
);

let y = 10;
function test() {
  let y = 20;
  console.log(y);
}
test(); //20
console.log(y); //10

// =========================================================================

// 10. Create a global variable count = 100. Write a function that declares a local variable count = 50.

console.log(
  "--Create a global variable count = 100. Write a function that declares a local variable count = 50-",
);

let count = 100;

function LocalVariables() {
  let count = 50;
  console.log("Local count:", count);
}

LocalVariables();

console.log("Global count:", count);

// ==============================================

// 11. What happens when you access a local variable outside its function?
console.log(
  "--- What happens when you access a local variable outside its function?---",
);

// here i am giving one example sir

function abc() {
  let z = 200;
  console.log(`Local variables values is this ${z}`);
}

abc();

// console.log(z); //throw error reference error z is not defined

// A local variable declared inside a function cannot be accessed directly outside that function.

// =========================================================
// 12. Declare a variable using var inside an if block. Can you access it outside the block?

console.log(
  "--Declare a variable using var inside an if block. Can you access it outside the block--",
);

console.log("--- var inside an if block ---");

if (true) {
  var age = 29;
  console.log("Inside if block:", age);
}

console.log("Outside if block:", age); // yes

// If var is declared inside a function, you can access it anywhere inside that same function, but not directly outside the function.

// ==================================================
// 13. Repeat Question 12 using let. What happens?

console.log("--- let inside an if block ---");

// if(true){
//     let ages=30;
//     console.log("Inside if block:", ages);

// }

// console.log("Outside if block:", ages);  //reference error ages is not defined because let is blocked scoped

// ==================================================
// 14. Repeat Question 12 using const. What happens?

console.log("--- const inside an if block ---");

if (true) {
  const myage = 30;
  console.log("Inside if block:", myage);
}

console.log("Outside if block:", myage); //reference error myage is not defined because const is blocked scoped

// =================================================
// 15. Create a for loop using var i. Print i after the loop.

console.log("--- Create a for loop using var i. Print i after the loop---");

var i = 1;
for (i; i < 5; i++) {
  console.log(i);
}
// 1
// 2
// 3
// 4

console.log(i); //5 because i every time updating and last checked loop and increase then 5 print

// =================================================
// 16. Repeat Question 15 using let i. Print i after the loop.

console.log("--- Create a for loop using let i. Print i after the loop---");

// let j = 1;
// for (j; j < 5; j++) {
//   console.log(j);
// }
// // 1
// // 2
// // 3
// // 4

// console.log(j); //5 because j every time updating and last checked loop and increase then 5 print

for (let j = 1; j < 5; j++) {
  console.log(j);
}

// console.log(j);  reference error j is not defined

// 1
// 2
// 3
// 4
// 5  reference error becasue here j is inside the for so it is blocked scoped 

// ====================================================

// 17. Create a block using { } and declare let score = 90 inside it. Try accessing score outside.

{
    let score=90;
}

// console.log(score) // reference error score is not defined because let and const are blocked scoped right ?

// =========================================================

// 18. Create a block using { } and declare var score = 90 inside it. Try accessing score outside.

{
    var scores=90;
}

console.log(scores); // dispaly scores 90 becasue var  not-blocked scoped

// ==============================================================

// 19. Demonstrate the difference between function scope and block scope.

// the variables used inside the function that is function scope and the variables used inside block that is blcoked scope setInterval

// we will undersatnd with one example  sir Headers

// function mylife(){
//     let mynamess="My name is madhav";
//     retun mynamess;
// }

// console.log(mynamess())// not print because weare try ing to print outside of the function and here mynamess is fucntion scope variables

// exampel of blocked scope

// {
//     let w=40;
// }

// console.log(w) // not print reference error w is not defined sir 

// =========================================================

// 20. Write a program demonstrating global scope, function scope, and block scope together.

let mystate="Bihar";

{
    let mystate="karnataka";
    let fatherName='udho Prasad Yadav';
    console.log(mystate) //karnataka
}
console.log(mystate); // 
console.log(fatherName); // reference erro fatherName is not defined because this is blocked scope

function Mydetails(){
    let mobile=6360487464;
    console.log(mobile);
}
Mydetails(); //6360487464
console.log(mystate) //Bihar

console.log(mobile) // reference error mobile is not defined sir because this is block funciton scope
