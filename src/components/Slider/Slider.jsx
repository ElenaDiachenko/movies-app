import React, { useState, useEffect, useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { SliderCard } from './SliderCard/SliderCard';
import {
  Wrapper,
  Container,
  Title,
  SliderItemsBox,
  SliderItemsBoxInner,
  ButtonBox,
  ButtonIcon,
  // Left,
  // Right,
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
        console.log(response);
      })();
    } catch (error) {
      console.log(error.message);
      setStatus('rejected');
    }
  }, [fetchData]);

  const handleScroll = direction => {
    const { current } = dragSlider;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  return (
    <Wrapper>
      <Container>
        <Title>{title}</Title>
        <ButtonBox>
          <ButtonIcon onClick={() => handleScroll('left')}>
            <MdChevronLeft size={40} />
          </ButtonIcon>
          <ButtonIcon onClick={() => handleScroll('right')}>
            <MdChevronRight size={40} />
          </ButtonIcon>
        </ButtonBox>

        <SliderItemsBox ref={dragSlider}>
          <SliderItemsBoxInner
            ref={dragSlider}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {movies.map((movie, id) => (
              <SliderCard key={id} movie={movie} />
            ))}
          </SliderItemsBoxInner>
        </SliderItemsBox>
      </Container>
    </Wrapper>
  );
};
