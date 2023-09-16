// import { useState } from 'react';
import PropTypes from 'prop-types';

const StatBoard = ({ cardSum, uniqueCards }) => {
  // const [placeholder, setPlaceholder] = useState('placeholder');

  console.warn(`cardSum is ${cardSum}`);
  console.warn(`uniqueCard is ${uniqueCards}`);

  return (
    <div>
      <p>Total cards in this collection: {cardSum}</p>
      <p>Unique cards in this collection: {uniqueCards}</p>
    </div>
  );
};

export default StatBoard;

StatBoard.propTypes = {
  cardSum: PropTypes.number,
  uniqueCards: PropTypes.number.isRequired,
};

StatBoard.defaultProps = {
  cardSum: 0,
};
