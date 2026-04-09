// NOTE : Run each code separately comment others

// Palindrome & Problem Solving Approach

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1️. What is a Palindrome?

// A string that reads same forward and backward

// Examples:
// "madam"
// "racecar"
// "hello"

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2️. Basic Approach

// 1: Take string
// 2: Reverse it
// 3: Compare with original

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Method 1: Using reverse()

function isPalindrome(str){

    let reversed = str.split("").reverse().join("");

    if(str === reversed){
        return true;
    }else{
        return false;
    }
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Method 2: Using Loop (Important)

function isPalindromeLoop(str){

    for(let i = 0; i < str.length / 2; i++){
        if(str[i] !== str[str.length - 1 - i]){
            return false;
        }
    }

    return true;
}

console.log(isPalindromeLoop("racecar")); // true

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Method 3: Using Loop (Easiest Method)

let str="madam";
let rev="";

for(let i=str.length-1; i>=0; i--){
    rev+=str[i];
}

if(str===rev){
    console.log("YES");
}else{
    console.log("NO");
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Key Learning

// Problem solving = break into steps
// Compare logic → important skill
// Multiple ways to solve same problem

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------