import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

const API_KEY = 'a5f5962e6f7f3d792e77e5ce1e0a6398';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  return response.data.results;
};

export const fetchMoviesByKeyword = async (query, page) => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
  );
  return response.data.results;
};
