const btnBuscar = document.getElementById("btnBuscar");

btnBuscar.addEventListener("click", async() => {
    try {

        const response = await fetch("https://pokeapi.co/api/v2/pokemon_invalido");


        if (!response.ok) {
            throw new Error("Resposta inválida da API");
        }

        const data = await response.json();

        const tbody = document.getElementById("listaPokemons");
        tbody.innerHTML = "";

        const linha = document.createElement("tr");
        linha.innerHTML = `
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.base_experience}</td>
            <td>${data.types.map(t => t.type.name).join(", ")}</td>
        `;
        tbody.appendChild(linha);

    } catch (error) {
        console.error("Erro ao buscar usuários:", error);


        const tbody = document.getElementById("listaPokemons");
        tbody.innerHTML = `<tr><td colspan="4">Erro ao buscar usuários</td></tr>`;
    }
});