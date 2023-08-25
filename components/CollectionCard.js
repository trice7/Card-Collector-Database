import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import PropTypes from 'prop-types';

const CollectionCard = ({ obj }) => {
  console.warn('collection card');

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={obj.img} />
      <Card.Body>
        <Card.Title>{obj.name}</Card.Title>
        <Button variant="primary">View Collection</Button>

        <Link href={`/Collections/edit/${obj.firebaseKey}`} passHref>
          <Button>Edit Collection</Button>
        </Link>
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
  }).isRequired,
};

export default CollectionCard;
