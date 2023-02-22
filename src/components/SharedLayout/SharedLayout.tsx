import { Suspense, FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Container, HeaderWrap, Link } from './SharedLayout.styled';

interface IProps {
  toggleTheme: () => void;
  theme: string;
}

export const SharedLayout: FC<IProps> = ({ toggleTheme, theme }) => {
  return (
    <Container>
      <HeaderWrap>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
        <div onClick={toggleTheme}>
          {theme === 'light' ? (
            <MdLightMode size={14} />
          ) : (
            <MdDarkMode size={14} />
          )}{' '}
          <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
        </div>
      </HeaderWrap>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
