fetch('https://pokeapi.co/api/v2/pokemon?limit=10') // Fetching first 10 Pokémon
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('pokemon-info');
            data.results.forEach(pokemon => {
                fetch(pokemon.url)
                    .then(res => res.json())
                    .then(pokemonData => {
                        const pokemonDiv = document.createElement('div');
                        pokemonDiv.className = 'pokemon-container';

                        // Name
                        const name = document.createElement('h2');
                        name.textContent = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
                        pokemonDiv.appendChild(name);

                        // Image
                        const img = document.createElement('img');
                        img.src = pokemonData.sprites.front_default;
                        img.alt = `${pokemonData.name} image`;
                        pokemonDiv.appendChild(img);

                        // Abilities
                        const abilities = document.createElement('p');
                        abilities.className = 'abilities';
                        abilities.textContent = 'Abilities: ' + pokemonData.abilities.map(ab => ab.ability.name).join(', ');
                        pokemonDiv.appendChild(abilities);

                        container.appendChild(pokemonDiv);
                    });
            });
        })
        .catch(error => console.error('Error fetching data:', error));