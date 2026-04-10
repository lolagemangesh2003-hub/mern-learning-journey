// NOTE : Run each code separately comment others

// String Mistake-Based Practice

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1️. Fix reverse mistake

function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // olleh

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2️. Check palindrome (basic)

function isPalindrome(str){
    let rev = str.split("").reverse().join("");
    return str === rev;
}

console.log(isPalindrome("madam")); // true

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3️. Palindrome (ignore case)

function palindromeCase(str){
    let s = str.toLowerCase();
    let rev = s.split("").reverse().join("");
    return s === rev;
}

console.log(palindromeCase("Madam")); // true

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4️. Palindrome (ignore spaces)

function palindromeSpaces(str){
    let s = str.replaceAll(" ", "");
    let rev = s.split("").reverse().join("");
    return s === rev;
}

console.log(palindromeSpaces("race car")); // true

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5️. Full clean palindrome

function fullPalindrome(str){
    let s = str.toLowerCase().replaceAll(" ", "");
    let rev = s.split("").reverse().join("");
    return s === rev;
}

console.log(fullPalindrome("Race Car")); // true

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 6️. Count mismatches

function countMismatch(str){
    let count = 0;

    for(let i = 0; i < str.length / 2; i++){
        if(str[i] !== str[str.length - 1 - i]){
            count++;
        }
    }

    return count;
}

console.log(countMismatch("hello")); // mismatches

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 7️. First non-repeating character

function firstUnique(str){
    for(let i = 0; i < str.length; i++){
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
            return str[i];
        }
    }
}

console.log(firstUnique("aabbcdd")); // c

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 8️. Check anagram

function isAnagram(a, b){
    let s1 = a.split("").sort().join("");
    let s2 = b.split("").sort().join("");
    return s1 === s2;
}

console.log(isAnagram("listen","silent")); // true

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 9️. Remove duplicates

function removeDuplicates(str){
    let result = "";

    for(let i = 0; i < str.length; i++){
        if(!result.includes(str[i])){
            result += str[i];
        }
    }

    return result;
}

console.log(removeDuplicates("aabbcc")); // abc

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 10. Count characters

function charCount(str){
    let obj = {};

    for(let char of str){
        obj[char] = (obj[char] || 0) + 1;
    }

    return obj;
}

console.log(charCount("hello")); // {h:1,e:1,l:2,o:1}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------