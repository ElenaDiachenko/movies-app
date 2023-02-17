import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import { IMovieData } from 'interfaces/IMovieData';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { requests } from 'services/API';
import { Box } from 'components/Box';
import { Loader } from 'components/Loader/Loader';
export const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';

const Home = () => {
  const [movies, setMovies] = useState<IMovieData[] | []>([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    try {
      setStatus('pending');
      (async function getMovies() {
        const response = await requests.fetchTrendingMovies();
        if (response.length === 0) {
          setStatus('rejected');
          return;
        }
        setMovies(response);
        setStatus('resolved');
      })();
    } catch (error) {
      console.log((error as AxiosError).message);
      setStatus('rejected');
    }
  }, []);

  return (
    <main>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && (
        <Box>Oop! Something went wrong! Try again later</Box>
      )}
      {status === 'resolved' && (
        <section>
          <Box as="h1" mb={16}>
            Trending today
          </Box>
          {movies && <MoviesList movies={movies} />}
        </section>
      )}
    </main>
  );
};

export default Home;
