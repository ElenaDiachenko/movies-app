import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/APP';
import { useState, useEffect } from 'react';
import { IMG_PATH } from './Home';
import { Box } from '../components/Box';

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
  console.log(movie);
  const { poster_path, title, genres, vote_average, overview } = movie;

  return (
    <Box display="flex">
      <div>
        <img src={IMG_PATH + poster_path} alt={title} />
      </div>
      <div>
        <p>{title}</p>
        <p>
          Raiting: <span>{vote_average}</span>
        </p>
        <p>Overview</p>
        <p>{overview}</p>
        <p>Genres</p>
        {/* <p>{`${movieGanres(genres)}`}</p> */}
      </div>
    </Box>
    //  return <img src={IMG_PATH + poster_path} alt={title} />;
  );
};
