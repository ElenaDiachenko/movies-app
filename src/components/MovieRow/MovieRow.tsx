import { FC, useState, useEffect } from 'react';
import { IMovieData } from 'interfaces/IMovieData';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { AxiosError } from 'axios';

interface MovieRowProps {
  title: string;
  rowId: string;
  fetchData: () => Promise<IMovieData[]>;
}

export const MovieRow: FC<MovieRowProps> = ({ title, fetchData, rowId }) => {
  const [movies, setMovies] = useState<IMovieData[] | []>([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    try {
      setStatus('pending');
      (async function getMovies() {
        const response = await fetchData();
        if (response.length === 0) {
          setStatus('rejected');
          return;
        }
        setMovies(response);
        setStatus('resolved');
        console.log(response);
      })();
    } catch (error) {
      console.log((error as AxiosError).message);
      setStatus('rejected');
    }
  }, [fetchData]);

  return <div>MovieRow</div>;
};
