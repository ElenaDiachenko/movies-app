import {
  MovieItem,
  MoviesContainer,
  MoviePoster,
  MovieTitle,
  Link,
} from './MoviesList.styled';
import { IMG_PATH } from '../../pages/Home';

export const MoviesList = ({ movies }) => {
  return (
    <MoviesContainer>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <MovieItem key={id}>
            <Link to={`${id}`}>
              <MoviePoster src={IMG_PATH + poster_path} alt={title} />
              <MovieTitle>{title}</MovieTitle>
            </Link>
          </MovieItem>
        );
      })}
    </MoviesContainer>
  );
};
