import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { deleteCollectionAndCards } from '../api/collectionData';
import { useAuth } from '../utils/context/authContext';

const CollectionCard = ({ obj, onUpdate }) => {
  const { user } = useAuth();

  const deleteThisCollection = () => {
    if (window.confirm(`Delete ${obj.name}? This will also remove all cards from this collection. This is irreversible`)) {
      deleteCollectionAndCards(obj.firebaseKey).then(onUpdate);
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={obj.img} />
      <Card.Body>
        <Card.Title>{obj.name}</Card.Title>

        <Link href={`/Collections/${obj.firebaseKey}`} passHref>
          <Button variant="primary">View Collection</Button>
        </Link>

        {obj.uid === user.uid ? (
          <Link href={`/Collections/edit/${obj.firebaseKey}`} passHref>
            <Button>Edit Collection</Button>
          </Link>
        ) : ''}
        {obj.uid === user.uid ? (<Button variant="danger" onClick={deleteThisCollection}>Delete Collection</Button>) : ''}
      </Card.Body>
    </Card>
  );
};

CollectionCard.propTypes = {
  obj: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    isPrivate: PropTypes.bool,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CollectionCard;
