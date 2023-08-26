import { clientCredentials } from '../utils/client';

const fbEndpoint = clientCredentials.databaseURL;
const endpoint = 'https://api.pokemontcg.io/v2/cards';

const getCard = (cardId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/${cardId}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSetCards = (setId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/?q=set.id:${setId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getCollectionCards = (collectionId) => new Promise((resolve, reject) => {
  fetch(`${fbEndpoint}/collectionCards.json?orderBy="collectionId"&equalTo="${collectionId}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const createCollectionCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${fbEndpoint}/collectionCards.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateCollectionCard = (payload) => new Promise((resolve, reject) => {
  fetch(`${fbEndpoint}/collectionCards/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application.json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteCollectionCard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${fbEndpoint}/collectionCards/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getCard,
  getSetCards,
  getCollectionCards,
  createCollectionCard,
  updateCollectionCard,
  deleteCollectionCard,
};
