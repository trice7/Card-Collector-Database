import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';

const SetCard = ({ obj }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={obj.images?.logo} />
    <Card.Body>
      <Card.Title>{obj.name}</Card.Title>
      <Link href={`/Cards/${obj.id}`} passHref>
        <Button variant="primary">View Cards</Button>
      </Link>
    </Card.Body>
  </Card>
);

SetCard.propTypes = {
  obj: PropTypes.shape({
    data: PropTypes.string,
    images: PropTypes.string,
    logo: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default SetCard;
