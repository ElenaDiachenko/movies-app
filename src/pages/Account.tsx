import { useLocation } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import { FaHeart } from 'react-icons/fa';

import { useStore } from 'stores/store';
import { Box } from 'components/Box';
import { IMG_PATH } from './Movies';
import { Like } from 'components/LikeBtn/LikeBtn.styled';
import {
  MovieItem,
  MoviesContainer,
  MoviePoster,
  MovieTitle,
  StyledLink,
  Overlay,
} from 'components/MoviesList/MoviesList.styled';

const Account = () => {
  const { movies, deleteMovie } = useStore(
    state => ({
      error: state.errorMovies,
      movies: state.movies,
      deleteMovie: state.deleteSavedMovie,
    }),
    shallow
  );

  const location = useLocation();

  const removeMovie = (
    id: number,
    title: string,
    poster_path: string
  ): void => {
    deleteMovie({ id, title, poster_path });
  };

  return (
    <main
      style={{
        padding: '0 16px',
        minWidth: '100%',
      }}
    >
      <h1 style={{ textAlign: 'center', margin: '16px auto ' }}>My movies</h1>

      {movies && movies?.length > 0 ? (
        <MoviesContainer>
          {movies.map(({ id, title, poster_path }) =>
            poster_path ? (
              <MovieItem key={id}>
                <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                  <MoviePoster src={IMG_PATH + poster_path} alt={title} />
                  <MovieTitle>{title}</MovieTitle>
                  <Overlay>
                    <Like
                      onClick={e => {
                        e.preventDefault();
                        removeMovie(id, title, poster_path);
                      }}
                    >
                      <FaHeart
                        size={25}
                        color={'red'}
                        role="button"
                        aria-label="Remove movie from saved"
                        title="Remove movie from saved"
                      />
                    </Like>
                  </Overlay>
                </StyledLink>
              </MovieItem>
            ) : null
          )}
        </MoviesContainer>
      ) : (
        <Box display="flex" justifyContent="center" mt={16} width={1}>
          No saved movies yet
        </Box>
      )}
    </main>
  );
};

export default Account;
