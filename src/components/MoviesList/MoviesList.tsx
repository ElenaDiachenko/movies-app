import { useLocation } from 'react-router-dom';
import {
  MovieItem,
  MoviesContainer,
  MoviePoster,
  MovieTitle,
  StyledLink,
} from './MoviesList.styled';
import { IMG_PATH } from '../../pages/Movies';
import { IMovieData } from 'interfaces/IMovieData';

export const MoviesList = ({ movies }: { movies: IMovieData[] }) => {
  const location = useLocation();

  return (
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
  );
};
