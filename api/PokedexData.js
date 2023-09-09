const pokedex = () => new Promise((resolve, reject) => {
  fetch('https://pokeapi.deno.dev/pokemon?limit=905', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export default pokedex;
