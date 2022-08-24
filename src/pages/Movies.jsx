import { useState, useEffect } from 'react';
import { Header } from 'components/Header/Header';

import { fetchMoviesByKeyword } from 'services/APP';
import { SearchBar } from '../components/SearchBar/SearchBar';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { Container } from 'components/Container/Container';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }
    try {
      (async function getMovies() {
        const response = await fetchMoviesByKeyword(query, page);
        setMovies(movies => [...movies, ...response]);
        setPage(page);
      })();
    } catch (error) {
      console.log(error.mesage);
    }
  }, [query, page]);

  const handleSubmit = ({ value }) => {
    if (value.trim().length === 0) {
      alert(
        'Sorry, there are no movies matching your search query. Please, try again'
      );
      return;
    }
    setPage(1);
    setQuery(value);
    setMovies([]);
  };
  return (
    <>
      <Header>
        <SearchBar onSubmit={handleSubmit} />
      </Header>
      <main>
        <Container>
          <MoviesList movies={movies} />
        </Container>
      </main>
    </>
  );
};
