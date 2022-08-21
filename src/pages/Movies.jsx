import { useState, useEffect } from 'react';
import { fetchMoviesByKeyword } from 'services/APP';
import { SearchBar } from '../components/SearchBar/SearchBar';

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
      // if()
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
    <main>
      <SearchBar onSubmit={handleSubmit} />
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <a href="#">{title}</a>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
