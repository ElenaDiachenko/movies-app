import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { IMG_PATH } from 'pages/Movies';
import bgImage from 'images/image.png';
import { Box } from '../Box';
import {
  ContainerCard,
  MoviePoster,
  MovieTitle,
  DescriptionName,
  DescriptionText,
  DescriptionTextItem,
  Link,
} from './MovieCard.styled';
import { Loader } from 'components/Loader/Loader';
import { MovieByIdDataType } from 'interfaces/MovieDataTypes';

export const MovieCard = ({ movie }: { movie: MovieByIdDataType }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  const location = useLocation();

  return (
    <>
      <ContainerCard>
        <MoviePoster
          src={poster_path ? IMG_PATH + poster_path : bgImage}
          alt={title}
        />

        <Box display="flex" flexGrow={1} flexDirection="column" gridGap={12}>
          <MovieTitle>{`${title} (${
            release_date ? release_date.slice(0, 4) : ''
          })`}</MovieTitle>

          <Box display="flex" gridGap={16}>
            <DescriptionName>User Score:</DescriptionName>
            <DescriptionText>
              {vote_average ? (vote_average * 10).toFixed(0) : 0}%
            </DescriptionText>
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
        <Box
          display="flex"
          flexDirection="column"
          gridGap={12}
          p={15}
          width={1}
        >
          <DescriptionName>Aditional information</DescriptionName>
          <Box as="ul" display="flex" gridGap={12}>
            <Box
              as="li"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Link to="cast" state={location.state}>
                Cast
              </Link>
            </Box>
            <Box
              as="li"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Link to="reviews" state={location.state}>
                Reviews
              </Link>
            </Box>
            <Box
              as="li"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Link to="videos" state={location.state}>
                Videos
              </Link>
            </Box>
          </Box>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Box>
      </ContainerCard>
    </>
  );
};
