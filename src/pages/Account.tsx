import { useLocation } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import { useStore } from 'stores/store';
import { Box } from 'components/Box';
import { IMG_PATH } from './Movies';
import {
  MovieItem,
  MoviesContainer,
  MoviePoster,
  MovieTitle,
  StyledLink,
} from 'components/MoviesList/MoviesList.styled';

const Account = () => {
  const { loading, error, movies } = useStore(
    state => ({
      loading: state.loadingMovies,
      error: state.errorMovies,
      movies: state.movies,
    }),
    shallow
  );

  const location = useLocation();
  console.log(movies);
  return (
    <main>
      <h1 style={{ textAlign: 'center', margin: '16px auto ' }}>My movies</h1>

      {movies.length > 0 ? (
        <MoviesContainer>
          {movies.map(({ id, title, poster_path }) =>
            poster_path ? (
              <MovieItem key={id}>
                <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                  <MoviePoster src={IMG_PATH + poster_path} alt={title} />
                  <MovieTitle>{title}</MovieTitle>
                </StyledLink>
              </MovieItem>
            ) : null
          )}
        </MoviesContainer>
      ) : (
        <Box display="flex" justifyContent="center" mt={16}>
          No saved movies yet
        </Box>
      )}
    </main>
  );
};

export default Account;
