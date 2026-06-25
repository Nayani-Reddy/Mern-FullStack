if (localStorage.getItem("loggedIn") !== "true") {

    window.location.href = "login.html";
}

let username = localStorage.getItem("username");

document.getElementById("welcome").innerText =
`Welcome, ${username}`;

function logout() {

    localStorage.removeItem("loggedIn");

    alert("Logged out successfully");

    window.location.href = "login.html";
}