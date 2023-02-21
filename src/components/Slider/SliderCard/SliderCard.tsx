import { FC } from 'react';
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

import { IMovieData } from 'interfaces/IMovieData';

interface SliderCardProps {
  movie: IMovieData;
}
export const SliderCard: FC<SliderCardProps> = ({ movie }) => {
  const { id, title, poster_path } = movie;
  return (
    <StyledCard>
      <StyledCardBox>
        <motion.div>
          <ImageBox>
            <MoviePoster src={IMG_PATH + poster_path} alt={title} />
            <Content>
              <Title>{title}</Title>
            </Content>
          </ImageBox>
        </motion.div>
      </StyledCardBox>
    </StyledCard>
  );
};
