import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getCardSearch } from '../../../api/cardData';
import Cards from '../../../components/Cards';

const SearchResults = () => {
  const [cards, setCards] = useState('');
  const router = useRouter();
  const { result } = router.query;
  useEffect(() => {
    getCardSearch(result).then((data) => {
      setCards(data[0]);
    });
  }, [result]);
  console.warn(cards);
  console.warn('card search page');

  return (
    <div>
      {cards.length > 0 ? cards.map((obj) => (
        <Cards key={obj.id} card={obj} />
      )) : (<p>No cards found</p>)}
    </div>
  );
};

export default SearchResults;
