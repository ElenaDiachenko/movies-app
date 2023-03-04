import { useState, useEffect } from 'react';
import { requests } from 'services/API';
import { IGenre } from 'interfaces/IGenresData';
import { AxiosError } from 'axios';

export const Genres = () => {
  const [genres, setGenres] = useState<IGenre[] | []>([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    try {
      setStatus('pending');
      (async () => {
        const { genres } = await requests.fetchGenreList();
        if (genres.length === 0) {
          setStatus('rejected');
          return;
        }
        setGenres(genres);
        setStatus('resolved');
      })();
    } catch (error) {
      console.log((error as AxiosError).message);
      setStatus('rejected');
    }
  }, []);
  console.log(genres);
  return <div>Genres</div>;
};
