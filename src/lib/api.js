import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY,
    language: 'ko',
  },
});

export const movieApi = {
  getPopular: () => instance.get('/movie/popular', { params: { region: 'KR' } }),
  getDetail: (movieId) => instance.get(`/movie/${movieId}`),
  getNowPlaying: () => instance.get('/movie/now_playing', { params: { region: 'KR' } }),
};

export const tvApi = {
  getPopular: () => instance.get('/tv/popular'),
  getDetail: (tvId) => instance.get(`/tv/${tvId}`),
};
