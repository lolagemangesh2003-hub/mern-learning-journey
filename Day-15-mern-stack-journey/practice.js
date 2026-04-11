// NOTE : Run each code separately comment others

// Linear Search Practice

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1️. Find index of element

function findIndex(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(findIndex([1,2,3,4], 3)); // 2

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2️. Check if element exists

function exists(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return true;
        }
    }
    return false;
}

console.log(exists([5,6,7], 6)); // true

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3️. Count occurrences

function countOcc(arr, target){
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            count++;
        }
    }

    return count;
}

console.log(countOcc([1,2,2,3,2], 2)); // 3

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4️. Find first occurrence

function firstOcc(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(firstOcc([2,3,2,4], 2)); // 0

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5️. Find last occurrence

function lastOcc(arr, target){
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(lastOcc([2,3,2,4], 2)); // 2

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 6️. Find max using loop

function findMax(arr){
    let max = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    return max;
}

console.log(findMax([1,5,3])); // 5

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 7️. Find min using loop

function findMin(arr){
    let min = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }

    return min;
}

console.log(findMin([4,2,8])); // 2

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 8️. Search in string

function searchChar(str, char){
    for(let i = 0; i < str.length; i++){
        if(str[i] === char){
            return i;
        }
    }
    return -1;
}

console.log(searchChar("hello", "e")); // 1

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 9️. Find even number

function findEven(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            return arr[i];
        }
    }
}

console.log(findEven([1,3,5,6])); // 6

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 10. Return all indices

function allIndices(arr, target){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            result.push(i);
        }
    }

    return result;
}

console.log(allIndices([1,2,2,3], 2)); // [1,2]

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------