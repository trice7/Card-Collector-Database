import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cards from '../../components/Cards';
import { getSetCards } from '../../api/cardData';
import StatBoard from '../../components/StatBoard';

const SetCards = () => {
  const [cards, setCards] = useState([]);
  const [uniqueCards, setUniqueCards] = useState(0);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSetCards(id).then((data) => {
      setCards(data[0]);
      setUniqueCards(data[0].length);
    });
  }, [id]);

  return (
    <div>
      <div>
        <StatBoard uniqueCards={uniqueCards} setInit={cards} />
      </div>
      <div className="card-container">
        {cards.map((obj) => (
          <Cards key={obj.id} card={obj} />
        ))}
      </div>
    </div>
  );
};

export default SetCards;
