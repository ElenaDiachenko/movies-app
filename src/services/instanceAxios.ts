import axios from 'axios';

const API_URL = `https://api.themoviedb.org/3/`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.response.use(
  config => {
    return config;
  },
  async error => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(`${API_URL}auth/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem('token_moms', response.data.token);
        return $api.request(originalRequest);
      } catch (e) {
        // localStorage.removeItem('token_moms');
        // localStorage.removeItem('persist:auth');
      }
    }
    throw error;
  }
);

export default $api;
