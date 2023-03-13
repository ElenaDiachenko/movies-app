import { ResultDTO } from './IMoviesDTO';
import { IMovieByIdDTO } from './IMovieByIdTDO';
import { ICast } from './ICreditsDTO';
import { IReview } from './IReviewsDTO';

export type MovieItemType = Pick<
  ResultDTO,
  | 'id'
  | 'poster_path'
  | 'title'
  | 'release_date'
  | 'vote_average'
  | 'overview'
  | 'genre_ids'
> & { saved: boolean };

export type MovieByIdDataType = Pick<
  IMovieByIdDTO,
  | 'poster_path'
  | 'title'
  | 'release_date'
  | 'vote_average'
  | 'overview'
  | 'genres'
>;

export type CastDataType = Pick<
  ICast,
  'id' | 'profile_path' | 'name' | 'character'
>;

export type ReviewDataType = Pick<IReview, 'id' | 'author' | 'content'>;
