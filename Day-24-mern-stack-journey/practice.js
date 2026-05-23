// NOTE : Run each code separately comment others

// Arrays + Strings Practice

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1️. Print all names in uppercase

let names = ["mangesh", "aniket", "rohit"];

for(let i = 0; i < names.length; i++){
    console.log(names[i].toUpperCase());
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2️. Print length of each word

let words = ["apple", "banana", "kiwi"];

for(let i = 0; i < words.length; i++){
    console.log(words[i].length);
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3️. Count words with more than 5 characters

let fruits = ["apple", "banana", "watermelon", "kiwi"];

let count = 0;

for(let i = 0; i < fruits.length; i++){

    if(fruits[i].length > 5){
        count++;
    }
}

console.log(count);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4️. Print words containing "a"

let arr = ["apple", "dog", "banana", "cat"];

for(let i = 0; i < arr.length; i++){

    if(arr[i].includes("a")){
        console.log(arr[i]);
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5️. Count gmail accounts

let emails = [
    "a@gmail.com",
    "b@yahoo.com",
    "c@gmail.com"
];

let gmailCount = 0;

for(let i = 0; i < emails.length; i++){

    if(emails[i].includes("@gmail.com")){
        gmailCount++;
    }
}

console.log(gmailCount);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 6️. Find longest word

let words1 = ["cat", "elephant", "dog"];

let longest = words1[0];

for(let i = 1; i < words1.length; i++){

    if(words1[i].length > longest.length){
        longest = words1[i];
    }
}

console.log(longest);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 7️. Find shortest word

let words2 = ["cat", "elephant", "dog"];

let shortest = words2[0];

for(let i = 1; i < words2.length; i++){

    if(words2[i].length < shortest.length){
        shortest = words2[i];
    }
}

console.log(shortest);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 8️. Convert all words to lowercase

let data = ["HELLO", "WORLD", "JAVASCRIPT"];

for(let i = 0; i < data.length; i++){
    console.log(data[i].toLowerCase());
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 9️. Count total characters

let names1 = ["abc", "de", "fghi"];

let total = 0;

for(let i = 0; i < names1.length; i++){
    total += names1[i].length;
}

console.log(total);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 10. Find words starting with "m"

let users = ["mangesh", "rohit", "mahesh", "amit"];

for(let i = 0; i < users.length; i++){

    if(users[i][0] === "m"){
        console.log(users[i]);
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------