import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getSingleCollection } from '../api/collectionData';
import { deleteCollectionCard, getCollectionCards } from '../api/cardData';
import CardModal from './forms/CardModal';

const Cards = ({ card, collectionId }) => {
  const [collectionCard, setCollectionCard] = useState();
  const [collection, setCollection] = useState();

  useEffect(() => {
    if (collectionId) {
      getCollectionCards(collectionId).then((data) => {
        const theCardArr = data.filter((item) => item.cardId === card.id);
        const theCard = theCardArr[0];
        setCollectionCard(theCard);
        getSingleCollection(theCard.collectionId).then(setCollection);
      });
    }
  }, [collectionId, card]);

  const deleteCard = () => {
    if (window.confirm(`Delete all ${card.name} cards from ${collection.name}?`)) {
      deleteCollectionCard(collection.firebaseKey).then();
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card.images?.small} />
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Text>
          {collection?.quantity}
        </Card.Text>
        {collectionId ? (<CardModal obj={card} edit={collectionId} selectedCard={collectionCard} />) : (<CardModal obj={card} />)}
        {collectionId ? (<Button variant="danger" onClick={deleteCard}>Remove Card</Button>) : ''}
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
