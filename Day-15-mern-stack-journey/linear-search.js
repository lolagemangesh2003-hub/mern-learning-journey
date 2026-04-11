// NOTE : Run each code separately comment others

// Linear Search (DSA Basics)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1️. What is Linear Search?

// Linear Search means checking each element one by one

// Example:
// Find 2 in [3,7,2,9]

// 3 
// 7 
// 2 found

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2️. Basic Logic

// Step 1: Start from index 0
// Step 2: Compare each element with target
// Step 3: If match → return index
// Step 4: If not found → return -1

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3️. Implementation

function linearSearch(arr, target){

    for(let i = 0; i < arr.length; i++){

        if(arr[i] === target){
            return i; // index found
        }
    }

    return -1; // not found
}

console.log(linearSearch([3,7,2,9], 2)); // 2

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4️. Return true/false

function searchExists(arr, target){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return true;
        }
    }

    return false;
}

console.log(searchExists([1,2,3], 4)); // false

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5️. Real Thinking

// Used in:
// Finding user in database
// Searching item in list
// Checking existence

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Common Mistakes

// 1. Wrong loop condition
// for(let i=0; i<=arr.length; i++)

// 2. Forgetting return -1

// 3. Comparing wrong values

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Key Learning

// Simple logic → strong foundation
// Loop + condition = search

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------