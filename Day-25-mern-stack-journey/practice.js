// NOTE : Run each code separately comment others

// Arrays + Strings Practice

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1️. Print all names in uppercase

let names=["mangesh","rohit","aniket"];

for(let i=0;i<names.length;i++){

    console.log(names[i].toUpperCase());

}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2️. Print names having more than 5 letters

let users=["mangesh","raj","aniket","sam"];

for(let i=0;i<users.length;i++){

    if(users[i].length>5){

        console.log(users[i]);
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3️. Count words containing "a"

let words=["apple","dog","banana","cat"];

let count=0;

for(let i=0;i<words.length;i++){

    if(words[i].includes("a")){

        count++;
    }
}

console.log(count);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4️. Print only gmail users

let emails=[
    "a@gmail.com",
    "b@yahoo.com",
    "c@gmail.com"
];

for(let i=0;i<emails.length;i++){

    if(emails[i].includes("@gmail.com")){

        console.log(emails[i]);
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5️. Find longest word

let arr=["cat","elephant","javascript"];

let longest=arr[0];

for(let i=1;i<arr.length;i++){

    if(arr[i].length>longest.length){

        longest=arr[i];
    }
}

console.log(longest);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 6️. Find shortest word

let arr2=["cat","elephant","java"];

let shortest=arr2[0];

for(let i=1;i<arr2.length;i++){

    if(arr2[i].length<shortest.length){

        shortest=arr2[i];
    }
}

console.log(shortest);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 7️. Count total characters

let data=["abc","hello","javascript"];

let total=0;

for(let i=0;i<data.length;i++){

    total+=data[i].length;
}

console.log(total);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 8️. Print words starting with "m"

let users1=["mangesh","rohit","mahesh","amit"];

for(let i=0;i<users1.length;i++){

    if(users1[i][0]==="m"){

        console.log(users1[i]);
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 9️. Convert all words to lowercase

let names2=["HELLO","WORLD","JAVASCRIPT"];

for(let i=0;i<names2.length;i++){

    console.log(names2[i].toLowerCase());

}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 10. Check if a name exists

let users2=["mangesh","rohit","aniket"];

let target="rohit";

for(let i=0;i<users2.length;i++){

    if(users2[i]===target){

        console.log("Found");
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------