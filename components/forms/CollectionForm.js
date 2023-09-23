import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useAuth } from '../../utils/context/authContext';
import { createCollection, updateCollection } from '../../api/collectionData';

const initialState = {
  img: '',
  name: '',
  isPrivate: true,
};

const CollectionForm = ({ obj }) => {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();
  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const boolConversion = (value) => {
    if (value === 'true') {
      return true;
    }
    if (value === 'false') {
      return false;
    }
    return value;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    const bool = boolConversion(e.target.value);
    // boolConversion(e.target.value);
    setFormInput((prevState) => ({
      ...prevState,
      isPrivate: bool,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateCollection(formInput).then(() => router.push('/Collections/Collections'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createCollection(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateCollection(patchPayload).then(() => {
          router.push('/Collections/Collections');
        });
      });
    }
  };

  return (
    <div className="poke-border">
      <Form onSubmit={handleSubmit} className="collection-form">

        <h2>Create Collection</h2>

        <FloatingLabel controlId="" label="" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Collection Name"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="" label="" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Upload Image"
            name="img"
            value={formInput.img}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="" label="" className="mb-3">
          {/* <Form.Check
            type="switch"
            id="custom-switch"
            label="Make Collection Private"
            name="isPrivate"
            onChange={handleChange}
          /> */}

          <div className="mb-3" onChange={handleRadioChange} required>
            <Form.Check
              type="radio"
              id="privacy-radio1"
              for="privacy-radio"
              label="Private"
              name="isPrivate"
              value="true"
            />

            <Form.Check
              type="radio"
              id="privacy-radio2"
              for="privacy-radio"
              label="Public"
              name="isPrivate"
              value="false"
            />
          </div>
        </FloatingLabel>

        <Button type="submit">Create Collection</Button>

      </Form>
    </div>
  );
};

CollectionForm.propTypes = {
  obj: PropTypes.shape({
    firebaseKey: PropTypes.string,
  }),
};

CollectionForm.defaultProps = {
  obj: initialState,
};

export default CollectionForm;
