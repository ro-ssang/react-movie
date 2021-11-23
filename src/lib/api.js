import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_TMDB_API_KEY,
    language: 'ko',
    region: 'KR',
  },
});

export const movieApi = {
  getPopular: () => instance.get('/movie/popular'),
};