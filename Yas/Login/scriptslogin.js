function validarLogin() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user === "yasmin" && pass === "amor10225") {
        window.location.href = "index.html";
    } else {
        document.getElementById("error").textContent = "Usuário ou senha incorretos!";
    }
}