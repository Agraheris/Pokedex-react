import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0)
  const previousPokemon = () => {
    setPokemonIndex((pokemonIndex) => (pokemonIndex -1));
  };
    const nextPokemon = () => {
      setPokemonIndex((pokemonIndex) => (pokemonIndex +1 ));
    };
    return (
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        <div>
          {pokemonIndex >0 ? <button onClick={previousPokemon}>Précédent</button> : <p></p>}
          {pokemonIndex <pokemonList.length-1 ? <button onClick={nextPokemon}>Suivant</button> : <p></p>}
        </div>
      </div>
    );
  }

export default App
