import { Suspense, FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Container, HeaderWrap, Link, Switch } from './SharedLayout.styled';

interface IProps {
  toggleTheme: () => void;
  theme: string;
}

export const SharedLayout: FC<IProps> = ({ toggleTheme, theme }) => {
  return (
    <Container>
      <HeaderWrap>
        <Switch onClick={toggleTheme}>
          {theme === 'light' ? (
            <MdLightMode size={24} />
          ) : (
            <MdDarkMode size={24} />
          )}
        </Switch>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </HeaderWrap>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
