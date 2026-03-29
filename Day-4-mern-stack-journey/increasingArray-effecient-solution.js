// Old Day-4 SOlution 

function isIncreasing(arr){
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] >= arr[i+1]){
            return false;
        }
    }
    return true;
}

console.log("Old Solution: ",isIncreasing([1,2,3,4]));  

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// New Solution for the same problem :

function revisedIncreasingSol(arr){
    let prev = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] <= prev) return false;
        prev = arr[i];
    }
    return true;
}
console.log("Revised SOlution: ",revisedIncreasingSol([1,5,3,4]));  

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Why I did new solution ?

// It compares the current element with the previous one, which is easier to understand than using arr[i] and arr[i+1].

// The first code is harder to tweak for this.

// Thinking “Is this bigger than the one before?” is more intuitive than “Is this smaller than the next?”