import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchTrendingMovies } from 'services/API';
import { Box } from 'components/Box';
import { toast } from 'react-toastify';
export const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      (async function getMovies() {
        const response = await fetchTrendingMovies();
        if (response.length === 0) {
          toast.warning(
            'Sorry, there are no movies matching your search query. Please, try again'
          );
          return;
        }
        setMovies(response);
      })();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <>
      <main>
        <>
          <Box as="h1" mb={16}>
            Trending today
          </Box>
          {movies && <MoviesList movies={movies} />}
        </>
      </main>
    </>
  );
};

export default Home;

