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



<div>
  <PokemonCard pokemon={pokemonList[0]} />
</div>

