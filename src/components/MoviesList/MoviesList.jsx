import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  MovieItem,
  MoviesContainer,
  MoviePoster,
  MovieTitle,
  StyledLink,
} from './MoviesList.styled';
import { IMG_PATH } from '../../pages/Home';
import bgImage from '../../images/image.png';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesContainer>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <MovieItem key={id}>
            <StyledLink to={`${id}`} state={{ from: location }}>
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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};
