import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleCollection } from '../../../api/collectionData';
import CollectionForm from '../../../components/forms/CollectionForm';

const EditCollection = () => {
  const [collection, setCollections] = useState([]);
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleCollection(firebaseKey).then(setCollections);
  }, [firebaseKey]);

  return (<CollectionForm obj={collection} />);
};

export default EditCollection;
