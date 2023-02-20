import React from 'react';
import { motion } from 'framer-motion';
import { IMG_PATH } from 'pages/Home';
import {
  StyledCard,
  StyledCardBox,
  MoviePoster,
  ImageBox,
  Content,
  Title,
} from './SliderCard.styled';
import bgImage from 'images/image.png';

export const SliderCard = ({ movie }) => {
  const { id, title, poster_path } = movie;
  return (
    <StyledCard>
      <StyledCardBox>
        <motion.div>
          <ImageBox>
            <MoviePoster
              src={poster_path ? IMG_PATH + poster_path : bgImage}
              alt={title}
            />
            <Content>
              <Title>{title}</Title>
            </Content>
          </ImageBox>
        </motion.div>
      </StyledCardBox>
    </StyledCard>
  );
};
