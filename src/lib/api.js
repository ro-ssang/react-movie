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
  getUpcoming: () => instance.get('/movie/upcoming', { params: { region: 'KR' } }),
  getTopRated: () => instance.get('/movie/top_rated', { params: { region: 'KR' } }),
  getSearch: (keyword) => instance.get('/search/movie', { params: { query: decodeURIComponent(keyword) } }),
  getCredits: (movieId) => instance.get(`/movie/${movieId}/credits`),
  getVideos: (movieId) => instance.get(`/movie/${movieId}/videos`),
};

export const tvApi = {
  getPopular: () => instance.get('/tv/popular'),
  getDetail: (tvId) => instance.get(`/tv/${tvId}`),
  getTopRated: () => instance.get('/tv/top_rated'),
  getAiringToday: () => instance.get('/tv/airing_today'),
  getOnTheAir: () => instance.get('/tv/on_the_air'),
  getSearch: (keyword) => instance.get('/search/tv', { params: { query: decodeURIComponent(keyword) } }),
  getCredits: (tvId) => instance.get(`/tv/${tvId}/credits`),
  getVideos: (tvId) => instance.get(`/tv/${tvId}/videos`),
};
