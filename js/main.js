const loggedUser = localStorage.getItem("loggedUser")
if(loggedUser === null) {
    window.location.href = "../sign/sign.html"
}

function logOut() {
    localStorage.removeItem("loggedUser");
    window.location.href = "../index.html"
}