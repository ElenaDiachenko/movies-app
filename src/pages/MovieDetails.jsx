import { useParams, useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
import { useState, useEffect } from 'react';
import { fetchMovieById } from 'services/APP';
import { MovieCard } from 'components/MovieCart/MovieCard';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  useEffect(() => {
    try {
      (async function getMovie() {
        const data = await fetchMovieById(movieId);
        setMovie(data);
      })();
    } catch (error) {
      console.log(error.message);
    }
  }, [movieId]);
  return (
    <>
      <BackLink to={backLinkHref}>Back</BackLink>
      {movie ? (
        <MovieCard movie={movie} />
      ) : (
        <p>
          Sorry, there are no movie matching your search query. Please, try
          again.
        </p>
      )}
    </>
  );
};

export default MovieDetails;
