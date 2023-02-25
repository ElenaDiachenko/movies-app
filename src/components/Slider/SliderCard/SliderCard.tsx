import { FC, useState, MouseEvent } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { IMG_PATH } from 'pages/Home';
import {
  StyledCard,
  StyledCardBox,
  MoviePoster,
  ImageBox,
  Content,
  Title,
  Like,
} from './SliderCard.styled';

import { IMovieData } from 'interfaces/IMovieData';

interface SliderCardProps {
  movie: IMovieData;
}
export const SliderCard: FC<SliderCardProps> = ({ movie }) => {
  const { id, title, poster_path } = movie;
  const [like, setLike] = useState(false);
  const location = useLocation();

  const toggleLike = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setLike(like => !like);
  };

  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      <StyledCard>
        <StyledCardBox>
          <motion.div>
            <ImageBox>
              <MoviePoster src={IMG_PATH + poster_path} alt={title} />
              <Content>
                <Title>{title}</Title>
                <Like onClick={toggleLike}>
                  {like ? (
                    <FaHeart size={25} color={'red'} />
                  ) : (
                    <FaRegHeart size={25} color={'red'} />
                  )}
                </Like>
              </Content>
            </ImageBox>
          </motion.div>
        </StyledCardBox>
      </StyledCard>
    </Link>
  );
};
