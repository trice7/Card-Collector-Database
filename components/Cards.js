// import { useRouter } from 'next/router';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { XCircle } from 'react-bootstrap-icons';
import { useEffect, useState } from 'react';
import { getSingleCollection } from '../api/collectionData';
import { deleteCollectionCard, getCollectionCards } from '../api/cardData';
import CardModal from './forms/CardModal';
import { useAuth } from '../utils/context/authContext';

const Cards = ({ card, collectionId, onUpdate }) => {
  const [collectionCard, setCollectionCard] = useState();
  const [collection, setCollection] = useState();
  const { user } = useAuth();
  // const router = useRouter();

  useEffect(() => {
    if (collectionId) {
      getCollectionCards(collectionId).then((data) => {
        const theCardArr = data.filter((item) => item.cardId === card.id);
        const theCard = theCardArr[0];
        setCollectionCard(theCard);
        getSingleCollection(theCard?.collectionId).then(setCollection);
      });
    }
  }, [collectionId, card]);

  const deleteCard = () => {
    if (window.confirm(`Delete all ${card.name} cards from ${collection.name}?`)) {
      deleteCollectionCard(collectionCard.firebaseKey).then(onUpdate);
    }
  };

  return (
    <Card className="card" style={{ width: '18rem' }}>
      <Card.Header>
        <div className="header-container">
          {card.name} | {collectionCard ? 'x' : ''}{collectionCard?.quantity}

          {collectionId && collection?.uid === user.uid ? (<CardModal classname="view-btn" obj={card} edit={collectionId} selectedCard={collectionCard} onUpdate={onUpdate} />) : (<CardModal className="view-btn" obj={card} />)}
          {collectionId && collection?.uid === user.uid ? (<XCircle type="button" onClick={deleteCard} />) : ''}
        </div>
      </Card.Header>
      <Card.Img variant="top" src={card.images?.small} />
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
  onUpdate: PropTypes.func.isRequired,
};

export default Cards;
