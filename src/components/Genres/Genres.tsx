import { useState, useEffect, FC } from 'react';
import { requests } from 'services/API';
import { IGenre } from 'interfaces/IGenresData';
import { AxiosError } from 'axios';

import { Container, GenreItem } from './Genres.styled';

interface IGenresProps {
  selectedGenres: string[];
  setSelectedGenres: (v: string[]) => void;
}

export const Genres: FC<IGenresProps> = ({
  selectedGenres,
  setSelectedGenres,
}) => {
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

  const toggleSelectGenre = (item: IGenre) => {
    if (selectedGenres.includes(item.name)) {
      setSelectedGenres([...selectedGenres.filter(g => g !== item.name)]);
    } else {
      setSelectedGenres([...selectedGenres, item.name]);
    }
  };

  return (
    <>
      {status === 'resolved' ? (
        <Container>
          {genres.map(g => (
            <GenreItem
              onClick={() => toggleSelectGenre(g)}
              key={g.id}
              className={selectedGenres.includes(g.name) ? 'active' : ''}
            >
              {g.name}
            </GenreItem>
          ))}
        </Container>
      ) : null}
    </>
  );
};
