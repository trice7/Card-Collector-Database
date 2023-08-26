import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
// import { getSingleCollection } from '../api/collectionData';
import { getCollectionCards } from '../api/cardData';

const Cards = ({ card, collectionId }) => {
  const [collection, setCollection] = useState();

  useEffect(() => {
    if (collectionId) {
      getCollectionCards(collectionId).then((data) => {
        const theCardArr = data.filter((item) => item.cardId === card.id);
        const theCard = theCardArr[0];
        setCollection(theCard);
      });
    }
  }, [collectionId, card]);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card.images?.small} />
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Text>
          {collection?.quantity}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

Cards.propTypes = {
  card: PropTypes.shape({
    data: PropTypes.string,
    images: PropTypes.string,
    small: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  collectionId: PropTypes.shape({
    firebaseKey: PropTypes.string,
  }).isRequired,
};

export default Cards;
