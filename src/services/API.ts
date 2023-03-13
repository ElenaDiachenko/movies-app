import axios from './instanceAxios';
import { getTransformedArray } from 'utils/getTransformedArray';
import { IMoviesDTO, ResultDTO } from 'interfaces/IMoviesDTO';
import { IMovieByIdDTO } from 'interfaces/IMovieByIdTDO';
import { IMovieDataByKeyword } from 'interfaces/IMovieData';
import { ICreditsDTO } from 'interfaces/ICreditsDTO';
import { IReviewsDTO } from 'interfaces/IReviewsDTO';
import { IVideoDTO } from 'interfaces/IVideoDTO';
import { IGenresData } from 'interfaces/IGenresData';
import { PersistState } from 'stores/store';

const API_KEY = process.env.REACT_APP_MOVIE_IMDB_API_KEY;

const getBaseTransformedData = (data: ResultDTO[]) => {
  const { state }: PersistState = JSON.parse(
    localStorage.getItem('state') || ''
  );

  if (state === '' || !state?.movies?.length) {
    return data.map(it => ({
      id: it.id,
      poster_path: it.poster_path,
      title: it.title,
      release_date: it.release_date,
      vote_average: it.vote_average,
      overview: it.overview,
      saved: false,
      genre_ids: it.genre_ids,
    }));
  }

  const transformResult = getTransformedArray(data, state.movies, {
    saved: true,
  });

  return transformResult.map(it => ({
    id: it.id,
    poster_path: it.poster_path,
    title: it.title,
    release_date: it.release_date,
    vote_average: it.vote_average,
    overview: it.overview,
    saved: it.saved || false,
    genre_ids: it.genre_ids,
  }));
};

const fetchTrendingMovies = async (page: number) => {
  const { data } = await axios.get<IMoviesDTO>(
    `trending/movie/day?api_key=${API_KEY}&page=${page}`
  );

  const transformedData = getBaseTransformedData(data.results);
  return { total_pages: data.total_pages, results: transformedData };
};

const fetchMoviesByKeyword = async (query: string, page: number) => {
  const { data } = await axios.get<IMoviesDTO>(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
  );
  const transformedData: IMovieDataByKeyword = {
    total_pages: data.total_pages,
    results: data.results.map(it => ({
      id: it.id,
      poster_path: it.poster_path,
      title: it.title,
      release_date: it.release_date,
      vote_average: it.vote_average,
      overview: it.overview,
      genre_ids: it.genre_ids,
    })),
  };

  return transformedData;
};

const fetchMovieById = async (movieId: string) => {
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

const fetchCast = async (movieId: string) => {
  const { data } = await axios.get<ICreditsDTO>(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  const response = data.cast;
  const transformedData = response.map(it => ({
    id: it.id,
    profile_path: it.profile_path,
    name: it.name,
    character: it.character,
  }));
  return transformedData;
};

const fetchReviews = async (movieId: string) => {
  const { data } = await axios.get<IReviewsDTO>(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  const response = data.results;
  const transformedData = response.map(it => ({
    id: it.id,
    author: it.author,
    content: it.content,
  }));
  return transformedData;
};

const fetchPopularMovies = async () => {
  const { data } = await axios.get<IMoviesDTO>(
    `movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  const response = data.results;
  const transformedData = getBaseTransformedData(response);
  return transformedData;
};

const fetchTopRatedMovies = async () => {
  const { data } = await axios.get<IMoviesDTO>(
    `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
  const response = data.results;
  const transformedData = getBaseTransformedData(response);
  return transformedData;
};

const fetchUpcomingMovies = async () => {
  const { data } = await axios.get<IMoviesDTO>(
    `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  );
  const response = data.results;
  const transformedData = getBaseTransformedData(response);
  return transformedData;
};

const fetchNowPlayingMovies = async () => {
  const { data } = await axios.get<IMoviesDTO>(
    `movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
  );
  const response = data.results;
  const transformedData = getBaseTransformedData(response);
  return transformedData;
};

const fetchVideo = async (movieId: string) => {
  const { data } = await axios.get<IVideoDTO>(
    `movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
  );
  return data.results;
};

const fetchGenreList = async () => {
  const { data } = await axios.get<IGenresData>(
    `genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

const fetchMoviesByGenre = async (query: string, page: number) => {
  const { data } = await axios.get<IMoviesDTO>(
    `discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${query}`
  );
  const transformedData = getBaseTransformedData(data.results);
  return { total_pages: data.total_pages, results: transformedData };
};

export const requests = {
  fetchTrendingMovies,
  fetchMoviesByKeyword,
  fetchMovieById,
  fetchCast,
  fetchReviews,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchNowPlayingMovies,
  fetchVideo,
  fetchGenreList,
  fetchMoviesByGenre,
};
