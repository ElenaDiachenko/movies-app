import { useState, useEffect, memo } from 'react';
import { requests } from 'services/API';
import { IGenre } from 'interfaces/IGenresData';
import { AxiosError } from 'axios';

import { Container, GenreItem } from './Genres.styled';

type GenresProps = {
  selectedGenres: IGenre[];
  setSelectedGenres: React.Dispatch<React.SetStateAction<[] | IGenre[]>>;
};

export const Genres = memo(
  ({ selectedGenres, setSelectedGenres }: GenresProps) => {
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
      if (selectedGenres.find(g => g.id === item.id)) {
        setSelectedGenres([...selectedGenres.filter(g => g.id !== item.id)]);
      } else {
        setSelectedGenres([...selectedGenres, item]);
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
                className={
                  selectedGenres.find(it => it.id === g.id) ? 'active' : ''
                }
              >
                {g.name}
              </GenreItem>
            ))}
          </Container>
        ) : null}
      </>
    );
  }
);
