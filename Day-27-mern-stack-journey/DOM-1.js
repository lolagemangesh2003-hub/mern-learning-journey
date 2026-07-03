// NOTE : Run HTML first, then JavaScript

// Day 27 : DOM Events (Button Click)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1️. What is an Event?

// An event is an action performed by the user.

// Examples:
// ✔ Click
// ✔ Typing
// ✔ Mouse Hover
// ✔ Key Press

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Example HTML

/*
<button id="btn">Click Me</button>
*/

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2️. Selecting the Button

let button = document.querySelector("#btn");

console.log(button);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3️. addEventListener()

// Syntax

button.addEventListener("click", function(){

    console.log("Button Clicked");

});

// click → Event
// function → Runs when event happens

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4️. Change Text on Click

/*
<h1 id="heading">Hello</h1>
<button id="btn">Click</button>
*/

let heading = document.querySelector("#heading");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){

    heading.textContent = "Welcome to JavaScript";

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5️. Change Button Text

btn.addEventListener("click", function(){

    btn.textContent = "Clicked";

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 6️. Multiple Statements

btn.addEventListener("click", function(){

    heading.textContent = "Button Pressed";

    heading.style.color = "green";

    btn.textContent = "Done";

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ❌ Common Mistakes

// 1. Forgetting ()

// button.addEventListener("click", function{

// });

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2. Wrong Selector

document.querySelector("btn"); // ❌

// Correct

document.querySelector("#btn");

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3. Calling function immediately

button.addEventListener("click", changeText());

// Wrong because function runs immediately.

// Correct

button.addEventListener("click", changeText);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 🧠 Key Learning

// User Action → Event

// Event → Executes Function

// Function → Updates Webpage

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------