// NOTE : Run each code separately comment others

// Array Questions (Beginner → Intermediate)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1️. Sum of Array

function sumArray(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum;
}

console.log(sumArray([1,2,3,4])); // 10

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2️. Find Maximum Number

function findMax(arr){
    let max = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    return max;
}

console.log(findMax([5,2,9,1])); // 9

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3️. Count Even Numbers

function countEven(arr){
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            count++;
        }
    }

    return count;
}

console.log(countEven([1,2,3,4,6])); // 3

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4️. Reverse Array (Manual)

function reverseArray(arr){
    let result = [];

    for(let i = arr.length - 1; i >= 0; i--){
        result.push(arr[i]);
    }

    return result;
}

console.log(reverseArray([1,2,3])); // [3,2,1]

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5️. Check Element Exists

function checkElement(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return true;
        }
    }
    return false;
}

console.log(checkElement([1,2,3], 2)); // true

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 6️. Find Index of Element

function findIndex(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(findIndex([10,20,30], 20)); // 1

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 7️. Remove Duplicates (Unsorted)

function removeDuplicates(arr){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(removeDuplicates([1,2,2,3,1])); // [1,2,3]

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 8️. Move Zeros to End

function moveZeros(arr){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            result.push(arr[i]);
        }
    }

    // add zeros at end
    let zeroCount = arr.length - result.length;

    for(let i = 0; i < zeroCount; i++){
        result.push(0);
    }

    return result;
}

console.log(moveZeros([0,1,0,3,12])); // [1,3,12,0,0]

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 9️. Check if Array is Increasing

function isIncreasing(arr){
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] >= arr[i+1]){
            return false;
        }
    }
    return true;
}

console.log(isIncreasing([1,2,3])); // true

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 10. Find Missing Number

function missingNumber(arr){
    let n = arr.length + 1;

    let total = n * (n + 1) / 2;

    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return total - sum;
}

console.log(missingNumber([1,2,4,5])); // 3

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------