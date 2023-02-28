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
import { LikeBtn } from 'components/LikeBtn/LikeBtn';

export const MoviesList = ({ movies }: { movies: IMovieData[] }) => {
  const location = useLocation();

  return (
    <MoviesContainer>
      {movies.map(movie =>
        movie.poster_path ? (
          <MovieItem key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
              <MoviePoster
                src={IMG_PATH + movie.poster_path}
                alt={movie.title}
              />
              <MovieTitle>{movie.title}</MovieTitle>
              <LikeBtn movie={movie} />
            </StyledLink>
          </MovieItem>
        ) : null
      )}
    </MoviesContainer>
  );
};
