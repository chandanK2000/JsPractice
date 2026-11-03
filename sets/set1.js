console.log("-------sets concepts in javascript ----------");

// A JavaScript Set is a collection of unique values.

// Each value can only occur once in a Set.

// The values can be of any type, primitive values or objects.

// ===============================================================

// How to Create a Set
// You can create a JavaScript Set by:

// Passing an array to new Set()
// Create an empty set and use add() to add values

// create a set

const letters = new Set(["a", "b", "c", "d", "e"]);

console.log(letters);

// Create a Set
const letters1 = new Set();

// Add Values to the Set
letters1.add("a");
letters1.add("b");
letters1.add("c");
letters1.add("d");

console.log(letters1);

// If you add equal elements, only the first will be saved:

letters1.add("a");

console.log(letters1);

// Listing the Elements

let text = "";
for (const x of letters) {
  text = text + x + "\n";
}

console.log(text);

// type of return objects sir
console.log(typeof letters);

// instanceof Set returns true:

console.log(letters instanceof Set);

// ===================================================

console.log("------JavaScript Set Methods----------");

// Set Methods & Properties
// new Set()
// add()
// clear()
// delete()
// entries()
// forEach()
// has()
// keys()
// values()
// size

// 1.create a new Set();

const students = new Set([
  "chandan",
  "moahn",
  "roahn",
  "anjali",
  "anamika",
  "anawar",
  "anawar",
]);

console.log(students);

let txt = "";

for (const student of students) {
  txt += student + "\n\n";
}

console.log(txt);

// add method

console.log("------------add method-----------");

students.add("rahim");

console.log(students);

// size property

console.log("---------------The size Property----------");

const mySize = new Set(["a", "b", "c", "d"]);

console.log(`The Size of given set is ${mySize.size}`); //4

// ====================================
// The has() Method

console.log("------------The has() Method--------------");

// Create a Set
const letters2 = new Set(["a", "b", "c"]);

// Does the Set contain "d"?
answer = letters2.has("d");
answer1 = letters2.has("c");
console.log(answer);
console.log(answer1);

// =======================================
// The forEach() Method

// The forEach() method invokes a function for each Set element:

console.log("----------The forEach() Method-----------");

// Create a Set
const letters3 = new Set(["a", "b", "c"]);

// List all entries
let text1 = "";
letters.forEach(function (value) {
  text1 += value;
});

console.log(text1);

// The values() Method
// The values() method returns an Iterator object with the values in a Set:

console.log("-----------values method----------");

const letters4 = new Set(["a", "b", "c", "d", "e", "f"]);

console.log(letters4);

// get all values

const myIterator = letters4.values();

console.log(myIterator);

// List all Values
let texts = "";
for (const entry of myIterator) {
  texts += entry + "\n";
}

console.log(texts);

// =======================================================

// The keys() Method
// The keys() method returns an Iterator object with the values in a Set:

console.log("-----------The keys() Method-----------");

// Create a Set
const letters5 = new Set(["a", "b", "c"]);

// Create an Iterator
const myIterator1 = letters5.keys();

console.log(myIterator);

// List all Elements
let text2 = "";
for (const x of myIterator1) {
  text2 += x + "\n";
}

console.log(text2);

// The entries() Method
// The entries() method returns an Iterator with [value,value] pairs from a Set.

// The entries() method is supposed to return a [key,value] pair from an object.

// A Set has no keys, so the entries() method returns [value,value].

// This makes Sets compatible with Maps.

console.log("---------The entries() Method----------");

// Create a Set
const letters6 = new Set(["a", "b", "c"]);

// Get all Entries
const myIterator2 = letters6.entries();

console.log(myIterator2)

// List all Entries
let text3 = "";
for (const entry of myIterator2) {
  text3 += entry;
}

console.log(text3);


// =====================================
// Logic Set Methods

console.log('-------------Logic Set Methods----------');

// union()
// difference()
// intersection()
// isDisjointFrom()
// isSubsetOf()
// isSupersetOf()
// symmetricDifference()

// The union() Method
// The union() method returns the union of two sets.

// The union() method returns a new set containing the elements which are in this set, or in the argument set, or in both:

const A = new Set(['a','b','c']);
const B = new Set(['b','c','d']);

const C = A.union(B);

console.log(C);