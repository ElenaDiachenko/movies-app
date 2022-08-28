import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMoviesByKeyword } from 'services/APP';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query');

  useEffect(() => {
    if (!movieQuery) {
      return;
    }
    try {
      (async function getMovies() {
        const { results, total_pages } = await fetchMoviesByKeyword(
          movieQuery,
          page
        );
        if (results.length === 0) {
          toast.info(
            'Sorry, there are no movies matching your search query. Please, try again'
          );
          return;
        }
        setMovies(movies => [...movies, ...results]);
        setPage(page);
        setTotalMovies(total_pages);
      })();
    } catch (error) {
      console.log(error.mesage);
      toast.info('Oop! Something went wrong! Try again later!');
    }
  }, [movieQuery, page]);

  const loadMore = async () => {
    setPage(page => page + 1);
  };

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
        {movies && <MoviesList movies={movies} />}
        {totalMovies - movies.length > 0 ? (
          <LoadMoreButton onClick={loadMore} />
        ) : null}
      </main>
    </>
  );
};

export default Movies;
