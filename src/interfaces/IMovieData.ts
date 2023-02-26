import { ResultDTO } from './IMoviesDTO';
import { IMovieByIdDTO } from './IMovieByIdTDO';
import { ICast } from './ICreditsDTO';
import { IReview } from './IReviewsDTO';

export interface IMovieData {
  id: ResultDTO['id'];
  poster_path?: ResultDTO['poster_path'];
  title?: ResultDTO['title'];
  release_date?: ResultDTO['release_date'];
  vote_average?: ResultDTO['vote_average'];
  overview?: ResultDTO['overview'];
  genres_ids?: ResultDTO['genre_ids'];
  saved?: boolean;
}

export interface IMovieByIdData {
  poster_path: IMovieByIdDTO['poster_path'];
  title: IMovieByIdDTO['title'];
  release_date: IMovieByIdDTO['release_date'];
  vote_average: IMovieByIdDTO['vote_average'];
  overview: IMovieByIdDTO['overview'];
  genres: IMovieByIdDTO['genres'];
  saved?: boolean;
}

export interface IMovieDataByKeyword {
  total_pages: number;
  results: IMovieData[];
}

export interface ICastData {
  id: ICast['id'];
  profile_path: ICast['profile_path'];
  name: ICast['name'];
  character: ICast['character'];
}

export interface IReviewData {
  id: IReview['id'];
  author: IReview['author'];
  content: IReview['content'];
}
