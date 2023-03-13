import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { IGenre } from 'interfaces/IGenresData';
import { IFormValues } from 'components/SearchBar/SearchBar';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { requests, MovieListDataType } from 'services/API';
import { Box } from 'components/Box';
import { Genres } from 'components/Genres/Genres';
import { Loader } from 'components/Loader/Loader';
import { Pagination } from 'components/Pagination/Pagination';
import { useGenre } from 'hooks';
export const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';

const Home = () => {
  const [movies, setMovies] = useState<MovieListDataType | []>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [totalMovies, setTotalMovies] = useState(0);
  const [selectedGenres, setSelectedGenres] = useState<IGenre[] | []>([]);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query');
  const [title, setTitle] = useState('');
  const genreForSerch = useGenre(selectedGenres);

  // search by genres
  useEffect(() => {
    if (!genreForSerch) {
      return;
    }
    try {
      setStatus('pending');
      (async function getMovies() {
        const { results, total_pages } = await requests.fetchMoviesByGenre(
          genreForSerch,
          page
        );

        if (results.length === 0) {
          setStatus('rejected');
          return;
        }
        setMovies(results);
        setTotalMovies(total_pages);
        setTitle(
          `Search result by genres: ${selectedGenres
            .map(g => g.name.toLowerCase())
            .join(', ')}`
        );
        setStatus('resolved');
      })();
    } catch (error) {
      console.log((error as AxiosError).message);
      setStatus('rejected');
    }
  }, [page, genreForSerch, selectedGenres]);

  // search trending
  useEffect(() => {
    if (movieQuery || genreForSerch) {
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
        setTitle('Trending today');
        setStatus('resolved');
      })();
    } catch (error) {
      console.log((error as AxiosError).message);
      setStatus('rejected');
    }
  }, [page, movieQuery, genreForSerch]);

  // search by keyword
  useEffect(() => {
    if (!movieQuery) {
      return;
    }
    try {
      setStatus('pending');
      (async function getMovies() {
        const { results, total_pages } = await requests.fetchMoviesByKeyword(
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

        setMovies(results);
        setTotalMovies(total_pages);
        setTitle(`Search result by keyword: '${movieQuery}'`);
        setSelectedGenres([]);
        setStatus('resolved');
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
        width: '100%',
      }}
    >
      <SearchBar onSubmit={handleSubmit} />
      <Genres
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
      />
      {status === 'pending' && <Loader />}
      {status === 'rejected' && (
        <Box>Oop! Something went wrong! Try again later</Box>
      )}
      {status === 'resolved' && (
        <>
          <section style={{ flexGrow: 1 }}>
            <Box as="h1" mb={16}>
              {title}
            </Box>
            {movies && <MoviesList movies={movies} />}
          </section>
          <section style={{ flexGrow: 0 }}>
            {totalMovies >= page && (
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
