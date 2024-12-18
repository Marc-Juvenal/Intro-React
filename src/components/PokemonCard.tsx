 props.2
interface Pokemon {
    name: string; // propriété requise
    imgsrc?: string; // propriété optionnelle
}

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


const PokemonCard = () => {
    // Modification de la variable pokemon pour utiliser le deuxième Pokémon de pokemonList
    const pokemon = pokemonList[1]; // Mew
 main

const PokemonCard = ({ pokemon }: { pokemon: Pokemon }) => { 
   
    return (
        <div>
            <h1>{pokemon.name}</h1>
            {pokemon.imgsrc ? (
                <img src={pokemon.imgsrc} alt={pokemon.name} />
            ) : (
                <p>???</p>
            )}
        </div>
    );




// return (
//   <figure>
//     <img src={pokemon.imgSrc} alt={pokemon.name} />
//   <figcaption>
//     {pokemon.name}
// </figcaption>
// </figure>
// );

}

export default PokemonCard;
