import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
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

Cast.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
  id: PropTypes.number,
};

export default Cast;
