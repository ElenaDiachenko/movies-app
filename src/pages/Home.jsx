import { useState, useEffect } from 'react';
import { HomeList } from '../components/MoviesList/HomeList';
import { fetchTrendingMovies } from 'services/APP';
import { toast } from 'react-toastify';
export const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      (async function getMovies() {
        const response = await fetchTrendingMovies();
        if (response.length === 0) {
          toast.warning(
            'Sorry, there are no images matching your search query. Please, try again'
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
          <h1>Trending today</h1>
          {movies ? (
            <HomeList movies={movies} />
          ) : (
            <p>
              Sorry, there are no movies matching your search query. Please, try
              again.
            </p>
          )}
        </>
      </main>
    </>
  );
};
