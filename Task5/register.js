function register() {

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value;

    if (
        username === "" ||
        email === "" ||
        password === "" ||
        phone === ""
    ) {
        alert("All fields are required");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration Successful");

    window.location.href = "login.html";
}