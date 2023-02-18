import { FC, useState, useEffect } from 'react';
import { AxiosError } from 'axios';
import { IMovieData } from 'interfaces/IMovieData';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { Title, RowBox, Slider } from './MovieRow.styled';
import { Loader } from 'components/Loader/Loader';
import { Box } from 'components/Box';

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

  //   const slideLeft = () => {
  //     var slider = document.getElementById('slider' + rowId);
  //     slider.scrollLeft = slider.scrollLeft - 500;
  //   };
  //   const slideRight = () => {
  //     var slider = document.getElementById('slider' + rowId);
  //     slider.scrollLeft = slider.scrollLeft + 500;
  //   };

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && (
        <Box>Oop! Something went wrong! Try again later</Box>
      )}
      <>
        <Title>{title}</Title>
        <RowBox>
          <Slider>
            {movies.map((movie, id) => (
              <MovieItem key={id} movie={movie} />
            ))}
          </Slider>
        </RowBox>
      </>
    </>
  );
};
