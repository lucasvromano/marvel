import './styles.scss';
import { getCharactersApi, getCharacterByNameApi } from '../../services/api';
import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Link } from 'react-router-dom'

import Card from '../../components/Card/index';
import Search from '../../components/Search/index';


const Characters = () => {

  const [characters, setCharacters] = useState(null);
  const [input, setInput] = useState('');

  const getCharacters = async () => {
    const response = await getCharactersApi();
    setCharacters(response.data.results);
  }

  const getCharactersByName = async e => {
    setInput(e.target.value);
    const result = await getCharacterByNameApi(e.target.value);
    const currentArray = [];

    result.data.results.map(index => {
      return currentArray.push(index);
    });

    setCharacters(currentArray);
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="characters">
      <h1 className="characters__title">
        Marvel characters
      </h1>

      <Search
        value={input}
        onChange={getCharactersByName} />

      <div className="characters__containerCards">
        {
          characters && characters.length > 0 ?
            characters.map(index => (
              <div key={uuid()} >
                <Link to={`/details/${index.id}`}>
                  <Card
                    name={index.name}
                    path={index.thumbnail.path}
                    extension={index.thumbnail.extension}
                    isCharacter
                  />
                </Link>
              </div>
            ))
            :
            (
              <p className='characters__textNotFound'>
                Character not found.
              </p>
            )
        }
      </div>
    </div>
  );
}

export default Characters;
