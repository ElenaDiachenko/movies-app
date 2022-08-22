import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/APP';
import { useState, useEffect } from 'react';
import { IMG_PATH } from './Home';

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
  return <img src={IMG_PATH + movie.poster_path} alt={movie.title} />;
};
