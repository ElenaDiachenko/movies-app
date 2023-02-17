//trending, genre - number
import { ResultDTO } from './ITrendingDTO';

export interface IMovieData {
  id?: ResultDTO['id'];
  poster_path?: ResultDTO['poster_path'];
  title?: ResultDTO['title'];
  release_date?: ResultDTO['release_date'];
  vote_average?: ResultDTO['vote_average'];
  overview?: ResultDTO['overview'];
  genres_ids?: ResultDTO['genre_ids'];
  genres?: string[];
}

export interface IMovieDataByKeyword {
  id?: number;
  page: number;
  total_pages: number;
  total_results: number;
  results: IMovieData[];
}
