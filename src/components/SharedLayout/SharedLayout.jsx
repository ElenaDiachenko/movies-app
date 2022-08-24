import { Outlet } from 'react-router-dom';
import { Container, HeaderWrap, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <HeaderWrap>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </HeaderWrap>
      <Outlet />
    </Container>
  );
};
