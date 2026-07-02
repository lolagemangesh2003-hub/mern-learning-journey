// NOTE : Create HTML first, then run JavaScript

// Day 26 : DOM Practice

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1️. Change heading text

/*
<h1 id="title">Hello</h1>
*/

let title = document.querySelector("#title");

title.textContent = "Welcome";

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2️. Change paragraph color

/*
<p id="para">JavaScript</p>
*/

let para = document.querySelector("#para");

para.style.color = "red";

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3️. Change button text

/*
<button id="btn">Submit</button>
*/

let btn = document.querySelector("#btn");

btn.textContent = "Clicked";

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4️. Show entered name

/*
<input id="name">
<button id="showBtn">Show</button>
<p id="result"></p>
*/

let name = document.querySelector("#name");
let showBtn = document.querySelector("#showBtn");
let result = document.querySelector("#result");

showBtn.addEventListener("click", function(){

    result.textContent = name.value;

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5️. Increase font size

let heading = document.querySelector("#title");

heading.style.fontSize = "40px";

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 6️. Hide paragraph

let p = document.querySelector("#para");

p.style.display = "none";

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 7️. Show current input length

/*
<input id="text">
<button id="check">Check</button>
<p id="output"></p>
*/

let text = document.querySelector("#text");
let check = document.querySelector("#check");
let output = document.querySelector("#output");

check.addEventListener("click", function(){

    output.textContent = text.value.length;

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 8️. Toggle background color

/*
<button id="change">Change</button>
*/

let change = document.querySelector("#change");

change.addEventListener("click", function(){

    document.body.style.backgroundColor = "lightblue";

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 9️. Show welcome message

/*
<button id="welcomeBtn">Welcome</button>
<p id="msg"></p>
*/

let welcomeBtn = document.querySelector("#welcomeBtn");
let msg = document.querySelector("#msg");

welcomeBtn.addEventListener("click", function(){

    msg.textContent = "Welcome to JavaScript!";

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 10. Change image

/*
<img id="image" src="cat.jpg">
<button id="changeImg">Change</button>
*/

let image = document.querySelector("#image");
let changeImg = document.querySelector("#changeImg");

changeImg.addEventListener("click", function(){

    image.src = "dog.jpg";

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------