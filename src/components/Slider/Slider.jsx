import React, { useState, useEffect, useRef } from 'react';
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

export const Slider = ({ title, fetchData }) => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [width, setWidth] = useState(0);
  const dragSlider = useRef();

  useEffect(() => {
    setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth);
  }, []);

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
      })();
    } catch (error) {
      console.log(error.message);
      setStatus('rejected');
    }
  }, [fetchData]);

  const handleScroll = direction => {
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 960 ? 300 : 210;

    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <>
      {status === 'pending' && <p>Loading...</p>}
      {status === 'rejected' && null}
      <Wrapper>
        <Container>
          <Title>{title}</Title>

          <div style={{ position: 'relative' }}>
            <Left onClick={() => handleScroll('left')}>
              <MdChevronLeft size={40} />
            </Left>
            <Right onClick={() => handleScroll('right')}>
              <MdChevronRight size={40} />
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
    </>
  );
};
