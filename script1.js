document.addEventListener("DOMContentLoaded", function() {

    const usuario = {
        id: 1,
        nome: "Carol",
        email: "carol@exemplo.com"
    };
    const usuarioJSON = JSON.stringify(usuario, null, 2);
    document.getElementById('jsonExemplo').textContent = usuarioJSON;
    const usuarioObjetoReparsado = JSON.parse(usuarioJSON);
    console.log("Objeto após JSON.parse():", usuarioObjetoReparsado);
});