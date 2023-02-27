import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import { IMovieData } from 'interfaces/IMovieData';
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
  const [totalMovies, setTotalMovies] = useState<number | 0>(0);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
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
        setMovies(movies => [...movies, ...results]);
        setPage(page);
        setTotalMovies(total_pages);
        setStatus('resolved');
      })();
    } catch (error) {
      console.log((error as AxiosError).message);
      setStatus('rejected');
    }
  }, [page]);

  const paginate = (pageNumber: number) => setPage(pageNumber);

  return (
    <main>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && (
        <Box>Oop! Something went wrong! Try again later</Box>
      )}
      {status === 'resolved' && (
        <>
          <section style={{ flexGrow: 1 }}>
            <Box as="h1" mb={16}>
              Trending today
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
