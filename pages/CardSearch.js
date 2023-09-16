import { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Link from 'next/link';
import pokedex from '../api/PokedexData';
import NameSearch from '../components/NameSearch';

const CardSearch = () => {
  const [dex, setDex] = useState([]);
  console.warn(dex);

  useEffect(() => {
    pokedex().then(setDex);
  }, []);

  return (
    <div>
      <h5>Card Search Page</h5>
      <Dropdown className="d-inline mx-2" autoClose="inside">
        <Dropdown.Toggle id="dropdown-autoclose-inside">
          Choose a Pokemon
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {dex?.map((data) => (
            <Link href={`/Cards/DexSearch/${data.id}`} passHref>
              <Dropdown.Item href="#">{data.id} | {data.name}</Dropdown.Item>
            </Link>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <NameSearch />
    </div>
  );
};

export default CardSearch;
