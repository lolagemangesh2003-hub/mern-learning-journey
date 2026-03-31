// Password Validation Logic

// Rules:
// 1. At least 8 characters
// 2. One uppercase letter
// 3. One number

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

function validatePassword(password){

    // Rule 1: Length Checking
    if(password.length < 8){
        return "Password must be at least 8 characters";
    }

    // Rule 2: Checking uppercase letter
    let hasUpper = false;

    for(let i = 0; i < password.length; i++){
        if(password[i] >= 'A' && password[i] <= 'Z'){
            hasUpper = true;
            break;
        }
    }

    if(!hasUpper){
        return "Password must contain at least one uppercase letter";
    }

    // Rule 3: Checking number
    let hasNumber = false;

    for(let i = 0; i < password.length; i++){
        if(password[i] >= '0' && password[i] <= '9'){
            hasNumber = true;
            break;
        }
    }

    if(!hasNumber){
        return "❌ Password must contain at least one number";
    }

    return "Password is valid";
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Test Cases

console.log(validatePassword("abc"));         // too short
console.log(validatePassword("abcdefgh"));    // no uppercase, no number
console.log(validatePassword("Abcdefgh"));    // no number
console.log(validatePassword("Abcd1234"));    // valid

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------