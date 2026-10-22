const str = "Hello chandan how are you";
console.log(str.length);

const answer1 = "it's alrgight";
const answer2 = "He is called 'johney'";
const answer3 = 'he is called "ram"';
console.log(answer1);
console.log(answer2);
console.log(answer3);

console.log("-----------escape characters------");

console.log("Hello\bWorld");
console.log("Hello\fWorld");
console.log("Hello\nWorld");
console.log("Hello\rWorld");
console.log("Hello\tchandan\ tramasdsa");
console.log("Hello\vWorld");

console.log("--------basic string method example -------");

function passwordCheck(password) {

//   let password = "chandan@123";
  let message;

  if (password.length >= 8) {
    // console.log('password length is valied')
    message = "password length is valid";
  } else {
    // console.log('password length is too short')
    message = "password length is too short";
  }

  return message;
}

console.log(passwordCheck("chandan@123"));
console.log(passwordCheck("chandan"));

// Lesson 2: charAt()

let names="chandan";

console.log(names.charAt(0));
console.log(names.charAt(2));
console.log(names.charAt(4));

console.log('---get first letter----');


function getFirstLetter(name) {
    return name.charAt(0);
    
}

console.log(getFirstLetter("Chandan"));
console.log(getFirstLetter("Rahul"));
console.log(getFirstLetter("Anjali"));

// : Check the first character of a phone number


function checkPhoneNumber(phone) {
    if (phone.charAt(0) === "9") {
        return "Phone number starts with 9";
    } else {
        return "Phone number does not start with 9";
    }
}

console.log(checkPhoneNumber("9876543210"));
console.log(checkPhoneNumber("8123456789"));

const getfirstChar=(firstchar)=>{
    return firstchar.charAt(0);
}

console.log(getfirstChar('javascript'));

const lastchar=(lastchar)=>{
    return lastchar.charAt(lastchar.length-1);
}

console.log(lastchar('javascript'));


console.log("------charcodeat() example-------");

let name = "Chandan";

console.log(name.charAt(0));
console.log(name.charCodeAt(0));

let name1="Rahul";

console.log(name1.charCodeAt(0))


// Write a function getLastCharCode(word) that returns the last character's code. For "ABC", expected output: 67.

function getLastCharCode(word){
    return word.charCodeAt(word.length-1);

}
console.log(getLastCharCode("ABC"))


// Q3. Get the code at a given index
// Create getCharCode(word, index). For getCharCode("Hello", 1), expected output: 101.

function getCharCode(word,index){
    return word.charCodeAt(index);

}

console.log(getCharCode("Hello", 1));


// Q4. Print all character codes
// Use a for loop to print the character code of every character in "CAT".

// function printallcharcode(){
//     return 

// }



// }

console.log("print all charcode")

let word = "CAT";

for (let i = 0; i < word.length; i++) {
    console.log(word.charCodeAt(i));
}



// Q5. Create a function
// Create getFirstCharCode(name) that returns the first character's code. Test it with "Anjali" and "Mohan".


function getFirstCharCode(firstchar){
    return firstchar.charCodeAt(0);

}

console.log(getFirstCharCode("Anjali"));


console.log("---concat method in js----");

let firstname="chandan";
let lastname="kumar";
let fullname=firstname.concat(" "+lastname);
console.log(fullname);

// 2. Join multiple strings
let first = "I";
let second = "love";
let third = "JavaScript";

let result = first.concat(" ", second, " ", third);

console.log(result);


// 3. Important point: concat() does not change the original string
let a = "Hello";
let b = "World";

let results = a.concat(" ", b);

console.log(results);
console.log(a);

console.log("----at() method in js---");

// 2. Basic example
let name5 = "Chandank";

console.log(name5.at(0));
console.log(name5.at(1));
console.log(name5.at(3));
console.log(name5.at(-1));


console.log("------string[index]?----")

let name6 = "Chandan";

console.log(name6[0]);

// 2. Access the last character
// With square brackets, you need to calculate the last index using length - 1.

console.log(name6[name6.length - 1]);
console.log(name6[name6.length - 2]);
console.log('---difference----');
console.log(name6.charAt(20));
console.log(name6.charAt(-3));
console.log(name6.at(-2));
console.log(name6.at(-2));

let word1= "Hello";

word1[7] = "Y";

console.log(word1);

console.log("javascript"[0]);

console.log("----slice example in javascript---")

// 1. What is slice()?
// In simple Hindi, sir: maan lijiye aapke paas "JavaScript" hai, aur aapko sirf "Java" chahiye. You can use slice() to extract those characters.


let subjects="javaScript";

console.log(subjects.slice(0,4));

// 3. More basic examples
// Example 1 — Extract "Script"

let word2 = "JavaScript";
console.log(word2.slice(4, 10));
console.log(word2.slice(4, 7));


