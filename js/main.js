const loggedUser = localStorage.getItem("loggedUser");
if (loggedUser === null) {
    window.location.href = "../sign/sign.html";
}

function logOut() {
    localStorage.removeItem("loggedUser");
    window.location.href = "../index.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const loggedUser = localStorage.getItem("loggedUser");
    if (loggedUser !== null) {
        const userDataJSON = JSON.parse(loggedUser);
        const usernameElement = document.getElementById("username");
        usernameElement.textContent = userDataJSON.name;
    }
});

