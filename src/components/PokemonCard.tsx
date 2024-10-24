
const PokemonCard = ({ pokemon }) => { 
   
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

