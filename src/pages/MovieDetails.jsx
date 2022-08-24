import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { fetchMovieById } from 'services/APP';
import { MovieCard } from 'components/MovieCart/MovieCard';
import { Loader } from '../components/Loader/Loader';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      (async function getMovie() {
        const data = await fetchMovieById(movieId);
        setMovie(data);
        setLoading(false);
      })();
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  }, [movieId]);
  return (
    <>
      {loading && <Loader />}
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
