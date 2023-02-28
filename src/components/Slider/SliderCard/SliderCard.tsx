import { FC } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';

import { useStore } from 'stores/store';
import { IMG_PATH } from 'pages/Movies';
import {
  StyledCard,
  StyledCardBox,
  MoviePoster,
  ImageBox,
  Content,
  Title,
} from './SliderCard.styled';
import { LikeBtn } from 'components/LikeBtn/LikeBtn';
import { IMovieData } from 'interfaces/IMovieData';

interface SliderCardProps {
  movie: IMovieData;
}
export const SliderCard: FC<SliderCardProps> = ({ movie }) => {
  const { id, title, poster_path } = movie;
  const { user } = useStore(
    state => ({
      user: state.authUser,
    }),
    shallow
  );
  const location = useLocation();

  const handleLinkClick = () => {
    if (!user) {
      toast.info('Please log in to see a movie detail');
    }
  };

  return (
    <Link
      onClick={handleLinkClick}
      to={user ? `/movies/${id}` : `/login`}
      state={{ from: location }}
    >
      <StyledCard>
        <StyledCardBox>
          <motion.div>
            <ImageBox>
              <MoviePoster src={IMG_PATH + poster_path} alt={title} />
              <Content>
                <Title>{title}</Title>
                <LikeBtn movie={movie} />
              </Content>
            </ImageBox>
          </motion.div>
        </StyledCardBox>
      </StyledCard>
    </Link>
  );
};
