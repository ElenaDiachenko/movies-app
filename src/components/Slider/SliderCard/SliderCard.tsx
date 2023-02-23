import { FC, useState } from 'react';
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
  const [like, setLike] = useState(true);
  const location = useLocation();

  return (
    <Link to={`/movies/${id}`} state={{ from: location }}>
      <StyledCard>
        <StyledCardBox>
          <motion.div>
            <ImageBox>
              <MoviePoster src={IMG_PATH + poster_path} alt={title} />
              <Content>
                <Title>{title}</Title>
                <Like>
                  {like ? (
                    <FaHeart size={28} color={'red'} />
                  ) : (
                    <FaRegHeart size={28} color={'red'} />
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
