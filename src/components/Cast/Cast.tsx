import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { Container, Item, Image, Description } from './Cast.styled';
import { Loader } from 'components/Loader/Loader';
import { requests } from 'services/API';
import { IMG_PATH } from '../../pages/Home';
import bgImage from '../../images/image.png';
import { ICastData } from 'interfaces/IMovieData';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState<ICastData[] | []>([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!movieId) return;

    try {
      setStatus('pending');
      (async function getCast() {
        const data = await requests.fetchCast(movieId);
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
      console.log((error as AxiosError).message);
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

export default Cast;
