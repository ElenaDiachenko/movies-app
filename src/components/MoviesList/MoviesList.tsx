import { MovieItemCard } from './MovieItemCard';
import { MoviesContainer } from './MoviesList.styled';

import { IMovieData } from 'interfaces/IMovieData';

export const MoviesList = ({ movies }: { movies: IMovieData[] }) => {
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
