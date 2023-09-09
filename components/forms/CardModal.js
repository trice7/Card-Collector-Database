import { useEffect, useState } from 'react';
import { Card, FloatingLabel, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';
import { getUserCollections } from '../../api/collectionData';
import { useAuth } from '../../utils/context/authContext';
import { createCollectionCard, updateCollectionCard } from '../../api/cardData';
import CardData from '../CardData';

const initialState = {
  cardId: '',
  collectionId: '',
  quantity: 1,
};

const CardModal = ({ obj, edit, selectedCard }) => {
  const [show, setShow] = useState(false);
  const [collections, setCollections] = useState([]);
  const [formInput, setFormInput] = useState(initialState);

  const handleClose = () => {
    setFormInput(initialState);
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const { user } = useAuth();

  useEffect(() => {
    getUserCollections(user.uid).then(setCollections);

    if (selectedCard.firebaseKey) setFormInput(selectedCard);
  }, [user, selectedCard]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.warn(formInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      updateCollectionCard(formInput).then(handleClose);
    } else {
      const payload = { ...formInput, uid: user.uid, cardId: obj.id };
      createCollectionCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateCollectionCard(patchPayload).then(handleClose);
      });
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View Card
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {obj.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body-container">
            <div>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={obj.images?.small} />
              </Card>
            </div>
            <div>
              <CardData obj={obj} />
            </div>
          </div>
          <Form>
            <FloatingLabel controlId="floatingSelect" label="Add Card to Collection">
              <Form.Select
                aria-label="collection"
                name="collectionId"
                onChange={handleChange}
                className="mb-3"
                required
              >
                <option value="">Select a collection</option>
                {
                  collections.map((item) => (
                    <option
                      key={item.firebaseKey}
                      value={item.firebaseKey}
                    >
                      {item.name}
                    </option>
                  ))
                }
              </Form.Select>
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput4" label="Quantity" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Quantity"
                aria-label="Quantity"
                name="quantity"
                value={formInput.quantity}
                onChange={handleChange}
              />
            </FloatingLabel>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit}>{edit ? 'Update Card' : 'Add card to collection'}</Button>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

CardModal.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    images: {
      small: PropTypes.string,
    },
    id: PropTypes.string,
  }).isRequired,
  edit: PropTypes.shape({
    firebaseKey: PropTypes.string,
  }),
  selectedCard: PropTypes.shape({
    firebaseKey: PropTypes.string,
  }),
};

CardModal.defaultProps = {
  edit: '',
  selectedCard: '',
};

export default CardModal;
