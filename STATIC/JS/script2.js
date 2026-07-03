const renderizarUsuario = (dados) => {
    const jsonFormatado = JSON.stringify(dados, null, 2);
    document.getElementById('jsonExemplo').textContent = jsonFormatado;
    console.log("Objeto recuperado:", JSON.parse(jsonFormatado));
};


document.addEventListener("DOMContentLoaded", () => {
    const usuario = {
        nome: "Ciclana",
        email: "ciclana@exemplo.com"
    };

    renderizarUsuario(usuario);
});