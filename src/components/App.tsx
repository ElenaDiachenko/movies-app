import { lazy, useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { shallow } from 'zustand/shallow';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PrivatRoute, RestrictedRoute } from 'routes';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lightTheme, darkTheme } from 'theme';
import { GlobalStyle } from './GlobalStyle';
import { useStore } from 'stores/store';

const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const VideoList = lazy(() => import('./VideoList/VideoList'));
const Account = lazy(() => import('pages/Account'));

export const App = () => {
  const { setAuthUser, setMovies } = useStore(
    state => ({
      loading: state.loading,
      error: state.error,
      setAuthUser: state.setAuthUser,
      setMovies: state.setSavedMovies,
    }),
    shallow
  );

  const [theme, setTheme] = useState(
    localStorage.getItem('MOVIE_APP') || 'light'
  );

  useEffect(() => {
    localStorage.setItem('MOVIE_APP', theme);
  }, [theme]);

  useEffect(() => {
    (async () => {
      await setAuthUser();
      await setMovies();
    })();
  }, [setAuthUser, setMovies]);

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
          <Route
            path="account"
            element={
              <PrivatRoute redirectTo="/login" component={<Account />} />
            }
          />
          <Route
            path="register"
            element={<RestrictedRoute component={<Register />} />}
          />
          <Route
            path="login"
            element={<RestrictedRoute component={<Login />} />}
          />
          <Route
            path="movies"
            element={<PrivatRoute redirectTo="/login" component={<Movies />} />}
          />
          <Route
            path="movies/:movieId"
            element={
              <PrivatRoute redirectTo="./login" component={<MovieDetails />} />
            }
          >
            <Route
              path="cast"
              element={
                <PrivatRoute redirectTo="./login " component={<Cast />} />
              }
            />
            <Route
              path="videos"
              element={
                <PrivatRoute redirectTo="./login " component={<VideoList />} />
              }
            />
            <Route
              path="reviews"
              element={
                <PrivatRoute redirectTo="./login" component={<Reviews />} />
              }
            />
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
