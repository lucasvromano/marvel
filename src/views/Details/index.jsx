import './styles.scss';
import { useParams } from 'react-router';
import { v4 as uuid } from 'uuid'
import { useEffect, useState } from 'react';
import { getComicsApi, getCharacterByIdApi } from '../../services/api';
import Card from '../../components/Card';

const Details = () => {
  const { id } = useParams();
  const [comics, setComics] = useState(null);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const getCharacter = async () => {
      const resultCharacter = await getCharacterByIdApi(id);
      setCharacter(resultCharacter.data.results[0]);
    }

    const getComics = async () => {
      const resultComics = await getComicsApi(id);
      setComics(resultComics.data.results);
    }

    getCharacter();
    getComics();

  }, [id]);

  return (
    <div className="details">

      {character && (
        <div>
          <div className='details__containerCharacter'>
            <h1 className="details__title">
              {character.name}
            </h1>
            <img
              className='details__imgCharacter'
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name} />

            <p className="details__textCharacter">
              {character.description && character.description}
            </p>
          </div>

          {comics && comics.length > 0 && (
            <>
              <h2 className="details__subtitle">Main appearances</h2>

              <div className='details__containerComics'>
                {comics.map(item => (
                  <div key={uuid()} >
                    <Card
                      name={item.title}
                      path={item.thumbnail.path}
                      extension={item.thumbnail.extension} />
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      )}

    </div>
  )
}

export default Details;
