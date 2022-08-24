import { Outlet } from 'react-router-dom';
import { IMG_PATH } from '../../pages/Home';
import { Box } from '../../components/Box';
import {
  ContainerCard,
  MoviePoster,
  MovieTitle,
  DescriptionName,
  DescriptionText,
  DescriptionTextItem,
  Link,
} from './MovieCard.styled';

export const MovieCard = ({ movie }) => {
  const { poster_path, title, genres, release_date, vote_average, overview } =
    movie;
  // const releaseDate = release_date.split('-')[0];
  return (
    <>
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
          <Box as="ul" display="flex" gridGap={12}>
            <Box
              as="li"
              display="flex"
              alightItems="center"
              justifyContent="center"
            >
              <Link to="cast">Cast</Link>
            </Box>
            <Box
              as="li"
              display="flex"
              alightItems="center"
              justifyContent="center"
            >
              <Link to="reviews">Reviews</Link>
            </Box>
          </Box>
          <Outlet />
        </Box>
      </ContainerCard>
    </>
  );
};
