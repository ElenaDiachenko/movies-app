import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchMoviesByKeyword } from 'services/APP';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    try {
      setLoading(true);
      (async function getMovies() {
        const response = await fetchMoviesByKeyword(query, page);
        setMovies(movies => [...movies, ...response]);
        setPage(page);
        setLoading(false);
      })();
    } catch (error) {
      setLoading(false);
      console.log(error.mesage);
      toast.info('Oop! Something went wrong! Try again later!');
    }
  }, [query, page]);

  const handleSubmit = ({ value }) => {
    if (value.trim().length === 0) {
      toast.info(
        'Sorry, there are no movies matching your search query. Please, try again'
      );
      return;
    }
    setPage(1);
    setQuery(value);
    setMovies([]);
  };
  return (
    <>
      <main>
        {loading && <Loader />}
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
