function handleSubmit(event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("errorMessage");


    // error message if inputs are empty
    if (username === "" || password === "") {
        error.textContent = "Please fill in all fields";
        return;
    }

    // error message if password is too short

    if (password.length < 8) {
        error.textContent = "Password must be at least 8 characters";
        return;
    }



    error.textContent = "";
    error.textContent = "Success!";
    console.log("Username:", username);
    console.log("Password:", password);


    // clears inputs if login worked
    document.getElementById("loginForm").reset();



}