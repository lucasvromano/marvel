import { useEffect, useState } from 'react';
import './styles.scss';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const Card = ({ name, path, extension, isCharacter }) => {

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const isMobile = windowDimensions.width <= 492;

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ?
        (
          <div className='card-mobile'>
            <img className={`card__img ${isCharacter && 'card__img--character'} `} src={`${path}.${extension}`} alt={name} />
            <div className='card__containerName'>
              <p className='card__name'>{name}</p>
            </div>
          </div>
        )
        :
        (
          <div className='card'>
            <img className={`card__img ${isCharacter && 'card__img--character'} `} src={`${path}.${extension}`} alt={name} />
            <div className='card__containerName'>
              <p className='card__name'>{name}</p>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Card;
