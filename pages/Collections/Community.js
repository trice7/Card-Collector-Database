/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getPublicCollections } from '../../api/collectionData';
import CollectionCard from '../../components/CollectionCard';

const PublicCollections = () => {
  const [collections, setCollections] = useState([]);

  const displayCollections = () => {
    getPublicCollections().then(setCollections);
  };

  useEffect(() => {
    displayCollections();
  }, []);

  return (
    <div className="card-container">
      {collections.map((obj) => (
        <CollectionCard key={obj.firebaseKey} obj={obj} onUpdate={displayCollections} />
      ))}
    </div>
  );
};

export default PublicCollections;
