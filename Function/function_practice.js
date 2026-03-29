// Task : Sum of first N numbers

function sumN(n){
    let sum = 0;

    for(let i = 1; i <= n; i++){
        sum += i;
    }

    return sum;
}

console.log(sumN(5));

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Task : Factorial of a number

function factorial(n){
    let fact = 1;

    for(let i = 1; i <= n; i++){
        fact *= i;
    }

    return fact;
}

console.log(factorial(5));

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Task : Count digits in a number

function countDigits(num){
    let count = 0;

    while(num > 0){
        count++;
        num = Math.floor(num / 10);
    }

    return count;
}

console.log(countDigits(98765));

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Task : Increasing Star Pattern

// *
// **
// ***
// ****
// *****

function pattern1(n){
    for(let i = 1; i <= n; i++){
        let row = "";

        for(let j = 1; j <= i; j++){
            row += "*";
        }

        console.log(row);
    }
}

pattern1(5);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Task : Right Triangle (with spaces)

//     *
//    **
//   ***
//  ****
// *****

function pattern3(n){
    for(let i = 1; i <= n; i++){
        let row = "";

        // spaces
        for(let j = 1; j <= n - i; j++){
            row += " ";
        }

        // stars
        for(let k = 1; k <= i; k++){
            row += "*";
        }

        console.log(row);
    }
}

pattern3(5);




