import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/APP';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      (async function getMovies() {
        const response = await fetchTrendingMovies();
        setMovies(response);
      })();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
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
