import PokemonCard from "./components/PokemonCard";

const pokemonList = [
  {
      name: "bulbasur",
      imgsrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
      name: "mew"
  },
];

const App = () => {
  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
    </div>
  );
};

export default App; 
