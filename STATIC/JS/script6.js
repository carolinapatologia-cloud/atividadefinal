const btnThen = document.getElementById("btnThen");

btnThen.addEventListener("click", () => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(response => response.json())
        .then(data => {
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
        })
        .catch(error => console.error("Erro ao buscar Pokémon:", error));
});
const btnAsync = document.getElementById("btnAsync");

btnAsync.addEventListener("click", async() => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
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
        console.error("Erro ao buscar Pokémon:", error);
    }
});