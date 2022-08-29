import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Container, Item, Image, Description } from './Cast.styled';
import { Loader } from 'components/Loader/Loader';
import { fetchCast } from 'services/API';
import { IMG_PATH } from '../../pages/Home';
import bgImage from '../../images/image.png';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    try {
      setStatus('pending');
      (async function getCast() {
        const data = await fetchCast(movieId);
        if (data.length === 0) {
          setStatus('rejected');
          toast.info('Sorry, there are no cast yet');
          return;
        }
        setCast(data);
        setStatus('resolved');
      })();
    } catch (error) {
      setStatus('rejected');
      console.log(error.message);
    }
  }, [movieId]);

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && null}
      {status === 'resolved' && (
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
      )}
    </>
  );
};

Cast.propTypes = {
  profile_path: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
  id: PropTypes.number,
};

export default Cast;
