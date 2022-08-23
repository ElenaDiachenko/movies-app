import { useState, useEffect } from 'react';
import { HomeList } from 'components/HomeList/HomeList';
import { fetchTrendingMovies } from 'services/APP';
import { Container } from 'components/Container/Container';
import { Header } from 'components/Header/Header';

export const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      (async function getMovies() {
        const response = await fetchTrendingMovies();
        setMovies(response);
      })();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>Trending today</h1>
          <HomeList movies={movies} />
        </Container>
      </main>
    </>
  );
};
