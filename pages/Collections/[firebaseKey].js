/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCard, getCollectionCards } from '../../api/cardData';
import Cards from '../../components/Cards';
import StatBoard from '../../components/StatBoard';

const CollectionCards = () => {
  const [collection, setCollection] = useState([]);
  const [cardSum, setCardSum] = useState(0);
  const [uniqueCards, setUniqueCards] = useState(0);
  const router = useRouter();
  const { firebaseKey } = router.query;

  const getCollectionContents = () => {
    getCollectionCards(firebaseKey).then((data) => {
      setCollection([]);
      setUniqueCards(data.length);
      data.forEach((obj) => {
        getCard(obj.cardId).then((item) => {
          setCollection((prevState) => [...prevState, item.data]);
        });
      });
    });
  };

  const getCardSum = () => {
    getCollectionCards(firebaseKey).then((data) => {
      let sum = cardSum;
      data.forEach((card) => {
        sum += Number(card.quantity);
      });
      setCardSum(sum);
    });
  };

  useEffect(() => {
    getCollectionContents();
    getCardSum();
  }, []);

  return (
    <div>
      <div>
        <StatBoard cardSum={cardSum} uniqueCards={uniqueCards} />
      </div>
      <div>
        {collection.map((obj) => (
          <Cards key={obj.id} card={obj} collectionId={firebaseKey} onUpdate={getCollectionContents} />
        ))}
      </div>
    </div>
  );
};

export default CollectionCards;
