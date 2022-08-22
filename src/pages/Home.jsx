import { useState, useEffect } from 'react';
// import { Link } from '../components/App.styled';
import { HomeList } from 'components/HomeList/HomeList';
import { fetchTrendingMovies } from 'services/APP';
import { Container } from 'components/Container/Container';

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
      <Container>
        <HomeList movies={movies} />
      </Container>
      {/* <ul>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`}>
                {title}
                <img src={IMG_PATH + poster_path} alt={title} />
              </Link>
            </li>
          );
        })}
      </ul> */}
    </main>
  );
};
