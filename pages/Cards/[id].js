import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cards from '../../components/Cards';
import { getSetCards } from '../../api/cardData';

const SetCards = () => {
  const [cards, setCards] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSetCards(id).then((data) => {
      setCards(data[0]);
    });
  });
  console.warn(cards);
  return (
    <div>
      {cards.map((obj) => (
        <Cards key={obj.id} card={obj} />
      ))}
    </div>
  );
};

export default SetCards;
