// NOTE : Create HTML first, then run JavaScript

// DOM Event Practice

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1️. Change heading text

let heading = document.querySelector("#heading");
let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){

    heading.textContent = "Hello DOM";

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2️. Change text color

btn.addEventListener("click", function(){

    heading.style.color = "red";

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3️. Change background color

btn.addEventListener("click", function(){

    document.body.style.backgroundColor = "lightblue";

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4️. Increase font size

btn.addEventListener("click", function(){

    heading.style.fontSize = "40px";

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5️. Hide paragraph

let para = document.querySelector("#para");

btn.addEventListener("click", function(){

    para.style.display = "none";

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 6️. Show hidden paragraph

btn.addEventListener("click", function(){

    para.style.display = "block";

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 7️. Change button text

btn.addEventListener("click", function(){

    btn.textContent = "Clicked";

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 8️. Show welcome message

let message = document.querySelector("#message");

btn.addEventListener("click", function(){

    message.textContent = "Welcome Mangesh!";

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 9️. Count Button Clicks

let count = 0;

let counter = document.querySelector("#counter");

btn.addEventListener("click", function(){

    count++;

    counter.textContent = count;

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 10. Toggle Text

btn.addEventListener("click", function(){

    if(heading.textContent === "Hello"){

        heading.textContent = "Welcome";

    }else{

        heading.textContent = "Hello";

    }

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------