import { useEffect, useState } from 'react';
import { useAuth } from '../../utils/context/authContext';
import { getUserCollections } from '../../api/collectionData';
import CollectionCard from '../../components/CollectionCard';

const Collections = () => {
  const [myCollections, setMyCollections] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    getUserCollections(user.uid).then(setMyCollections);
  }, [user]);

  return (
    <div>
      {myCollections.map((obj) => (
        <CollectionCard key={obj.firebaseKey} obj={obj} />
      ))}
    </div>
  );
};

export default Collections;
