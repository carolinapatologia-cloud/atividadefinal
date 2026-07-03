const btnBuscar = document.getElementById("btnBuscar");

btnBuscar.addEventListener("click", async() => {
    try {

        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
        const data = await response.json();

        console.log(data);

        const tbody = document.getElementById("listaUsuarios");
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