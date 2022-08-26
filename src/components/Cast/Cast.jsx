import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Item, Image, Description } from './Cast.styled';
import { fetchCast } from 'services/APP';
import { IMG_PATH } from '../../pages/Home';
import bgImage from '../../images/image.png';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    try {
      (async function getCast() {
        const data = await fetchCast(movieId);
        setCast(data);
      })();
    } catch (error) {
      console.log(error.message);
    }
  }, [movieId]);

  return (
    <Container>
      {cast.map(({ id, profile_path, name, character }) => {
        return (
          <Item key={id}>
            <Image
              src={profile_path ? IMG_PATH + profile_path : bgImage}
              alt={name}
            />
            <Description>Actor: {name}</Description>
            <Description>Character: {character}</Description>
          </Item>
        );
      })}
    </Container>
  );
};

export default Cast;
