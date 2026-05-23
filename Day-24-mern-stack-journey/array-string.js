// NOTE : Run each code separately comment others

// Combining Arrays and Strings

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1️. Earlier Thinking

// Arrays → Separate topic
// Strings → Separate topic

// Example:

let fruits = ["apple", "banana", "mango"];

// Array stores multiple strings

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2️. New Thinking

// Loop through array
// Access each string
// Apply string methods

let fruits1 = ["apple", "banana", "mango"];

for(let i = 0; i < fruits1.length; i++){
    console.log(fruits1[i].toUpperCase());
}

// Output:
// APPLE
// BANANA
// MANGO

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3️. Using length()

let words = ["cat", "elephant", "dog"];

for(let i = 0; i < words.length; i++){
    console.log(words[i].length);
}

// Output:
// 3
// 8
// 3

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4️. Using includes()

let emails = [
    "mangesh@gmail.com",
    "hello@yahoo.com",
    "test@gmail.com"
];

for(let i = 0; i < emails.length; i++){

    if(emails[i].includes("@gmail.com")){
        console.log(emails[i]);
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5️. Real World Example

let users = [
    "Mangesh",
    "Aniket",
    "Rohit"
];

for(let i = 0; i < users.length; i++){
    console.log("Welcome " + users[i]);
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Common Mistakes

// 1. Forgetting array index
// words.length
// words[i].length

// 2. Applying string methods on array
// words.toUpperCase()
// words[i].toUpperCase()

// 3. Wrong loop condition

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Key Learning

// Arrays store data
// Strings process text

// Together they solve real problems

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------