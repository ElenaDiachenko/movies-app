import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMoviesByKeyword } from 'services/API';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { Loader } from 'components/Loader/Loader';
import { Box } from 'components/Box';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(null);
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query');

  useEffect(() => {
    if (!movieQuery) {
      return;
    }
    try {
      setStatus('pending');
      (async function getMovies() {
        const { results, total_pages } = await fetchMoviesByKeyword(
          movieQuery,
          page
        );
        if (results.length === 0) {
          setStatus('rejected');
          toast.info(
            'Sorry, there are no movies matching your search query. Please, try again'
          );
          return;
        }
        setStatus('resolved');
        setMovies(movies => [...movies, ...results]);
        setPage(page);
        setTotalMovies(total_pages);
      })();
    } catch (error) {
      setStatus('rejected');
      console.log(error.mesage);
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
    <main>
      <SearchBar onSubmit={handleSubmit} />
      {status === 'pending' && <Loader />}
      {status === 'rejected' && (
        <Box>Oop! Something went wrong! Try again later</Box>
      )}
      <MoviesList movies={movies} />
      {status === 'resolved' && totalMovies - movies.length > 0 ? (
        <LoadMoreButton onClick={loadMore} />
      ) : null}
      {status === 'resolved' && totalMovies - movies.length <= 0 ? (
        <Box>We're sorry, but you've reached the end of search results.</Box>
      ) : null}
    </main>
  );
};

export default Movies;
