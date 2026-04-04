// User login Logic

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Function to create user

function createAccount(name, email, password){

    // For validation

    if(name === "" || email === "" || password === ""){
        return "All fields are required";
    }

    if(password.length < 6){
        return "Password must be at least 6 characters";
    }

    // Creating user

    let user = {
        name: name,
        email: email,
        password: password,
        isLoggedIn: false
    };

    return user;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Outout

console.log(createAccount("Mangesh", "test@gmail.com", "12345"));
// Password too short

console.log(createAccount("Mangesh", "test@gmail.com", "123456"));
// User object created

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------