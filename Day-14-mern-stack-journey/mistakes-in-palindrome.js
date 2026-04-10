// NOTE : Run each code separately comment others

// Palindrome Mistakes & Fixes

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1️. Problem: Check Palindrome

// A string that reads same forward and backward
// Example: "madam" | "hello"

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Mistake 1: Incorrect Reverse

function wrongReverse(str){
    return str.split().reverse().join(); // wrong
}

console.log(wrongReverse("madam"));

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Fix

function correctReverse(str){
    return str.split("").reverse().join("");
}

console.log(correctReverse("madam")); // madam

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Mistake 2: Wrong Comparison

function wrongCompare(str){
    let rev = str.split("").reverse().join("");

    if(str = rev){ // assignment instead of comparison
        return true;
    }
    return false;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Fix

function correctCompare(str){
    let rev = str.split("").reverse().join("");

    if(str === rev){
        return true;
    }
    return false;
}

console.log(correctCompare("hello")); // false

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Mistake 3: Ignoring Edge Cases

// "Madam" → should be true
// "race car" → should be true

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Fix (handle case + spaces)

function cleanPalindrome(str){

    let cleaned = str.toLowerCase().replaceAll(" ", "");
    let rev = cleaned.split("").reverse().join("");

    return cleaned === rev;
}

console.log(cleanPalindrome("Madam"));     // true
console.log(cleanPalindrome("race car"));  // true

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2️. Loop Method (Optimized)

function palindromeLoop(str){

    let cleaned = str.toLowerCase().replaceAll(" ", "");

    for(let i = 0; i < cleaned.length / 2; i++){
        if(cleaned[i] !== cleaned[cleaned.length - 1 - i]){
            return false;
        }
    }

    return true;
}

console.log(palindromeLoop("racecar")); // true

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Key Learning

// Mistakes happen when:
// 1. logic is rushed
// 2. steps are not clear

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------