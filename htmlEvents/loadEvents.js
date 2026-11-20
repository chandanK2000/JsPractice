// 1. DOMContentLoaded
// 2. load
// 1. DOMContentLoaded
// This event executes when the browser has completely parsed the HTML document and built the DOM.

// It does not wait for images and other external resources to finish loading.

document.addEventListener("DOMContentLoaded", function () {
  console.log("HTML document loaded!");
});

// 2. load
// The load event executes when the page and its dependent resources, such as images, stylesheets and scripts, have finished loading.

window.addEventListener("load", function () {
  console.log("Complete page loaded!");
});

function myFunctions() {
  alert("page is laoded");
}
