let apiURL = "https://pokeapi.co/api/v2/pokemon-species/aegislash"; // URL

        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const typeList = document.getElementById('type-list');
                const abilityList = document.getElementById('ability-list');

                // Display types
                data.types.forEach(typeInfo => {
                    const typeItem = document.createElement('li');
                    typeItem.textContent = typeInfo.type.name;
                    typeList.appendChild(typeItem);
                });

                // Display abilities
                data.abilities.forEach(abilityInfo => {
                    const abilityItem = document.createElement('li');
                    abilityItem.textContent = `${abilityInfo.ability.name}: ${abilityInfo.is_hidden ? 'Hidden' : 'Normal'}`;
                    abilityList.appendChild(abilityItem);
                });
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });