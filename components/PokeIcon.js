import Image from 'next/image';
import PropTypes from 'prop-types';

const PokeIcon = ({ handleShow }) => (
  <Image
    src="/poke_ball_icon.svg"
    alt="Pokeball button"
    width={20}
    height={20}
    type="button"
    onClick={handleShow}
  />
);

PokeIcon.propTypes = {
  handleShow: PropTypes.func.isRequired,
};

export default PokeIcon;
