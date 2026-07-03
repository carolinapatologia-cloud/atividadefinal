fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then(response => response.json())
    .then(data => {

        console.log(data);
        console.log("Nome:", data.name);
        console.log("Habilidades:");
        data.abilities.forEach(ability => {
            console.log("-", ability.ability.name);
        });
    })
    .catch(error => console.error("Erro ao buscar Pokémon:", error));