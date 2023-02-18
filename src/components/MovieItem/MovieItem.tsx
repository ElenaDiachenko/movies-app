import { FC } from 'react';
import { ImageBox, MoviePoster, Title, Content } from './MovieItem.styled';
import { IMG_PATH } from '../../pages/Home';
import bgImage from '../../images/image.png';
import { IMovieData } from 'interfaces/IMovieData';

type MovieItemProps = {
  movie: IMovieData;
};

export const MovieItem: FC<MovieItemProps> = ({ movie }) => {
  const { id, title, poster_path } = movie;
  return (
    <ImageBox>
      <MoviePoster
        src={poster_path ? IMG_PATH + poster_path : bgImage}
        alt={title}
      />
      <Content>
        <Title>{title}</Title>
      </Content>
    </ImageBox>
  );
};
