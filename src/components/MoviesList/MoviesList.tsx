import { useLocation } from 'react-router-dom';
import { MouseEvent } from 'react';
import { MdVideoLibrary } from 'react-icons/md';
import {
  MovieItem,
  MoviesContainer,
  MoviePoster,
  MovieTitle,
  StyledLink,
  Overlay,
} from './MoviesList.styled';
import { IMG_PATH } from 'pages/Movies';
import { IMovieData } from 'interfaces/IMovieData';
import { LikeBtn } from 'components/LikeBtn/LikeBtn';
import { requests } from 'services/API';

export const MoviesList = ({ movies }: { movies: IMovieData[] }) => {
  const location = useLocation();

  // const getVideo = async (
  //   movieId: string,
  //   e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  // ) => {
  //   e.preventDefault();
  //   await requests.fetchVideo(movieId);
  // };
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
              <Overlay>
                <LikeBtn movie={movie} />
              </Overlay>

              {/* <div
                onClick={e => getVideo(movie.id, e)}
                style={{ position: 'absolute', top: 50, right: 7 }}
              >
                <MdVideoLibrary size={33} />
              </div> */}
            </StyledLink>
          </MovieItem>
        ) : null
      )}
    </MoviesContainer>
  );
};
