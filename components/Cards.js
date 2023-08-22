import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Cards = ({ card }) => {
  console.warn('on card page');

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={card.images?.small} />
      <Card.Body>
        <Card.Title>{card.name}</Card.Title>
        <Card.Text>
          testing
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
  }).isRequired,
};

export default Cards;
