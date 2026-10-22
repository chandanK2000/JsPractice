// let a=10;
// let b=20;

// console.log(a+b);

// let x = 123e6;
// let y = 123e-5;

// console.log(x);
// console.log(y);

// let x = 0.2 + 0.1;

// let result = Number(x.toFixed(1));

// console.log(result);        // 0.3
// console.log(typeof result); // "number"
// console.log(x.toFixed(1));

// console.log("----practice----");

// let y=0.7 + 0.1

// console.log(0.1 + 0.2);
// console.log(0.1 + 0.3);
// console.log(y.toFixed(1));
// console.log(0.1 + 0.1);

// let a="10";
let a = "10";
// let b="20"
let b = 20;

console.log(a + b);

let mynumbers = 32;

console.log(mynumbers.toString(16));

let number = 12345;

console.log(number.toExponential());
console.log(number.toExponential(0));
console.log(number.toExponential(2));
console.log(number.toExponential(4));

let abcNum = 8484684.99;

// console.log(abcNum.toFixed(0));
console.log(abcNum.toFixed(0));
console.log(abcNum.toFixed(1));
console.log(abcNum.toFixed(2));
console.log(abcNum.toFixed(3));
console.log(abcNum.toFixed(4));

// console.log(Math.pow(3, 5));

function sayHello(name) {
  return name;
}

let message = sayHello("hello india i am chandan kumar kdjflsdj");

console.log(message);

function multiply(a, b) {
  return a * b;
}

let mul = multiply(10, 12);
console.log(mul);

function findmax() {
  console.log(arguments.length);
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
console.log(findmax(4, 5, 6, 10, 20, 40));

function showArrayList(arrayList) {
  for (let i = 0; i < arrayList.length; i++) {
    console.log(arrayList[i]);
  }
}

showArrayList(["chandan", "mohan", "chanchal", "rani", "anamika", "Hari"]);


function sumAll() {
  console.log(arguments.length);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  
      sum =sum+arguments[i];
   
  }
  return sum;
}
// console.log(sumAll(4, 5, 6, 10, 20, 40));

document.getElementById('totalsum').innerHTML=`The total sum is ${sumAll(4, 5, 6, 10, 20, 40,10,7)}`;


function multiply(a, b) {
  return a * b;
}

let abcd=multiply(4,6);
console.log(abcd);


function sum(...args) {

  console.log("Arguments length:", args.length);
  


  let sum = 0;
  for (let arg of args) 
  sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77,3);

console.log(x);


const substrct=function(a,b){
    return a-b;
}

console.log(substrct(10,5));

const Hello=()=>{
    return "hello world";
}


console.log(Hello());