// Example 4 — Extract from the middle
let name7 = "Chandan kumar";
console.log(name7.slice(2, 5));

// 4. The most important feature — Negative indexes
// Sir, slice() also supports negative indexes. Negative indexes count from the end of the string.
let name8 = "Chandan";

console.log(name8.slice(-1));
console.log(name8.slice(-3));
console.log(name8.slice(-4, -1));


// 5. What happens if the end index is smaller than the start index?
console.log("if end index is smaller than the start then output will be empty")

let word4 = "JavaScript";

console.log(word4.slice(5, 8));
console.log(word4.slice(5, 2));

console.log("----substring method in javascript---");


// 1. What is substring() in JavaScript?
// substring() ek JavaScript string method hai jo string ke andar se ek particular part extract karta hai.

// 2. Basic example
// Example 1 — Extract "Java"

let language = "JavaScript";
console.log(language.substring(0, 4));
console.log(language.slice(0, 4));


// Example 2 — Only start index
let word5 = "JavaScript";
console.log(word5.substring(4));


// 1. What is toUpperCase()?

console.log("----uppercase() example in javascript---------");

let abc="chadnan kumar";

console.log(abc.toUpperCase())

let message = "hello sir how are you";
console.log(message.toUpperCase());

console.log(message)


// 4. Practical use — checking usernames or input
// Suppose a user enters a country code in different letter cases:

let country = "india";

if (country.toUpperCase() === "INDIA") {
    console.log("Country matched!");
}


// 1. What is isWellFormed()?
// In simple English, isWellFormed() checks whether a JavaScript string is well-formed Unicode.
// Hindi mein, sir: ye check karta hai ki string ke Unicode characters ka encoding structure valid hai ya nahi.

console.log('------isWellFormed in javascript----');

console.log("Hello Sir".isWellFormed());

console.log("Hello 😄".isWellFormed());

console.log("Hello \uD800".isWellFormed());

console.log("Hello Sir".toWellFormed());

console.log("\uD800".toWellFormed());

console.log("Hello \uD800 World".toWellFormed());

console.log("Hello 😄".toWellFormed());

let text = "\uD800";

console.log(text.toWellFormed());
console.log(text);

// 1. What is trim() in JavaScript?
// The trim() method removes whitespace from the beginning and end of a string.
// Hindi mein, sir: agar kisi string ke starting ya ending mein extra spaces hain, to trim() unhe remove kar deta hai. Lekin string ke beech mein jo spaces hain, unhe remove nahi karta.

console.log("----trim() in javascript-----");

let name9 = "   Chandan   ";

console.log(name9);
console.log(name9.length);

const afterTrimName9=name9.trim();
console.log(afterTrimName9.length);


let text3 = "5";

console.log(text3.padStart(6, "0"));


console.log("5".padStart(5, "ab"));

console.log("Hi".padStart(5));

console.log("Hello".padStart(3, "*"));
console.log("Hello".padStart(5, "*"));
console.log("Hello".padStart(7, "*"));

let number = "25";

console.log(number.padStart(4, "0"));
console.log(number);

let invoiceNumber = "42";

let formattedNumber = invoiceNumber.padStart(6, "*");

console.log(formattedNumber);


console.log("".padStart(3, "x"));

let word10="Hello Chandan";

let resultss=word10.repeat(10)
console.log(resultss)

console.log('*'.repeat(10));

console.log("Hi".repeat(0));

console.log("Hi".repeat(1));

// console.log("Hi".repeat(-2));// it will throw the range error sir 

console.log("Hi".repeat(5.8));

let name11 = "Ram";

console.log(name11.repeat(3));
console.log(name11);

console.log("ha".repeat(3) + "!");

let line="-";

console.log(line.repeat(20)+"dashed");

console.log("ABC".repeat(2) + "XYZ".repeat(2));

let jscount="javascript";
console.log(jscount.repeat(2));

let messages = "Hello World";

console.log(messages.replace("World", "Sir"));

let phone = "123-456-789";

console.log(phone.replace("-", "/"));

let text12 = "apple apple apple";

// console.log(text12.replaceAll("apple", "mango"));
console.log(text12.replace(/apple/g, "mango"));

console.log("---------js split() example -------")

let sentence = "I love JavaScript";

console.log(sentence.split(" "));

let splitSentence=sentence.split(" ");
console.log(splitSentence.length)
console.log(sentence)

let fruits = "apple,banana,mango";

console.log(fruits.split(","));

let word13= "HELLO";

console.log(word13.split(""));

let date = "2026-10-15";

console.log(date.split("-"));

console.log("Hello".split(","));

let fruits1 = "apple,banana,mango,orange";

console.log(fruits1.split(",", 2));

console.log("Hello World".split());

let myname="chandan yadav";

console.log(myname.split(" "));

let splittedName=myname.split(" ");

console.log(splittedName.join(","))

