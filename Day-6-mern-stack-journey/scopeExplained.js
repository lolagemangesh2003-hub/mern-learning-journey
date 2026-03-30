// NOTE : Run each code saperately comment others

// What is Scope?

// Scope = where a variable can be used (accessed)

// Think:

// “Where can I use this variable in my code?”

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Now important think two understand what is function and block

// 1. function 
// We know below is the function 

function greet(){

}

// 2. Block
// Curly braces are the block

{}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 📦 Types of Scope in JS

// 1️. Global Scope :

// Variable declared outside any function or block.
// They can be accessed in function as well as block that is called Global Scope.
// Basically it can be use anywhere in the code.

let name = "Mangesh";

function globalScope(){
    console.log(name);
}

globalScope(); // Mangesh

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2️. Function Scope :

// Variable declared inside a function.
// Cannot be used outside the function

function functionScope(){
    let x = 10;
    console.log(x);
}

functionScope(); // 10
console.log(x); // Error

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Block Scope : (let, const)

// Variables inside { } (if, loop, etc.)
// Only available inside that block

if(true){
    let a = 5;
    console.log(a); // 5
}

// console.log(a); // Error

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// So as we know know what are scope so it will be easy to understand 

// var vs let vs const 

// 1. var :

var x = 10;

// Features:

// var is Function scoped
// Can be re-declared
// Can be updated

// Example : 

var string = "Mangesh"
var string = "MERN Developer"

console.log(string)

// Here we have tried to declared the same string using var and it is redeclared.
// Problem we face with var is it can create bugs.
// we avoid using var in modern JS, we mostly use let and const.

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2. let :

let a = 10;

// Features:
// Block scoped
// Cannot be re-declared
// Can be updated

let string1 = 10;
// let string1=30; // Error
string1 = 20; // allowed

// let x = 30; Error
console.log(string1)

// Here we have tried to reassign the same string1 using let and it is reassigned.
// We cannot redeclare varoable using let.

if(true){
    let y = 5;
}
// console.log(y); // Error (block scope)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3. const :

const string2 = 10;

// Features:

// Block scoped
// Cannot be re-declared
// Cannot be updated

// const string2 = 20; // it will give us error
// string2 = 20; // it will give us error

// Here we have tried to reassign the same string2 using const but we cannot redeclare nor reassign.

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Quick Comparison Table : (Got this from Chatgpt)

// | Feature    | var      | let     | const |
// | ---------- | -------- | -----   | ----- |
// | Scope      | Function | Block   | Block |
// | Re-declare | ✅       | ❌     | ❌    |
// | Update     | ✅       | ✅     | ❌    |
// | Use Today  | ❌ Avoid | ✅ Yes | ✅ Yes|
