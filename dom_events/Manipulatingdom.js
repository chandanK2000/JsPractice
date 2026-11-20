console.log("-------Manipulating dom in javascript--------");

// 1. Manipulating Structure in JavaScript DOM
// Manipulating structure means creating, adding, removing, and replacing HTML elements dynamically using JavaScript.

// A. document.createElement()
// Used to create a new HTML element.

// Syntax:
// document.createElement("tagName");

// const newElements = document.createElement("p");

// newElements.textContent = "Hello javascript";

// console.log(newElements);

// Note: Creating an element does not automatically add it to the webpage.

// B. appendChild()
// Used to add a new child element inside a parent element.

let parent = document.getElementById("container");

let newElement = document.createElement("h2");
let newElement1 = document.createElement("p");

newElement.textContent = "Welcome to JavaScript";
newElement1.textContent =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.";

parent.appendChild(newElement);
parent.appendChild(newElement1);

newElement1.style.cssText = `
color:white;
background:black;
padding:10px 12px;
border-radius:4px;
border:none;
outline:none;
text-indent:10px;
font-size:18px;
`;

// C. removeChild()
// Used to remove a child element from its parent.

// Example:

let child = document.getElementById("myPara");

parent.removeChild(child);
console.log("child removed");

// D. replaceChild()
// Used to replace an existing child element with a new child element.

// Syntax:   parent.replaceChild(newElement, oldElement);

let newElement2 = document.createElement("h2");

newElement2.textContent = "New Content";

let oldElement = document.getElementById("oldPara");

parent.replaceChild(newElement2, oldElement);

// 2. Quick Revision
// Method	Purpose
// createElement()	Creates a new element
// appendChild()	Adds an element inside a parent
// removeChild()	Removes a child element
// replaceChild()	Replaces an existing child

// ===================================================

// 3. Adding Event Handlers
// Now, sir, this is another important topic.

// Event handlers are used to execute JavaScript code when a particular event occurs on an HTML element.

// For example:
// - When a user clicks a button.
// - When a user types something.
// - When a user moves the mouse.
// - When a user submits a form.
// Common JavaScript Events
// Event	Description
// click	When an element is clicked
// dblclick	When an element is double-clicked
// mouseover	When the mouse moves over an element
// mouseout	When the mouse leaves an element
// keydown	When a keyboard key is pressed
// keyup	When a keyboard key is released
// input	When the input value changes
// change	When an input value is changed and committed
// submit	When a form is submitted
// focus	When an element gets focus
// blur	When an element loses focus

// A. Using addEventListener()
// This is the recommended way to attach event handlers.

// syntax:element.addEventListener("event", function);

let btn = document.getElementById("mybutton");

console.log(btn);

// btn.addEventListener("click", function () {
//   alert("button clicked");
//   console.log("button clicked");
// });


// B. Using a Named Function

function showMessege(){
    console.log('buttton clicked with using a naming function');
}

btn.addEventListener('click',showMessege)


// C. Adding Multiple Event Listeners


//   btn.addEventListener("click", function() {
//         console.log("Button clicked");
//     });

    btn.addEventListener("mouseover", function() {
        console.log("Mouse is over the button");
    });


    // D. Removing Event Listeners



    // btn.addEventListener("click", showMessege);

    btn.removeEventListener("click", showMessege);