// NOTE : Run each code separately comment others

// Arrays + Strings Mistakes & Fixes

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Problem:
// Using string methods with arrays

let fruits = ["apple", "banana", "mango"];

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Mistake 1: Applying method directly on array

console.log(fruits.toUpperCase());

// Error:
// toUpperCase is not a function

// Why?

// fruits is an array
// toUpperCase works on strings only

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Fix

console.log(fruits[0].toUpperCase());

// Output:
// APPLE

// First access element
// Then apply method

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Mistake 2: Forgetting element access inside loop

for(let i = 0; i < fruits.length; i++){

    console.log(fruits.length);
}

// Output:
// 3
// 3
// 3

// Wrong because length of array prints repeatedly

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Fix

for(let i = 0; i < fruits.length; i++){

    console.log(fruits[i].length);
}

// Output:
// 5
// 6
// 6

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Mistake 3: Wrong loop logic

let words = ["cat","elephant","dog"];

for(let i = 0; i <= words.length; i++){

    console.log(words[i]);
}

// Output:
// cat
// elephant
// dog
// undefined

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Fix

for(let i = 0; i < words.length; i++){

    console.log(words[i]);
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Real Thinking

// Step 1:
// Access element

// Step 2:
// Apply method

// Example:

console.log(words[0].toUpperCase());

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Key Learning

// Array → method directly
// Wrong loop logic

// Access element first
// Then apply string method

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------