const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", saludoUsuario)

function saludoUsuario(e) {
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
    const apellido = document.querySelector("#apellido").value

    const saludo = document.getElementById("saludo");

    saludo.textContent = `Hola ${nombre} ${apellido}`
}