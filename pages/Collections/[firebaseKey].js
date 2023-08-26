import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCard, getCollectionCards } from '../../api/cardData';
import Cards from '../../components/Cards';

const CollectionCards = () => {
  const [collection, setCollection] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getCollectionCards(firebaseKey).then((data) => {
      data.forEach((obj) => {
        getCard(obj.cardId).then((item) => {
          setCollection((prevState) => [...prevState, item.data]);
        });
      });
    });
  }, [firebaseKey]);

  // console.warn(cards);
  return (
    <>
      {collection.map((obj) => (
        <Cards key={obj.id} card={obj} collectionId={firebaseKey} />
      ))}
    </>
  );
};

export default CollectionCards;
