import { FC, useState, MouseEvent } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import { shallow } from 'zustand/shallow';
import { toast } from 'react-toastify';

import { useStore } from 'stores/store';
import { IMovieData } from 'interfaces/IMovieData';
import { Like } from './LikeBtn.styled';

type LikeBtnProps = {
  movie: IMovieData;
};
export const LikeBtn: FC<LikeBtnProps> = ({ movie }) => {
  const { id, title, poster_path, saved } = movie;
  const [like, setLike] = useState(saved);

  const { addMovie, deleteMovie, user } = useStore(
    state => ({
      addMovie: state.addSavedMovie,
      deleteMovie: state.deleteSavedMovie,
      user: state.authUser,
    }),
    shallow
  );
  const toggleMovie = async (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (title && poster_path && user) {
      setLike(like => !like);
      !saved
        ? addMovie(id, title, poster_path)
        : deleteMovie({
            id,
            title,
            poster_path,
          });
    } else {
      toast.info('Please log in to save a movie');
    }
  };
  return (
    <Like onClick={toggleMovie}>
      {like ? (
        <FaHeart size={25} color={'red'} />
      ) : (
        <FaRegHeart size={25} color={'red'} />
      )}
    </Like>
  );
};
