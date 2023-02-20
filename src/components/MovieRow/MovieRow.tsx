import { FC, useState, useEffect, useRef } from 'react';
import { AxiosError } from 'axios';
import { IMovieData } from 'interfaces/IMovieData';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { Title, RowBox, Slider, Wrapper, Left, Right } from './MovieRow.styled';
import { Loader } from 'components/Loader/Loader';
import { Box } from 'components/Box';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

interface MovieRowProps {
  title: string;
  rowId: string;
  fetchData: () => Promise<IMovieData[]>;
}

export const MovieRow: FC<MovieRowProps> = ({ title, fetchData, rowId }) => {
  const [movies, setMovies] = useState<IMovieData[] | []>([]);
  const [status, setStatus] = useState('idle');
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef<HTMLDivElement>(null);
  console.log(listRef);
  const handleClick = (direction: string) => {
    if (!listRef.current) return;
    let distance = listRef.current.getBoundingClientRect()?.x - 50;
    console.log(listRef.current.style.transform, 'style 1');
    if (
      direction === 'left' &&
      slideNumber > 0 &&
      listRef.current?.style?.transform
    ) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (
      direction === 'right' &&
      slideNumber < 5 &&
      listRef.current?.style?.transform
    ) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    console.log(listRef.current.style.transform, 'style 2');
  };
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
    <Wrapper>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && (
        <Box>Oop! Something went wrong! Try again later</Box>
      )}
      <>
        <Title>{title}</Title>
        <RowBox>
          <Left>
            <MdChevronLeft size={40} onClick={() => handleClick('left')} />
          </Left>
          <Slider ref={listRef}>
            {movies.map((movie, id) => (
              <MovieItem key={id} movie={movie} />
            ))}
          </Slider>
          <Right>
            <MdChevronRight size={40} onClick={() => handleClick('right')} />
          </Right>
        </RowBox>
      </>
    </Wrapper>
  );
};
