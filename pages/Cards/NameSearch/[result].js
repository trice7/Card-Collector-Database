import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getCardSearch } from '../../../api/cardData';
import Cards from '../../../components/Cards';
import StatBoard from '../../../components/StatBoard';

const SearchResults = () => {
  const [cards, setCards] = useState('');
  const [resultNum, setResultNum] = useState(0);
  const router = useRouter();
  const { result } = router.query;
  useEffect(() => {
    getCardSearch(result).then((data) => {
      setCards(data[0]);
      setResultNum(data[0].length);
    });
  }, [result]);

  return (
    <div>
      <div>
        <StatBoard results={resultNum} />
      </div>
      <div>
        {cards.length > 0 ? cards.map((obj) => (
          <Cards key={obj.id} card={obj} />
        )) : (<p>No cards found</p>)}
      </div>
    </div>
  );
};

export default SearchResults;
