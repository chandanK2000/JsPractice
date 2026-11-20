console.log("-----------------access elements contents-----------");

// 1. innerHTML
// Definition: Gets or sets the HTML content inside an element, including HTML tags.

// Example:
let element = document.getElementById("myDiv");

console.log(element.innerHTML);

// element.innerHTML = "<h1>Welcome</h1>";

// 2. textContent
// Definition: Gets or sets all text content inside an element, including text from hidden elements. HTML tags are not returned as markup.

// Example:

console.log(element.textContent);

// element.textContent='welcome to javascript';

// 3. innerText
// Definition: Gets or sets the rendered (visible) text of an element.

// Example:

console.log(element.innerText);

// element.innerText = 'Welcome Sir';


//  When should we use which one?
// - innerHTML – When you want to insert HTML elements dynamically.
// - textContent – When you want to read or update plain text. Usually a good default for text.
// - innerText – When you specifically need the text as rendered and visible to the user.