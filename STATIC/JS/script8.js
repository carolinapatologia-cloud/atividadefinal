const btnThen = document.getElementById("btnThen");

btnThen.addEventListener("click", () => {
    const tbody = document.getElementById("listaPokemons");
    const msgErro = document.getElementById("mensagemErro");


    tbody.innerHTML = "";
    msgErro.textContent = "";

    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(response => {
            if (!response.ok) throw new Error("Erro na resposta da API");
            return response.json();
        })
        .then(data => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.base_experience}</td>
                <td>${data.types.map(t => t.type.name).join(", ")}</td>
            `;
            tbody.appendChild(linha);
        })
        .catch(error => {
            console.error("Erro ao buscar usuários:", error);
            msgErro.textContent = "Erro ao buscar usuários";
        });
});