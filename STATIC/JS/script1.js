document.addEventListener("DOMContentLoaded", () => {
    const usuario = {
        id: 1,
        nome: "Ciclana",
        email: "ciclana@exemplo.com"
    };

    const usuarioJSON = JSON.stringify(usuario, null, 2);
    document.getElementById('jsonExemplo').textContent = usuarioJSON;
    console.log("Objeto recuperado:", JSON.parse(usuarioJSON));
});