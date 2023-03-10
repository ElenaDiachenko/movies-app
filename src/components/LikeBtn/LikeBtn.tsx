import { useState, MouseEvent } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import { shallow } from 'zustand/shallow';
import { toast } from 'react-toastify';

import { useStore } from 'stores/store';
import { MovieItemType } from 'interfaces/MovieDataTypes';
import { Like } from './LikeBtn.styled';

type LikeBtnProps = {
  movie: MovieItemType;
};
export const LikeBtn = ({ movie }: LikeBtnProps) => {
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
        <FaHeart
          size={25}
          color={'red'}
          role="button"
          aria-label="Remove movie from saved"
        />
      ) : (
        <FaRegHeart
          size={25}
          color={'red'}
          role="button"
          aria-label="Add movie to saved"
        />
      )}
    </Like>
  );
};
