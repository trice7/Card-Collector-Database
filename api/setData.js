const endpoint = 'https://api.pokemontcg.io/v2/sets';

const getAllSets = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export default getAllSets;
