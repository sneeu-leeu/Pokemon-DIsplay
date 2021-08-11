import { newElem, newDiv, grab } from './support.js';

class PokemonContainer {
  constructor(pokemonImage, pokemonName, pokemonLikes, pokemonId) {
    this.pokemonImage = pokemonImage;
    this.pokemonName = pokemonName;
    this.pokemonLikes = `${pokemonLikes} Likes`;
    this.pokemonId = pokemonId;
  }

  display() {
    const pokeDisplay = grab('Pokemon-display');
    pokeDisplay.classList.add('grid-container');

    const container = newDiv();
    container.classList.add('grid-item');

    const pokemonImg = newElem('img');
    pokemonImg.src = this.pokemonImage;
    pokemonImg.classList.add('pokemon-img');

    const pokemonName = newElem('p');
    pokemonName.classList.add('m-bot-5');
    pokemonName.innerText = this.pokemonName;
    const numLikes = newElem('p');
    numLikes.classList.add('m-bot-5');
    numLikes.innerText = this.pokemonLikes;

    const likeButton = newElem('i');
    likeButton.classList.add('far', 'fa-heart');

    const infoDiv = newDiv();
    infoDiv.classList.add('flex', 'info-div-align');
    infoDiv.append(pokemonName, likeButton);
    const commentButton = newElem('button');
    commentButton.classList.add('m-top-5');
    commentButton.innerText = 'Comment';

    container.append(pokemonImg, infoDiv, numLikes, commentButton);
    pokeDisplay.append(container);
  }
}

const displayPokemon = (pokemon) => {
  pokemon.forEach((poke) => {
    const pokemonContainer = new PokemonContainer(
      poke.sprites.other.dream_world.front_default,
      poke.name,
      0,
      poke.id,
    );
    pokemonContainer.display();
  });
};

export default displayPokemon;