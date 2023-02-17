import { useLocation } from 'react-router-dom';
import {
  MovieItem,
  MoviesContainer,
  MoviePoster,
  MovieTitle,
  StyledLink,
} from './MoviesList.styled';
import { IMG_PATH } from '../../pages/Home';
import bgImage from '../../images/image.png';
import { IMovieData } from 'interfaces/IMovieData';

export const MoviesList = ({ movies }: { movies: IMovieData[] }) => {
  const location = useLocation();

  return (
    <MoviesContainer>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <MovieItem key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              <MoviePoster
                src={poster_path ? IMG_PATH + poster_path : bgImage}
                alt={title}
              />
              <MovieTitle>{title}</MovieTitle>
            </StyledLink>
          </MovieItem>
        );
      })}
    </MoviesContainer>
  );
};
