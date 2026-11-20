console.log("--------------accessAttributes-----------");

let elements = document.getElementById("username");

// console.log(elements.id);
// console.log(elements.type);
// console.log(elements.placeholder);
// console.log(elements.value);

// syntax:element.attributeName

// B. Modifying attributes

// elements.value = "Mohan";

// elements.placeholder = "Enter username";

// elements.type = "password";

// C. Using getAttribute()
// This is another important method.

// getAttribute() is used to retrieve an HTML attribute's value.

// console.log(elements.getAttribute("id"));
// console.log(elements.getAttribute("type"));
// console.log(elements.getAttribute("placeholder"));


// 1. What is setAttribute()?
// setAttribute() is used to add a new HTML attribute or update an existing HTML attribute of an element.

// Syntax:

// element.setAttribute("attributeName", "value");

// console.log(elements)

// elements.setAttribute("placeholder", "Enter your name");

// elements.setAttribute("value", "Chandan");

// elements.setAttribute("class", "myinput");

// elements.setAttribute("required", "");


// 1. removeAttribute()
// Definition: removeAttribute() is used to remove an existing HTML attribute from an element.

// Syntax:


// element.removeAttribute("attributeName");



console.log("Before:", elements.getAttribute("placeholder"));

elements.removeAttribute('placeholder');

// console.log("After:", elements.getAttribute("placeholder"));

console.log(elements);


// 1. What is hasAttribute()?
// hasAttribute() checks whether an HTML element contains a particular attribute or not.

// Syntax:


// element.hasAttribute("attributeName");


console.log(elements.hasAttribute("id"));
console.log(elements.hasAttribute("type"));
console.log(elements.hasAttribute("placeholder"));
console.log(elements.hasAttribute("required"));
console.log(elements.hasAttribute("class"));