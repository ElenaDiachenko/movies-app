import { MovieItemCard } from './MovieItemCard';
import { MoviesContainer } from './MoviesList.styled';
import { MovieListDataType } from 'services/API';

type MoviesListProps = {
  movies: MovieListDataType;
};

export const MoviesList = ({ movies }: MoviesListProps) => {
  return (
    <MoviesContainer>
      {movies.map(movie =>
        movie.poster_path ? (
          <MovieItemCard movie={movie} key={movie.id} />
        ) : null
      )}
    </MoviesContainer>
  );
};
