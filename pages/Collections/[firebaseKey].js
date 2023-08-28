/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCard, getCollectionCards } from '../../api/cardData';
import Cards from '../../components/Cards';

const CollectionCards = () => {
  const [collection, setCollection] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;

  const getCollectionContents = () => {
    getCollectionCards(firebaseKey).then((data) => {
      setCollection([]);
      data.forEach((obj) => {
        getCard(obj.cardId).then((item) => {
          setCollection((prevState) => [...prevState, item.data]);
        });
      });
    });
  };

  useEffect(() => {
    getCollectionContents();
  }, []);

  // console.warn(cards);
  return (
    <>
      {collection.map((obj) => (
        <Cards key={obj.id} card={obj} collectionId={firebaseKey} onUpdate={getCollectionContents} />
      ))}
    </>
  );
};

export default CollectionCards;
