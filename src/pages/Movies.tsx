import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { IMovieData, IMovieDataByKeyword } from 'interfaces/IMovieData';
import { IFormValues } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { requests } from 'services/API';
import { Box } from 'components/Box';
import { Loader } from 'components/Loader/Loader';
import { Pagination } from 'components/Pagination/Pagination';
export const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';

const Home = () => {
  const [movies, setMovies] = useState<IMovieData[] | []>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [totalMovies, setTotalMovies] = useState(0);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query');

  useEffect(() => {
    if (movieQuery) {
      return;
    }
    try {
      setStatus('pending');
      (async function getMovies() {
        const { results, total_pages } = await requests.fetchTrendingMovies(
          page
        );

        if (results.length === 0) {
          setStatus('rejected');
          return;
        }
        setMovies(results);
        setTotalMovies(total_pages);
        setStatus('resolved');
      })();
    } catch (error) {
      console.log((error as AxiosError).message);
      setStatus('rejected');
    }
  }, [page, movieQuery]);

  useEffect(() => {
    if (!movieQuery) {
      return;
    }
    try {
      setStatus('pending');
      (async function getMovies() {
        const { results, total_pages }: IMovieDataByKeyword =
          await requests.fetchMoviesByKeyword(movieQuery, page);
        if (results.length === 0) {
          setStatus('rejected');
          toast.info(
            'Sorry, there are no movies matching your search query. Please, try again'
          );
          return;
        }
        setStatus('resolved');
        setMovies(results);
        setTotalMovies(total_pages);
      })();
    } catch (error) {
      setStatus('rejected');
      console.log((error as AxiosError).message);
    }
  }, [movieQuery, page]);

  const handleSubmit = async ({ value }: IFormValues) => {
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

  const paginate = (pageNumber: number) => setPage(pageNumber);

  return (
    <main
      style={{
        padding: '0 16px',
        width: '100vw',
      }}
    >
      <SearchBar onSubmit={handleSubmit} />
      {status === 'pending' && <Loader />}
      {status === 'rejected' && (
        <Box>Oop! Something went wrong! Try again later</Box>
      )}
      {status === 'resolved' && (
        <>
          <section style={{ flexGrow: 1 }}>
            <Box as="h1" mb={16}>
              {movieQuery
                ? `Search result by query '${movieQuery}'`
                : 'Trending today'}
            </Box>
            {movies && <MoviesList movies={movies} />}
          </section>
          <section style={{ flexGrow: 0 }}>
            {totalMovies > limit && (
              <Pagination
                limit={limit}
                total={totalMovies}
                paginate={paginate}
                currentPage={page}
                buttonConst={3}
                contentPerPage={5}
                siblingCount={1}
              />
            )}
          </section>
        </>
      )}
    </main>
  );
};

export default Home;
