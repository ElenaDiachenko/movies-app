//trending, genre - number
import { ResultDTO } from './ITrendingDTO';
import { IMovieByIdDTO } from './IMovieByIdTDO';

export interface IMovieData {
  id: ResultDTO['id'];
  poster_path?: ResultDTO['poster_path'];
  title?: ResultDTO['title'];
  release_date?: ResultDTO['release_date'];
  vote_average?: ResultDTO['vote_average'];
  overview?: ResultDTO['overview'];
  genres_ids?: ResultDTO['genre_ids'];
  genres?: string[];
}

export interface IMovieByIdData {
  poster_path: IMovieByIdDTO['poster_path'];
  title: IMovieByIdDTO['title'];
  release_date: IMovieByIdDTO['release_date'];
  vote_average: IMovieByIdDTO['vote_average'];
  overview: IMovieByIdDTO['overview'];
  genres: IMovieByIdDTO['genres'];
}

export interface IMovieDataByKeyword {
  id?: number;
  page: number;
  total_pages: number;
  total_results: number;
  results: IMovieData[];
}
