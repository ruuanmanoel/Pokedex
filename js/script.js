const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');
const form = document.querySelector('.form');
const input = document.querySelector('.input_search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let searchPokemon = 1;

const fetchPokemon = async (pokemon)=>{
    const APIResponse = await fetch(`http://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if(APIResponse.status === 200){
        const data = await APIResponse.json();
        return data;
    }
}

const renderPokemon = async (pokemon)=>{
    pokemonName.innerHTML = 'Loading'
    pokemonNumber.innerHTML = ''
    const data = await fetchPokemon(pokemon)
    if(data){
        pokemonImage.style.display = 'block'
        pokemonNumber.innerHTML = searchPokemon = data.id;
        pokemonName.innerHTML = data.name;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    }else{
        pokemonName.innerHTML = "Not Found:"
        pokemonNumber.innerHTML = ''
        pokemonImage.style.display = 'none'
    }
}
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    renderPokemon(input.value.toLowerCase())
    input.value = ''

})
buttonPrev.addEventListener('click',()=>{
    if(searchPokemon>1){
        searchPokemon--
        renderPokemon(searchPokemon)
    }
})
buttonNext.addEventListener('click',()=>{
    searchPokemon++
    renderPokemon(searchPokemon)
})
renderPokemon(searchPokemon)