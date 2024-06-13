
function NavBar({ pokemonList, setPokemonIndex }) {
 return (
    <nav>
       {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => {setPokemonIndex(index)}}>
          {pokemon.name}
        </button>
      ))}
 </nav>
)}

export default NavBar;