import { useState, useEffect, useRef, memo } from 'react';
import { AxiosError } from 'axios';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { SliderCard } from './SliderCard/SliderCard';
import {
  Wrapper,
  Container,
  Title,
  SliderItemsBox,
  SliderItemsBoxInner,
  Left,
  Right,
} from './Slider.styled';
import { IMovieData } from 'interfaces/IMovieData';
import { SkeletonCard } from './SkeletonCard';

type SliderPropsType={
  title: string;
  fetchData: () => Promise<IMovieData[]>;
}

export const Slider = memo(({ title, fetchData }:SliderPropsType) => {
  const [movies, setMovies] = useState<IMovieData[] | []>([]);
  const [status, setStatus] = useState('idle');
  const [width, setWidth] = useState(0);
  const dragSlider = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dragSlider?.current?.scrollWidth && dragSlider?.current?.offsetWidth) {
      setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
    }
  }, [dragSlider]);



  useEffect(() => {
    try {
      setStatus('pending');
      (async function getMovies() {
        const response = await fetchData();
        if (response?.length === 0) {
          setStatus('rejected');
          return;
        }
        setMovies(response);
        setStatus('resolved');
      })();
    } catch (error) {
      console.log((error as AxiosError).message);
      setStatus('rejected');
    }
  }, [fetchData]);

  const handleScroll = (direction: string) => {
    if (!dragSlider.current) return;
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 960 ? 400 : 310;

    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;

      // if (current.scrollLeft >= width - scrollAmount) {
      //   setPage(page => (page += 1));
      // }
    }
  };

  return (
    <>
      {status === 'pending' && (
        <Wrapper>
          <Container>
            <div style={{ position: 'relative' }}>
              <Left>
                <MdChevronLeft size={35} />
              </Left>
              <Right>
                <MdChevronRight size={35} />
              </Right>

              <SkeletonCard />
            </div>
          </Container>
        </Wrapper>
      )}
      {status === 'rejected' && null}

      {status === 'resolved' && (
        <Wrapper>
          <Container>
            <Title>{title}</Title>

            <div style={{ position: 'relative' }}>
              <Left onClick={() => handleScroll('left')}>
                <MdChevronLeft size={35} />
              </Left>
              <Right onClick={() => handleScroll('right')}>
                <MdChevronRight size={35} />
              </Right>
              <SliderItemsBox ref={dragSlider}>
                <SliderItemsBoxInner
                  ref={dragSlider}
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                >
                  {movies.map((movie, id) =>
                    movie?.poster_path ? (
                      <SliderCard key={id} movie={movie} />
                    ) : null
                  )}
                </SliderItemsBoxInner>
              </SliderItemsBox>
            </div>
          </Container>
        </Wrapper>
      )}
    </>
  );
});
