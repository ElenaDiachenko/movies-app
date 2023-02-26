import axios from 'axios';

const API_URL = `https://api.themoviedb.org/3/`;

const $api = axios.create({
  baseURL: API_URL,
});

export default $api;
