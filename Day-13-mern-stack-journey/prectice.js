// NOTE : Run each code separately comment others

// String Problem Solving Practice

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1️. Check palindrome

function isPalindrome(str) {
  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }

  if (str === rev) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(isPalindrome("madam")); // YES

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2️. Reverse a string

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // "olleh"

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3️. Check if string starts with a letter

function startsWithA(str) {
  return str[0] === "a";
}

console.log(startsWithA("apple")); // true

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4️. Count vowels

function countVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("javascript")); // 3

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5️. Convert first letter to uppercase

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalize("mangesh")); // Mangesh

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 6️. Check if two strings are equal

function checkEqual(a, b) {
  return a === b;
}

console.log(checkEqual("abc", "abc")); // true

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 7️. Remove spaces

function removeSpaces(str) {
  return str.replaceAll(" ", "");
}

console.log(removeSpaces("hello world")); // "helloworld"

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 8️. Find string length without using length (loop)

function findLength(str) {
  let count = 0;

  for (let i = 0; str[i] !== undefined; i++) {
    count++;
  }

  return count;
}

console.log(findLength("hello")); // 5

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 9️. Check if string contains number

function hasNumber(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "0" && str[i] <= "9") {
      return true;
    }
  }
  return false;
}

console.log(hasNumber("abc1")); // true

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 10. Convert string to array manually

function stringToArray(str) {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }

  return arr;
}

console.log(stringToArray("abc")); // ["a","b","c"]

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
