
function NavBar({ pokemonIndex, pokemonList, setPokemonIndex }) {
  const previousPokemon = () => {
    setPokemonIndex((pokemonIndex) => (pokemonIndex -1));
  };
    const nextPokemon = () => {
      setPokemonIndex((pokemonIndex) => (pokemonIndex +1 ));
    };

 return (
    <nav>
      {pokemonIndex>0 ? <button onClick={previousPokemon}>Précédent</button> : <p></p>}
      {pokemonIndex < pokemonList.length-1 ? <button onClick={nextPokemon}>Suivant</button> : <p></p>}
 </nav>
)}

export default NavBar;