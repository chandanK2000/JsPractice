console.log("-------------js iterables example-----------");

// An Iterable is an Iterable Object
// Iterable can be iterated over with for...of loops

// Iterating
// Iterating means looping over a sequence of elements.

// Here are some examples:

// Iterating over a String
// Iterating over an Array
// Iterating over a Set
// Iterating over a Map

// =========================================

// Iterating Over a String

const name = "w3schools";

let text = "";
for (const x of name) {
  text = text + x + "\n";
}

console.log(text);

console.log("---------Iterating Over an Array---------");

// Iterating Over an Array
// You can use a for...of loop to iterate over the elements of an Array:

// Create an Array
const letters = ["a", "b", "c"];

// Iterate over the array elements
let txt = "";
for (const x of letters) {
  txt += x + "\n";
}

console.log(txt);

// =================================================

console.log("---------Iterating Over a Set-----------");

// Iterating Over a Set
// You can use a for...of loop to iterate over the elements of a Set:

// Create a Set
const letters1 = new Set(["a", "b", "c"]);

// Iterate over the set elementss
let text1 = "";
for (const x of letters) {
  text1 += x + "\n";
}

console.log(text1);

// =========================================================

console.log("----------Iterating Over a Map-----------");
// Iterating Over a Map
// You can use a for...of loop to iterate over the elements of a Map:

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

// Iterate over the map elements
let text2 = "";
for (const x of fruits) {
  text2 += x + "\n";
}

console.log(text2);

// ======================================================

