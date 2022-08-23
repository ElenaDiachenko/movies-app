import { Container, HeaderWrap, Link } from './Header.styled';

export const Header = ({ children }) => {
  return (
    <HeaderWrap>
      <Container>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
        {children}
      </Container>
    </HeaderWrap>
  );
};
