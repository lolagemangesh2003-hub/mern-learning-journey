// NOTE : Run each code separately comment others

// Function :

// Syntax :

function functionName(parameters){
    // code
    return value; // optional
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Task : Add Two Numbers (Easy)

function add(a, b){
    return a + b;
}

console.log(add(5,3));

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Task : Print Greeting (No return)

function greet(name){
    console.log("Hello " + name);
}

greet("Mangesh");

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Common Mistakes i did in Functions

// 1. Forgetting to Call Function

function test1(){
    console.log("Hello");
}

// test1(); not called

// This will not print anything because function is not called

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2. Missing return

function add1(a,b){
    a + b;
}

console.log(add1(2,3));

// Output : undefined
// Because function is not returning anything

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3. Confusion between return and console.log

function test2(){
    return "Hello";
}

console.log(test2());

// Correct use

function test3(){
    console.log("Hello");
}

console.log(test3());

// Output : 
// Hello
// undefined

// console.log only prints, it does not return value

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 4. Wrong Parameters

function add2(a,b){
    return a + b;
}

console.log(add2(5));

// Output : NaN
// Because one argument is missing

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 5. Function Scope Confusion

let x = 10;

function test4(){
    let x = 20;
    console.log(x);
}

test4();
console.log(x);

// Output :
// 20
// 10

// Function has its own scope

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 6. Not Returning in Loop-based Function

function sum(n){
    let total = 0;

    for(let i=1; i<=n; i++){
        total += i;
    }
    // forgot return
}

console.log(sum(5));

// Output : undefined

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 7. Returning inside loop too early

function sum2(n){
    let total = 0;

    for(let i=1; i<=n; i++){
        total += i;
        return total; // wrong
    }
}

console.log(sum2(5));

// Output : 1 
// Loop stops after first iteration

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 8. Not passing arguments

function greet1(name){
    return "Hello " + name;
}

console.log(greet1());

// Output : Hello undefined



