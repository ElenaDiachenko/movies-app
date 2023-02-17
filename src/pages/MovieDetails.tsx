import { useParams, useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchMovieById } from 'services/API';
import { MovieCard } from 'components/MovieCart/MovieCard';
import { Loader } from 'components/Loader/Loader';
import { Box } from 'components/Box';
import { IMovieByIdData } from 'interfaces/IMovieData';
import { AxiosError } from 'axios';

type LocationProps = {
  state: {
    from: Location;
  };
};

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<IMovieByIdData>();
  const [status, setStatus] = useState('idle');
  const location = useLocation() as unknown as LocationProps;
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    if (!movieId) return;
    try {
      setStatus('pending');
      (async function getMovie() {
        const data = await fetchMovieById(movieId);
        console.log(data)
        if (Object.keys(data).length === 0) {
          setStatus('rejected');
          toast.info('Sorry, there are no  movie details ');
          return;
        }
        setMovie(data);
        setStatus('resolved');
      })();
    } catch (error) {
      setStatus('rejected');
      console.log((error as AxiosError).message);
    }
  }, [movieId]);
  return (
    <>
      <BackLink to={backLinkHref}>Back</BackLink>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && (
        <Box>Oop! Something went wrong! Try again later!</Box>
      )}
      {status === 'resolved' && movie && <MovieCard movie={movie} />}
    </>
  );
};

export default MovieDetails;
