// NOTE : Run each code saperately comment others

// for loop :

// Syntax :

for(initialization; condition; update){
    // code
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Task : Print 0-4 (Easy)

for(let i = 0; i < 5; i++){
    console.log(i);
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Common Mistakes i did in loops

// 1. Wrong condition

let text="mangesh"
for(let j=0; j<=text.length; j++){
    console.log(j)
}

// This goes out of limits because actual length of text is 7 
// and condition is j should be <= 7 i.e length so it will cross its limit and run loop till 7

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2. Forgetting Update 

// NOTE 1: Dont run code Directly comment above code then run it,

for(let k=0; i<5; ){
     
}

// NOTE 2: Use ctrl + C to quit infinite loop
// if we forget to update the i then it will go in infinite loop

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3. confusion in element and index

const arr=[1,2,3,4,5];

//  Here a gives us index not element
for(let a=0; a<arr.length; a++){
    console.log("Index :",a)
}

//  Here arr[i] gives us the element
for(let b=0; b<arr.length; b++){
    console.log("Element :",arr[b])
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4. Off-by-One Error

let arr1 = [10,20,30];

for(let c = 0; c <= arr1.length; c++){
    console.log(arr1[c]);
}

// The loop hits undefined because it's trying to access an index that doesn't exist. 
// Since the array length is 3 but the last index is 2, using i <= arr.length causes the loop to run a 4th time.