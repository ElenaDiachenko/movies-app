import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMoviesByKeyword } from 'services/APP';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { MoviesList } from '../components/MoviesList/MoviesList';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query');

  useEffect(() => {
    if (!movieQuery) {
      return;
    }
    try {
      (async function getMovies() {
        const response = await fetchMoviesByKeyword(movieQuery, page);
        setMovies(movies => [...movies, ...response]);
        setPage(page);
      })();
    } catch (error) {
      console.log(error.mesage);
      toast.info('Oop! Something went wrong! Try again later!');
    }
  }, [movieQuery, page]);

  const handleSubmit = async ({ value }) => {
    if (value.trim().length === 0) {
      toast.info(
        'Sorry, there are no movies matching your search query. Please, try again'
      );
      return;
    }
    setPage(1);
    await setSearchParams(value !== '' ? { query: value } : {});
    setMovies([]);
  };

  return (
    <>
      <main>
        <SearchBar onSubmit={handleSubmit} />
        {movies ? (
          <MoviesList movies={movies} />
        ) : (
          <p>
            Sorry, there are no movies matching your search query. Please, try
            again.
          </p>
        )}
      </main>
    </>
  );
};

export default Movies;
