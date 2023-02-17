import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, HeaderWrap, Link } from './SharedLayout.styled';
import { Loader } from '../Loader/Loader';

export const SharedLayout = () => {
  return (
    <Container>
      <HeaderWrap>
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
