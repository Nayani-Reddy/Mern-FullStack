function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (!storedUsername || !storedPassword) {
        alert("Please register first");
        return;
    }

    if (
        username === storedUsername &&
        password === storedPassword
    ) {

        localStorage.setItem("loggedIn", "true");

        window.location.href = "home.html";

    } else {

        alert("Invalid Username or Password");
    }
}