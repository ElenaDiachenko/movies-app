import { useState, useEffect } from 'react';
import { HomeList } from 'components/HomeList/HomeList';
import { fetchTrendingMovies } from 'services/APP';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';

export const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    try {
      // setStatus('pending');

      (async function getMovies() {
        const response = await fetchTrendingMovies();
        if (response.length === 0) {
          setStatus('rejected');
          toast.warning(
            'Sorry, there are no images matching your search query. Please, try again'
          );
          return;
        }
        setMovies(response);
        setStatus('resolved');
      })();
    } catch (error) {
      setStatus('rejected');
      toast.info('Oop! Something went wrong! Try again later!');
      console.log(error.message);
    }
  }, []);

  return (
    <>
      {/* {status === 'idle' && <p>Please, enter a search query.</p>} */}
      {status === 'pending' && <Loader />}
      {status === 'rejected' && (
        <p>
          Sorry, there are no movies matching your search query. Please, try
          again.
        </p>
      )}
      {status === 'resolved' && (
        <main>
          <>
            <h1>Trending today</h1>
            <HomeList movies={movies} />
          </>
        </main>
      )}
    </>
  );
};
