import { useState, useEffect } from 'react';
import { Link } from '../components/App.styled';
import { fetchTrendingMovies } from 'services/APP';

export const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';

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
        {movies.map(({ id, title, poster_path }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`}>{title}</Link>
              <img src={IMG_PATH + poster_path} alt={title} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};
