import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/APP';
import { useState, useEffect } from 'react';
import { Header } from 'components/Header/Header';
import { Container } from 'components/Container/Container';
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
      <Header />
      <Container>
        <MovieCard movie={movie} />
      </Container>
    </>
  );
};
