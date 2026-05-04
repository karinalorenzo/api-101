async function getPokemon(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const response = await fetch(url);
    const data = await response.json();
  
    console.log("Nombre:", data.name);
    console.log("Altura:", data.height);
    console.log("Peso:", data.weight);
    console.log("Habilidades:");
    data.abilities.forEach(intem => {
      console.log("-", intem.ability.name);
    });
  }

  getPokemon("pikachu");
  getPokemon("bulbasaur");
  getPokemon("charizard");

  