// NOTE : Run each code separately comment others

// Linear Search Debug Practice

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 1️. Find first occurrence

function firstOcc(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(firstOcc([1,2,2,3], 2)); // 1

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2️. Find last occurrence

function lastOcc(arr, target){
    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

console.log(lastOcc([1,2,2,3], 2)); // 2

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3️. Check existence (optimized)

function exists(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return true;
        }
    }
    return false;
}

console.log(exists([1,2,3], 4)); // false

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4️. Count occurrences

function countOcc(arr, target){
    let count = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            count++;
        }
    }

    return count;
}

console.log(countOcc([2,2,3,2], 2)); // 3

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5️. Find index in string

function findChar(str, ch){
    for(let i = 0; i < str.length; i++){
        if(str[i] === ch){
            return i;
        }
    }
    return -1;
}

console.log(findChar("mangesh", "g")); // 3

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 6️. Find first even number

function firstEven(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            return arr[i];
        }
    }
}

console.log(firstEven([1,3,5,8])); // 8

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 7️. Find negative number

function findNegative(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            return arr[i];
        }
    }
}

console.log(findNegative([3,5,-2,8])); // -2

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 8️. Return all indices

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

// 9️. Check if array contains duplicates

function hasDuplicate(arr){

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                return true;
            }
        }
    }

    return false;
}

console.log(hasDuplicate([1,2,3,2])); // true

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 10. Find max index

function maxIndex(arr){

    let max = arr[0];
    let index = 0;

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
            index = i;
        }
    }

    return index;
}

console.log(maxIndex([1,5,3])); // 1

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------