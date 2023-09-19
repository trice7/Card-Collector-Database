import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getCardDex } from '../../../api/cardData';
import Cards from '../../../components/Cards';

const DisplayByDexNumber = () => {
  const [char, setChar] = useState();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    getCardDex(id).then((data) => {
      setChar(data[0]);
    });
  }, [id]);

  return (
    <div>
      {char?.map((data) => (
        <Cards card={data} key={data.id} />
      ))}
    </div>
  );
};

export default DisplayByDexNumber;
