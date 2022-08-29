import { useParams, useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchMovieById } from 'services/API';
import { MovieCard } from 'components/MovieCart/MovieCard';
import { Loader } from 'components/Loader/Loader';
import { Box } from 'components/Box';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState('idle');
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    try {
      setStatus('pending');
      (async function getMovie() {
        const data = await fetchMovieById(movieId);
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
      console.log(error.message);
    }
  }, [movieId]);
  return (
    <>
      <BackLink to={backLinkHref}>Back</BackLink>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && (
        <Box>Oop! Something went wrong! Try again later!</Box>
      )}
      <MovieCard movie={movie} />
    </>
  );
};

export default MovieDetails;
