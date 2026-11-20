console.log('-----------jsiterator examples in javascript-----------');

// The Iterator Object
// An Iterator is an object that provides a standard way to access elements sequentially.

// An Iterator must adheres to the Iterator Protocol: It must have a next() method.

// The next() Method
// The next() method returns an object with two properties:

// The value property holds the next value in the iteration sequence.
// The done property returns false if there are more elements to iterate over, otherwise it returns true.

// Level 1: What is an Iterator?
// An Iterator is an object that allows us to access values one by one.

// const numbers = [10, 20, 30, 40, 50];


// Why do we need Iterators?
// Suppose you want to control how values are accessed.
// - You want the first value now.
// - You want the second value later.
// - You want to stop before reaching the last value.
// An iterator provides this control.

// example 

const numbers = [10, 20, 30, 40, 50];


const iterator = numbers[Symbol.iterator]();


console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// ===========================================================

// Level 2: What is next() in JavaScript Iterators?

// The next() method is used to request the next value from an iterator.

// Every time we call next(), the iterator moves forward and returns a result object.

// That result object contains two properties:
// 1. value – The current value.
// 2. done – Indicates whether iteration has finished.


const numbers1 = [10, 20, 30, 40];

// const iterator1 = numbers1[Symbol.iterator]();

const iterator1=numbers1[Symbol.iterator]();

console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());


const students = ["Chandan", "Mohan", "Rohan"];

const iterator2 = students[Symbol.iterator]();

console.log(iterator2.next().value);
console.log(iterator2.next().value);
console.log(iterator2.next().done);
console.log(iterator2.next());


// ======================================================

console.log('-----------------------------------------');

// Level 3 – Understanding value and done
// Whenever we call next(), JavaScript returns an object with two properties:
// 1. value – The current value returned by the iterator.
// 2. done – Tells us whether iteration has finished.


const numbers2 = [10, 20, 30,40];

const iterator3 = numbers2[Symbol.iterator]();

console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());
console.log(iterator3.next());


console.log('------------Symbol.iterator-----------------')

// ==========================================

// 1. What is Symbol.iterator?
// Symbol.iterator is a special built-in symbol in JavaScript.

// It is used to get an iterator from an iterable object.

// In simple words:

// Symbol.iterator helps us get an iterator from an array, string, Set, Map, etc.



const numbers3 = [10, 20, 30];

const iterator4 = numbers3[Symbol.iterator]();

console.log(iterator4.next());
console.log(iterator4.next());
console.log(iterator4.next());


// . Check Symbol.iterator
// We can check whether an object has this method:

const numbers5 = [10, 20, 30];

console.log(typeof numbers5[Symbol.iterator]);

// ==========================================

console.log('--------------string iterator------------');

// 1. What is a String Iterator?
// Just like arrays, strings are also iterable in JavaScript.

// We can access each character one by one using Symbol.iterator.

// Example:
const names = "Chandan";

const iterator5 = names[Symbol.iterator]();

console.log(iterator5.next());
console.log(iterator5.next());
console.log(iterator5.next());
console.log(iterator5.next());
console.log(iterator5.next());
console.log(iterator5.next());
console.log(iterator5.next());
console.log(iterator5.next());
