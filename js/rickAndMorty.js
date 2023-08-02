import { showCharacters } from "./showCharaters.js";


function rickAndMortyApi() {

  fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      showCharacters(data.results);
    });

  
}

export default rickAndMortyApi;
