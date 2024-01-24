const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number')
const fetchPokemon = async (pokemon)=>{
    const APIResponse = await fetch(`http://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIResponse.json();
    return data;
}

const renderPokemon = async (pokemon)=>{
    const data = await fetchPokemon(pokemon)
    pokemonNumber.innerHTML = data.id;
    pokemonName.innerHTML = data.name;
}

renderPokemon(25)