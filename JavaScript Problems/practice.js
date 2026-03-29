// Task : Leaders in Array :
// An element is a leader if it is greater than all elements to its right.

let arr= [16,17,4,3,5,2]

function leader(arr){
    let result = [];
    let maxRight = -Infinity;

    for(let i = arr.length - 1; i >= 0; i--){
        if(arr[i] > maxRight){
            result.push(arr[i]);
            maxRight = arr[i];
        }
    }

    return result.reverse();
}

console.log(leader(arr))

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Task : Remove Duplicates from Sorted Array

let mixedNum=[5,4,3,2,5,3,2,6,5,1,3,4,5,7,8];

function removeDuplicates(arr){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }

    return result;
}
console.log(removeDuplicates(mixedNum))


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Task : Find Missing Number (Sum Formula)
// Standard formula to find missing number :

// totalSum = n * (n + 1) / 2

const findMissing = [1,2,4,5];

function missingNumber(arr){
    let n = arr.length + 1;

    let totalSum = n * (n + 1) / 2;

    let arrSum = 0;
    for(let i = 0; i < arr.length; i++){
        arrSum += arr[i];
    }

    return totalSum - arrSum;
}

console.log(missingNumber(findMissing));
