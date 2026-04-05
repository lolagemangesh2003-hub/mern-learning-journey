// NOTE : Run each code separately comment others

// String Practice

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1️. Count characters

function countChars(str){
    return str.length;
}

console.log(countChars("hello")); // 5

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2️. Convert to uppercase

function toUpper(str){
    return str.toUpperCase();
}

console.log(toUpper("mangesh")); // MANGESH

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3️. Check if word exists

function checkWord(str, word){
    return str.includes(word);
}

console.log(checkWord("I love JS", "JS")); // true

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4️. Find index of word

function findIndex(str, word){
    return str.indexOf(word);
}

console.log(findIndex("hello world", "world")); // index

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5. Convert string to array

function stringToArray(str){
    return str.split(",");
}

console.log(stringToArray("a,b,c")); // ["a","b","c"]

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------