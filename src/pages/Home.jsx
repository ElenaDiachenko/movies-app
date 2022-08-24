import { useState, useEffect } from 'react';
import { HomeList } from 'components/HomeList/HomeList';
import { fetchTrendingMovies } from 'services/APP';
import { Container } from 'components/Container/Container';
import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';

export const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      (async function getMovies() {
        const response = await fetchTrendingMovies();
        setMovies(response);
        setLoading(false);
      })();
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        {loading && <Loader />}
        {movies ? (
          <Container>
            <h1>Trending today</h1>
            <HomeList movies={movies} />
          </Container>
        ) : (
          <p>Sorry </p>
        )}
      </main>
    </>
  );
};
