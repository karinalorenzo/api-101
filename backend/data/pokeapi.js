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


// ---------------------------------------------
// EJERCICIO 2 - Parte 1: Mostrar solo los nombres
// ---------------------------------------------
async function showOnlyNames() {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(url);
  const data = await response.json();

  console.log("Nombres de Pokémon:");
  data.results.forEach(pokemon => {
    console.log("-", pokemon.name);
  });
}

// showOnlyNames();

// -----------------------------------------------------------
// EJERCICIO 2 - Parte 2: Ver propiedades de cada elemento
// -----------------------------------------------------------
async function inspectResultProperties() {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(url);
  const data = await response.json();

  console.log("Propiedades de un elemento de results:");
  console.log(Object.keys(data.results[0]));
}

// inspectResultProperties();

// ----------------------------------------------------------------------
// EJERCICIO 2 - Parte 3: Mostrar la URL de detalle (sin usarla todavía)
// ----------------------------------------------------------------------
async function showDetailURLs() {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(url);
  const data = await response.json();

  console.log("URLs de detalle de cada Pokémon:");
  data.results.forEach(pokemon => {
    console.log("-", pokemon.url);
  });
}

// showDetailURLs();

// -------------------------------------------------------------
// EJERCICIO 2 - Parte 4: Mostrar nombre y URL de cada Pokémon
// -------------------------------------------------------------
async function showNamesAndURLs() {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(url);
  const data = await response.json();

  console.log("Pokémon con nombre y URL:");
  data.results.forEach(pokemon => {
    console.log("-", pokemon.name, "| URL:", pokemon.url);
  });
}

// showNamesAndURLs();

// ---------------------------------------------
// EJERCICIO 3 - Parte 1: Pedir 5 Pokémon
// ---------------------------------------------
async function getFivePokemons() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=5";
  const response = await fetch(url);
  const data = await response.json();

  console.log("Primeros 5 Pokémon:");
  data.results.forEach(pokemon => {
    console.log("-", pokemon.name);
  });
}

// getFivePokemons();

// -------------------------------------------------------------
// EJERCICIO 3 - Parte 2: Pedir 10 Pokémon desde el número 20
// -------------------------------------------------------------
async function getTenFromTwenty() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=20";
  const response = await fetch(url);
  const data = await response.json();

  console.log("10 Pokémon desde el número 21:");
  data.results.forEach(pokemon => {
    console.log("-", pokemon.name);
  });
}

// getTenFromTwenty();

// ----------------------------------------------------------------------
// EJERCICIO 3 - Parte 3: Mostrar nombres según limit y offset recibidos
// ----------------------------------------------------------------------
async function listPokemonsWithParams(limit, offset) {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const response = await fetch(url);
  const data = await response.json();

  console.log(`Pokémon recibidos (limit=${limit}, offset=${offset}):`);
  data.results.forEach(pokemon => {
    console.log("-", pokemon.name);
  });
}

// Ejemplos:
// listPokemonsWithParams(5, 0);
// listPokemonsWithParams(10, 20);
