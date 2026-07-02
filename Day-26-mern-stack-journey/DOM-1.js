// NOTE : Run each code separately comment others

// DOM (Document Object Model)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1️. What is DOM?

// DOM stands for Document Object Model.

// It allows JavaScript to interact with HTML.

// HTML creates the structure.
// CSS styles it.
// JavaScript makes it interactive.

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Example HTML

/*
<h1 id="title">Hello</h1>
*/

// JavaScript

let title = document.getElementById("title");

console.log(title);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2️. Selecting Elements

// By ID

let heading = document.getElementById("title");

// By Class

let box = document.getElementsByClassName("box");

// By Tag

let para = document.getElementsByTagName("p");

// Modern Method

let btn = document.querySelector("#btn");

// Multiple Elements

let items = document.querySelectorAll(".item");

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3️. Changing Text

/*
<h1 id="title">Hello</h1>
*/

let text = document.querySelector("#title");

text.textContent = "Welcome";

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4️. Changing HTML

/*
<p id="demo"></p>
*/

let demo = document.querySelector("#demo");

demo.innerHTML = "<b>Hello JavaScript</b>";

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5️. Changing CSS

/*
<h1 id="title">Hello</h1>
*/

let heading1 = document.querySelector("#title");

heading1.style.color = "blue";

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 6️. Button Click

/*
<button id="btn">Click</button>
*/

let button = document.querySelector("#btn");

button.addEventListener("click", function(){

    console.log("Button Clicked");

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ❌ Common Mistakes

// 1. Wrong selector

document.querySelector("title");

// Correct

document.querySelector("#title");

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2. Forgetting # or .

// ID → #

// Class → .

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3. Selecting element before HTML loads

// Always place JavaScript at the end of body
// OR use defer attribute

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 🧠 Key Learning

// HTML → Structure

// CSS → Design

// JavaScript (DOM) → Interaction

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------