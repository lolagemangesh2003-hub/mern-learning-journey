// NOTE : Create HTML first, then run JavaScript

// Event Practice

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1️. Show alert on button click

let btn = document.querySelector("#btn");

btn.addEventListener("click", function(){

    alert("Button Clicked!");

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2️. Change heading

let heading = document.querySelector("#heading");

btn.addEventListener("click", function(){

    heading.textContent = "Welcome";

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3️. Change heading color

btn.addEventListener("click", function(){

    heading.style.color = "green";

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

// 6️. Show paragraph again

btn.addEventListener("dblclick", function(){

    para.style.display = "block";

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 7️. Mouse Over

btn.addEventListener("mouseover", function(){

    heading.textContent = "Mouse Entered";

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 8️. Mouse Leave

btn.addEventListener("mouseout", function(){

    heading.textContent = "Mouse Left";

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

// 10. Toggle Background Color

btn.addEventListener("click", function(){

    if(document.body.style.backgroundColor === "lightblue"){

        document.body.style.backgroundColor = "white";

    }else{

        document.body.style.backgroundColor = "lightblue";

    }

});

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------