import { clientCredentials } from '../utils/client';
import { deleteCollectionCard } from './cardData';

const endpoint = clientCredentials.databaseURL;

const getUserCollections = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/collections.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteCollection = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/collections/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getSingleCollection = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/collections/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createCollection = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/collections.json`, {
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

const updateCollection = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/collections/${payload.firebaseKey}.json`, {
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

const getCollectionsCards = (collectionId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/collectionCards.json?orderBy="collectionId"&equalTo="${collectionId}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteCollectionAndCards = (collectionId) => new Promise((resolve, reject) => {
  getCollectionsCards(collectionId).then((cardArr) => {
    const deleteCardPromises = cardArr.map((card) => deleteCollectionCard(card.firebaseKey));

    Promise.all(deleteCardPromises).then(() => {
      deleteCollection(collectionId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export {
  getUserCollections,
  deleteCollection,
  getSingleCollection,
  createCollection,
  updateCollection,
  deleteCollectionAndCards,
};
