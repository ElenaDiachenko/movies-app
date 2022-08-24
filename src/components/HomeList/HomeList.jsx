import {
  MovieItem,
  MoviesContainer,
  MoviePoster,
  MovieTitle,
  Link,
} from './HomeList.styled';
import { IMG_PATH } from '../../pages/Home';
import bgImage from '../../images/image.png';

export const HomeList = ({ movies }) => {
  return (
    <MoviesContainer>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <MovieItem key={id}>
            <Link to={`movies/${id}`}>
              <MoviePoster
                src={poster_path ? IMG_PATH + poster_path : bgImage}
                alt={title}
              />
              <MovieTitle>{title}</MovieTitle>
            </Link>
          </MovieItem>
        );
      })}
    </MoviesContainer>
  );
};
