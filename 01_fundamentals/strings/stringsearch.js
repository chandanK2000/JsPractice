
console.log("-----------indexof() example in js-------");
// What is indexOf() in JavaScript?

let text = "Hello";

console.log(text.indexOf("H"));
console.log(text.indexOf("e"));
console.log(text.indexOf("o"));
console.log(text.indexOf("l"));

let text1 = "I love JavaScript";

console.log(text1.indexOf("JavaScript"));

console.log("banana".indexOf("a"));

console.log("Hello".indexOf("z"));


let text2 = "I love JavaScript";

if (text2.indexOf("JavaScript") !== -1) {
    console.log("Word found");
} else {
    console.log("Word not found");
}


console.log("banana".indexOf("a", 2));


console.log("Hello".indexOf("h"));
console.log("Hello".indexOf("H"));

console.log("banana".indexOf("a", 4));

console.log("banana".indexOf("b", 1));

console.log("-----------last index of example in javascript ---------");


let text4 = "banana";

console.log(text4.indexOf("a"));
console.log(text4.lastIndexOf("a"));