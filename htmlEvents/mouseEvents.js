// HTML Events
// HTML events are things that happen to HTML elements.

// Examples of events:

// An HTML button is clicked
// A web page has finished loading
// The mouse moves over an element
// A keyboard key is pressed
// An HTML input field is changed

console.log('-----------mouse events------------');

// Common Mouse Events:

// click
// dblclick
// mouseover / mouseout
// mousemove
// mousedown / mouseup

// 1. All important JavaScript Mouse Events
// Mouse Event	Description
// click	When the user clicks an element
// dblclick	When the user double-clicks
// mousedown	When a mouse button is pressed

// mouseup	When a mouse button is released

// mousemove	When the mouse moves over an element
// mouseover	When the mouse enters an element or its descendants
// mouseout	When the mouse leaves an element or its descendants
// mouseenter	When the mouse enters an element
// mouseleave	When the mouse leaves an element
// contextmenu	When the user opens the right-click menu
// wheel	When the mouse wheel is used


const btn = document.getElementById("btn");
const box = document.getElementById("box");


// click events
btn.addEventListener('click',function(){
    console.log('button clicked')
})

// dbclick

btn.addEventListener('dblclick',function(){
    console.log('douled cliked happen successfully')
})


// 3. Mouse Down
btn.addEventListener("mousedown", function() {
    console.log("Mouse button pressed!");
});


// 4. Mouse Up
btn.addEventListener("mouseup", function() {
    console.log("Mouse button released!");
});


// 5. Mouse Enter
box.addEventListener("mouseenter", function() {
    box.style.backgroundColor = "green";
    console.log('moused enter')
});


// 6. Mouse Leave
box.addEventListener("mouseleave", function() {
    box.style.backgroundColor = "lightblue";
    console.log('mouse leave happend')
});


// 7. Mouse Move
box.addEventListener("mousemove", function(event) {
    console.log("X:", event.clientX, "Y:", event.clientY);
});


// 8. Context Menu
box.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    console.log("Right click detected!");
});

// 9. Wheel
box.addEventListener("wheel", function(event) {
    console.log("Wheel:", event.deltaY);
});


