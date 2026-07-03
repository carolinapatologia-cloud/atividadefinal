const btnBuscar = document.getElementById("btnBuscar");
const tabelaPokemon = document.getElementById("listaUsuarios");

const buscarPokemon = async() => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");


        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const { id, name, base_experience, types } = await response.json();
        const tiposFormatados = types.map(t => t.type.name).join(", ");

        tabelaPokemon.innerHTML = `
            <tr>
                <td>${id}</td>
                <td class="capitalize">${name}</td>
                <td>${base_experience} XP</td>
                <td>${tiposFormatados}</td>
            </tr>
        `;

    } catch (error) {
        console.error("Erro na API dos Pokémon:", error);

        tabelaPokemon.innerHTML = `
            <tr>
                <td colspan="4" class="status-erro">
                    Não foi possível carregar os dados. Por favor, tente novamente mais tarde.
                </td>
            </tr>
        `;
    }
};


btnBuscar.addEventListener("click", buscarPokemon);