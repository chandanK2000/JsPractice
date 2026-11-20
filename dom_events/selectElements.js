console.log("-----------------dom events in javascript-----------");

// Selecting HTML Elements
// Method	Description
// document.getElementById(id)	Find an element by element id
// document.getElementsByTagName(name)	Find elements by tag name
// document.getElementsByClassName(name)	Find elements by class name
// document.querySelector(selector)	Find the first element that matches a CSS selector
// document.querySelectorAll(selector)	Find all elements that match a CSS selector

const heading = document.getElementById("heading");

console.log(heading);
// console.log(heading.innerText);

heading.innerText = "Welcome to JavaScript";

// ===========================================================

// 2. document.getElementsByTagName()

// Selects HTML elements using their tag name.

// For example: p, h1, div, button, li, etc.

const headingPara = document.getElementsByTagName("h2");

console.log(headingPara[0].innerText);

const paragraphs = document.getElementsByTagName("p");

console.log(paragraphs);
console.log(paragraphs[0].innerText);
console.log(paragraphs[1].innerText);
console.log(paragraphs[2].innerText);

// Using style property

// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].style.color = 'red';
//     paragraphs[i].style.backgroundColor = 'yellow';
//     paragraphs[i].style.fontSize = '20px';
//     paragraphs[i].style.fontWeight = 'bold';
//     paragraphs[i].style.padding = '10px';
//     paragraphs[i].style.border = '2px solid black';
// }

// 2. Using cssText (multiple styles together)

// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].style.cssText = `
//         color: red;
//         background-color: blue;
//         font-size: 20px;
//         font-weight: bold;
//         padding: 10px;
//         border: 2px solid black;
//     `;
// }

// 3. Using classList (recommended in real projects)

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].classList.add("myStyle");
}

// 3. document.getElementsByClassName()
// Selects HTML elements using their class name.

const elements = document.getElementsByClassName("title");

console.log(elements);
console.log(elements[0].innerText);
console.log(elements[1].innerText);
console.log(elements[2].innerText);

// for(let i=0;i<elements.length;i++){
//     elements[i].style.color='blue'
//     elements[i].style.background='pink'
// }

// for (let i = 0; i < elements.length; i++) {
//   elements[i].style.cssText = `
//     color:white;
//     border:2px solid gray;
//     border-radius:10px;
//     background:black;
//     padding:10px 12px;

//     `;
// }

for (let i = 0; i < elements.length; i++) {
  elements[i].classList.add("mytitle");
}

// query selector

// 4. document.querySelector()
// Selects the first element that matches a CSS selector.

// This is very useful because you can select elements using IDs, classes, tags, attributes, and other CSS selectors.

const myHeadings = document.querySelectorAll("#myHeading");

myHeadings.forEach(function(element) {
    element.style.color = "red";
});

// 2. Class selector - all matching elements
const paragraphss = document.querySelectorAll(".myPara");

paragraphss.forEach(function(item) {
    item.style.backgroundColor = "black";
    item.style.color = "white";
});


// 3. Tag selector
const headings = document.querySelectorAll("h4");

headings.forEach(function(item) {
    item.style.color = "blue";
});


// 4. Multiple classes
const activeBoxes = document.querySelectorAll(".box.active");

console.log('active boxes', activeBoxes);

activeBoxes.forEach(function(item) {
    item.style.backgroundColor = "lightgreen";
});


// 5. Attribute selector
const textInput = document.querySelectorAll('input[type="text"]');
// textInput.style.border = "2px solid red";

textInput.forEach((el)=>{
    el.style.border="2px solid red";
})


// 6. Nested selector
const containerPara = document.querySelector(".container p");
containerPara.style.color = "purple";


// 7. Direct child selector
const directChildren = document.querySelectorAll(".parent > p");

directChildren.forEach(function(item) {
    item.style.color = "orange";
});


// 8. Button selector
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(item) {
    item.style.padding = "10px";
});


// 9. First child
const firstItem = document.querySelector("li:first-child");
firstItem.style.color = "red";


// 10 disabled elements 

const disabledelements = document.querySelector('input[disabled]');

disabledelements.style.border = '10px solid orange';
disabledelements.style.padding = '10px 20px';


const abc=document.getElementsByTagNameNS


const username = document.getElementsByName("username");

console.log(username);
console.log(username[0].value);


const genders = document.getElementsByName("gender");

console.log(genders.length);

genders.forEach(function(element) {
    console.log(element.value);
});
