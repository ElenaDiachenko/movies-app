import { useLocation } from 'react-router-dom';
import {
  MovieItem,
  MoviePoster,
  MovieTitle,
  StyledLink,
  Overlay,
} from './MoviesList.styled';
import { LikeBtn } from 'components/LikeBtn/LikeBtn';
import { MovieItemType } from 'interfaces/MovieDataTypes';
import { IMG_PATH } from 'pages/Movies';

type MovieItemCardProps = {
  movie: MovieItemType;
};

export const MovieItemCard = ({ movie }: MovieItemCardProps) => {
  const location = useLocation();

  return (
    <MovieItem>
      <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
        <MoviePoster src={IMG_PATH + movie.poster_path} alt={movie.title} />
        <MovieTitle>{movie.title}</MovieTitle>
        <Overlay>
          <LikeBtn movie={movie} />
        </Overlay>
      </StyledLink>
    </MovieItem>
  );
};
