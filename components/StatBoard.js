// import { useState } from 'react';
import PropTypes from 'prop-types';

const StatBoard = ({
  cardSum,
  uniqueCards,
  setInit,
  results,
}) => (
  <div className="poke-border">
    <div className="stat-container">
      {results ? (<p>Cards found: {results}</p>) : ''}
      {setInit || results ? '' : (<p>Total cards in this collection: {cardSum}</p>)}
      {results ? '' : (<p>Unique cards in this {setInit ? 'set' : 'collection'}: {uniqueCards}</p>)}
    </div>
  </div>
);

export default StatBoard;

StatBoard.propTypes = {
  cardSum: PropTypes.number,
  uniqueCards: PropTypes.number,
  results: PropTypes.number,
  setInit: PropTypes.shape({
    id: PropTypes.string,
  }),
};

StatBoard.defaultProps = {
  cardSum: '',
  setInit: '',
  results: '',
  uniqueCards: 0,
};
