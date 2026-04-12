// NOTE : Run each code separately comment others

// Linear Search Mistakes & Fixes

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1️. Problem: Linear Search

// Find target in array
// Example: [3,7,2,9], target = 2 → index = 2

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Mistake 1: Not stopping loop

function wrongSearch1(arr, target){

    let index = -1;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            index = i; // keeps updating
        }
    }

    return index;
}

console.log(wrongSearch1([2,3,2,4], 2)); // returns last index (2)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Fix: Stop when found

function correctSearch1(arr, target){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i; // stop immediately
        }
    }

    return -1;
}

console.log(correctSearch1([2,3,2,4], 2)); // 0

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Mistake 2: Returning wrong index

function wrongSearch2(arr, target){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return arr[i]; // returns value, not index
        }
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Fix

function correctSearch2(arr, target){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i; // correct
        }
    }

    return -1;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Mistake 3: Checking unnecessary elements

function wrongSearch3(arr, target){

    let found = false;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            found = true; // but loop continues
        }
    }

    return found;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Fix

function correctSearch3(arr, target){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return true; // stop early
        }
    }

    return false;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Key Learning

// Don't continue after finding answer
// Don't return wrong thing (value vs index)
// Don't do extra work

// Stop early --> efficient
// Be precise --> correct output

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------