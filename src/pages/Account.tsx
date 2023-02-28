import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { shallow } from 'zustand/shallow';
import { useStore } from 'stores/store';

import { IMG_PATH } from './Movies';
import {
  MovieItem,
  MoviesContainer,
  MoviePoster,
  MovieTitle,
  StyledLink,
} from 'components/MoviesList/MoviesList.styled';

const Account = () => {
  const { loading, error, movies } = useStore(
    state => ({
      loading: state.loadingMovies,
      error: state.errorMovies,
      movies: state.movies,
    }),
    shallow
  );

  const location = useLocation();
  console.log(movies);
  return (
    <main>
      <h1 style={{ textAlign: 'center', margin: '16px auto ' }}>My movies</h1>
      <MoviesContainer>
        {movies.map(({ id, title, img }) =>
          img ? (
            <MovieItem key={id}>
              <StyledLink to={`/movies/${id}`} state={{ from: location }}>
                <MoviePoster src={IMG_PATH + img} alt={title} />
                <MovieTitle>{title}</MovieTitle>
              </StyledLink>
            </MovieItem>
          ) : null
        )}
      </MoviesContainer>
    </main>
  );
};

export default Account;
