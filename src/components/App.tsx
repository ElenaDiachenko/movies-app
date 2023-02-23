import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lazy, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lightTheme, darkTheme } from 'theme';
import { GlobalStyle } from './GlobalStyle';

const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('MOVIE_APP') || 'light'
  );
  useEffect(() => {
    localStorage.setItem('MOVIE_APP', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Routes>
        <Route
          path="/"
          element={<SharedLayout toggleTheme={toggleTheme} theme={theme} />}
        >
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
      <ToastContainer
        autoClose={3000}
        theme={'colored'}
        hideProgressBar={false}
      />
      <GlobalStyle />
    </ThemeProvider>
  );
};
