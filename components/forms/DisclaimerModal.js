import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const DisclamierModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
  }, []);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Disclaimers
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
            <h3>Important Disclamiers</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>A note in pricing</h4>
          <p>All pricing is provided by tcgplayer.com</p>
          <p>Details on different pricing categories and their meanings can be found <a href="https://help.tcgplayer.com/hc/en-us/articles/222376867">here</a></p>

          <h4>Important note on links to tcgplayer.com</h4>
          <p>Note that the purpose of pricing display and links to tcgplayer.com is meant to be informational only. The creator of this app does not make any money on any purchases made through the links shown in this app and is not affiliated with either tcgplayer.com nor pokemontcgapi.io</p>

          <p>Links to tcgplayer.com are included by the creators of the pokemontcgapi and purchases made through these links may pay a commission to the creators of pokemontchapi.io.</p>

          <p>To view more information on this topic please visit <a href="https://help.tcgplayer.com/hc/en-us/articles/201577976-How-can-I-get-access-to-your-card-pricing-data-">tcgplayer.com</a></p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DisclamierModal;
