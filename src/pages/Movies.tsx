import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { requests } from 'services/API';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { Loader } from 'components/Loader/Loader';
import { Box } from 'components/Box';
import { AxiosError } from 'axios';
import { IMovieData, IMovieDataByKeyword } from 'interfaces/IMovieData';
import { IFormValues } from 'components/SearchBar/SearchBar';
import { Slider } from 'components/Slider/Slider';

const Movies = () => {
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState<number | 0>(0);
  const [movies, setMovies] = useState<IMovieData[] | []>([]);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query');

  const movieRows = [
    { id: '1', title: 'UpComming', fetchData: requests.fetchUpcomingMovies },
    { id: '2', title: 'NowPlaying', fetchData: requests.fetchNowPlayingMovies },
    { id: '3', title: 'TopRated', fetchData: requests.fetchTopRatedMovies },
    { id: '4', title: 'Popular', fetchData: requests.fetchPopularMovies },
  ];

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
        setMovies(movies => [...movies, ...results]);
        setPage(page);
        setTotalMovies(total_pages);
      })();
    } catch (error) {
      setStatus('rejected');
      console.log((error as AxiosError).message);
    }
  }, [movieQuery, page]);

  const loadMore = async () => {
    setPage(page => page + 1);
  };

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

  return (
    <main style={{ overflow: 'hidden', position: 'relative' }}>
      <SearchBar onSubmit={handleSubmit} />
      {status === 'pending' && <Loader />}
      {status === 'rejected' && (
        <Box>Oop! Something went wrong! Try again later</Box>
      )}
      {status === 'resolved' && <MoviesList movies={movies} />}
      {status === 'resolved' && totalMovies - movies.length > 0 ? (
        <LoadMoreButton onClick={loadMore} />
      ) : null}
      {status === 'resolved' && totalMovies - movies.length <= 0 ? (
        <Box>We're sorry, but you've reached the end of search results.</Box>
      ) : null}

      {status !== 'resolved' &&
        !movieQuery &&
        movieRows.map(row => (
          <Slider key={row.id} title={row.title} fetchData={row.fetchData} />
        ))}
    </main>
  );
};

export default Movies;
