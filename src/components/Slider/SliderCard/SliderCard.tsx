import { FC, useState, MouseEvent } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useLocation, Link } from 'react-router-dom';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { shallow } from 'zustand/shallow';
import { motion } from 'framer-motion';

import { db } from 'config/firebase';
import { useStore } from 'stores/store';
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
  const [saved, setSaved] = useState(false);
  const location = useLocation();
  const { user } = useStore(
    state => ({
      user: state.authUser,
    }),
    shallow
  );

  const movieID = doc(db, 'users', `${user?.email}`);

  const saveMovie = async (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (user?.email) {
      try {
        setLike(like => !like);
        setSaved(true);
        await updateDoc(movieID, {
          savedMovies: arrayUnion({
            id: movie.id,
            title: movie.title,
            img: movie.poster_path,
          }),
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert('Please log in to save a movie');
    }
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
                <Like onClick={saveMovie}>
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
