import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';

const CardData = ({ obj }) => {
  const priceKeys = Object.keys(obj?.tcgplayer.prices);
  return (
    <div className="modal-data-container">
      <div>
        <Table bordered hover size="sm">
          <h3>Card Stats</h3>
          <tbody>
            <tr>
              <th>Name:</th>
              <td>{obj.name}</td>
            </tr>
            <tr>
              <th>Artist:</th>
              <td>{obj.artist}</td>
            </tr>
            <tr>
              <th>Set:</th>
              <td>{obj.set?.name}</td>
            </tr>
            <tr>
              <th>Rarity:</th>
              <td>{obj.rarity}</td>
            </tr>
            <tr>
              <th>Released:</th>
              <td>{obj.set?.releaseDate}</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div>
        <h3>Prices</h3>

        <div className="priceing-container">
          {priceKeys?.map((category) => (
            <Table bordered hover size="sm">
              <tbody>
                <tr>
                  <th colSpan={2}>{category}</th>
                </tr>
                <tr>
                  <th>Low:</th>
                  <td>${obj.tcgplayer.prices[category].low}</td>
                </tr>
                <tr>
                  <th>Mid:</th>
                  <td>${obj.tcgplayer.prices[category].mid}</td>
                </tr>
                <tr>
                  <th>High:</th>
                  <td>${obj.tcgplayer.prices[category].high}</td>
                </tr>
                <tr>
                  <th>Market:</th>
                  <td>${obj.tcgplayer.prices[category].market}</td>
                </tr>
              </tbody>
            </Table>
          ))}
        </div>
      </div>
      <p>Price as of: {obj.tcgplayer.updatedAt}</p>
    </div>
  );
};

CardData.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    set: PropTypes.string,
    rarity: PropTypes.string,
    artist: PropTypes.string,
    tcgplayer: PropTypes.string,
  }).isRequired,
};

export default CardData;
