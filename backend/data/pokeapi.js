// -----------------------------
// EJERCICIO 1 - Llamada a una API
//

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

/*   getPokemon("pikachu");
  getPokemon("bulbasaur");
  getPokemon("charizard");   */

  // -----------------------------
// EJERCICIO 2 - Lista de Pokémon
// -----------------------------

async function listPokemons() {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(url);
  const data = await response.json();

  console.log("Pokémon con nombre y URL:");
  data.results.forEach(pokemon => {
    console.log("-", pokemon.name, "| URL:", pokemon.url);
  });
}

 // listPokemons(); 

// -------------------------------------------
// EJERCICIO 3 - Paso 1: Pedir 5 Pokémon
// -------------------------------------------

// -------------------------------------------------------------
// EJERCICIO 3 - Paso 3: Mostrar nombres según limit y offset
// -------------------------------------------------------------

async function listPokemonsWithParams(limit, offset) {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const response = await fetch(url);
  const data = await response.json();

  console.log(`Pokémon recibidos (limit=${limit}, offset=${offset}):`);
  data.results.forEach(pokemon => {
    console.log("-", pokemon.name);
  });
}

// Ejemplos para activar:
listPokemonsWithParams(5, 0);
listPokemonsWithParams(10, 20);
