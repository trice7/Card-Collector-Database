/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useAuth } from '../../utils/context/authContext';
import { getUserCollections } from '../../api/collectionData';
import CollectionCard from '../../components/CollectionCard';

const Collections = () => {
  const [myCollections, setMyCollections] = useState([]);
  const { user } = useAuth();

  const displayCollections = () => {
    getUserCollections(user.uid).then(setMyCollections);
  };

  useEffect(() => {
    displayCollections();
  }, []);

  return (
    <div className="card-container">
      {myCollections.map((obj) => (
        <CollectionCard key={obj.firebaseKey} obj={obj} onUpdate={displayCollections} />
      ))}
    </div>
  );
};

export default Collections;
