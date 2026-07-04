// NOTE : Run HTML first, then JavaScript

// DOM Events

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1️. What is an Event?

// An event is an action performed by the user or browser.

// Examples:
// ✔ Click
// ✔ Typing
// ✔ Mouse Hover
// ✔ Key Press
// ✔ Form Submit

// JavaScript waits for these events
// and executes code when they happen.

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Example HTML

/*
<button id="btn">Click Me</button>
*/

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2️. addEventListener()

// Syntax

let button = document.querySelector("#btn");

button.addEventListener("click", function(){

    console.log("Button Clicked");

});

// event → "click"
// function → runs when click happens

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3️. Changing Text

/*
<h1 id="title">Hello</h1>
<button id="btn">Click</button>
*/

let title = document.querySelector("#title");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){

    title.textContent = "Welcome";

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4️. Multiple Actions in One Event

btn.addEventListener("click", function(){

    title.textContent = "JavaScript";

    title.style.color = "blue";

    btn.textContent = "Done";

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5️. Different Events

// Click

button.addEventListener("click", function(){

    console.log("Clicked");

});

// Double Click

button.addEventListener("dblclick", function(){

    console.log("Double Clicked");

});

// Mouse Over

button.addEventListener("mouseover", function(){

    console.log("Mouse Entered");

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ❌ Common Mistakes

// 1. Forgetting #

// document.querySelector("btn") ❌

// document.querySelector("#btn") ✅

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2. Calling function immediately

// button.addEventListener("click", changeText()) ❌

// button.addEventListener("click", changeText) ✅

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3. Selecting wrong element

// Always check IDs and classes carefully.

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 🧠 Key Learning

// Event happens

// ↓

// JavaScript listens

// ↓

// Function runs

// ↓

// Webpage updates

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------