import { requests } from 'services/API';

export const movieRows = [
  { id: '1', title: 'UpComming', fetchData: requests.fetchUpcomingMovies },
  { id: '2', title: 'NowPlaying', fetchData: requests.fetchNowPlayingMovies },
  { id: '3', title: 'TopRated', fetchData: requests.fetchTopRatedMovies },
  { id: '4', title: 'Popular', fetchData: requests.fetchPopularMovies },
];
