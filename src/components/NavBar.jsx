
function NavBar({ pokemonList, setPokemonIndex }) {
console.log (pokemonList)

 return (
    <nav>
       {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => setPokemonIndex(index)}>
          {pokemon.name}
        </button>
      ))}
 </nav>
)}

export default NavBar;