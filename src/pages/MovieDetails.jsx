import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { fetchMovieById } from 'services/APP';
import { MovieCard } from 'components/MovieCart/MovieCard';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

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
