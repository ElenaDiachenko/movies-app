import axios from 'axios';
import { ITrendingDTO } from 'interfaces/ITrendingDTO';
import { IMovieByIdDTO } from 'interfaces/IMovieByIdTDO';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

const API_KEY = 'a5f5962e6f7f3d792e77e5ce1e0a6398';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get<ITrendingDTO>(
    `trending/movie/day?api_key=${API_KEY}`
  );
  const response = data.results;

  const transformedData = response.map(it => ({
    id: it.id,
    poster_path: it.poster_path,
    title: it.title,
    release_date: it.release_date,
    vote_average: it.vote_average,
    overview: it.overview,
    genre_ids: it.genre_ids,
  }));
  return transformedData;
};

export const fetchMoviesByKeyword = async (query: string, page: number) => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
  );
  return response.data;
};

export const fetchMovieById = async (movieId: string) => {
  const { data } = await axios.get<IMovieByIdDTO>(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  const transformedData = {
    poster_path: data.poster_path,
    title: data.title,
    release_date: data.release_date,
    vote_average: data.vote_average,
    overview: data.overview,
    genres: data.genres,
  };
  return transformedData;
};

// api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
export const fetchCast = async (movieId: number) => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast;
};

export const fetchReviews = async (movieId: number) => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data.results;
};
