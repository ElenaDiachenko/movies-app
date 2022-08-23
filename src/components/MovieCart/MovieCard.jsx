import { Link, Outlet } from 'react-router-dom';
import { IMG_PATH } from '../../pages/Home';
import { Box } from '../../components/Box';
import { Container } from 'components/Container/Container';
import {
  ContainerCard,
  MoviePoster,
  MovieTitle,
  DescriptionName,
  DescriptionText,
  DescriptionTextItem,
  // Link,
} from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  const { poster_path, title, genres, release_date, vote_average, overview } =
    movie;
  // const releaseDate = release_date.split('-')[0];
  return (
    <Container>
      <ContainerCard>
        <MoviePoster src={IMG_PATH + poster_path} alt={title} />

        <Box display="flex" flexDirection="column" gridGap={12} p={30} mb={30}>
          <MovieTitle>{`${title} ${release_date} `}</MovieTitle>

          <Box display="flex" gridGap={16}>
            <DescriptionName>User Score:</DescriptionName>
            <DescriptionText>{(vote_average * 10).toFixed(0)}%</DescriptionText>
          </Box>
          <Box display="flex" gridGap={12} flexDirection="column">
            <DescriptionName>Overview</DescriptionName>
            <DescriptionText>{overview}</DescriptionText>
          </Box>

          {genres && (
            <>
              <DescriptionName>Genres</DescriptionName>
              <Box as="ul" display="flex" gridGap={12}>
                {genres.map(genre => {
                  return (
                    <DescriptionTextItem key={genre.id}>
                      {genre.name}
                    </DescriptionTextItem>
                  );
                })}
              </Box>
            </>
          )}
        </Box>
      </ContainerCard>
      <ContainerCard>
        <Box display="flex" flexDirection="column" gridGap={12} p={15}>
          <DescriptionName>Aditional information</DescriptionName>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </Box>
      </ContainerCard>
    </Container>
  );
};
