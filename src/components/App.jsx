import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { NotFound } from 'pages/NotFound';
import { Container, Header, Link } from './App.styled';

export const App = () => {
  // const response = fetchTrendingMovies();

  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          {/* <Link to="/about">About</Link>
        <Link to="/products">Products</Link> */}
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/products" element={<Products />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
