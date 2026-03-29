// I got stuck in this problem so thought of sharing with you guy's

// NOTE : Run each code saperately comment others

// Problem : Check if an array is strictly increasing

// Example :
// [1,2,3,4] → true
// [1,3,2,4] → false

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Wrong Approach (Common Mistake)

function isIncreasingWrong(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}

console.log(isIncreasingWrong([1,2,3,4]));

// Problem :
// Last element compares with undefined
// arr[i+1] becomes undefined

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Mistake 1 : Wrong comparison logic

// Some people compare random elements instead of adjacent ones

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Mistake 2 : Loop boundary error

// Using i < arr.length instead of i < arr.length - 1

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Correct Approach

function isIncreasing(arr){
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] >= arr[i+1]){
            return false;
        }
    }
    return true;
}

console.log(isIncreasing([1,2,3,4]));   // true
console.log(isIncreasing([1,3,2,4]));   // false

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Explanation :

// We compare adjacent elements:
// arr[i] and arr[i+1]

// If any element is greater than or equal to next → NOT increasing

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Edge Case

console.log(isIncreasing([5])); // true
// Single element is always increasing

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------