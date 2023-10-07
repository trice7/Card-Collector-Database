import { useRouter } from 'next/router';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

const NameSearch = () => {
  const [result, setResult] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const val = e.target.value;
    setResult(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/Cards/NameSearch/${result}`);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Control size="sm" type="text" placeholder="Search..." className="mr-sm-2 name-search" onChange={handleChange} value={result} />
      </Form>
    </div>
  );
};

export default NameSearch;
