import axios from 'axios';

const moviesAPI = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'b28b490f154ff7780023675ee4255d6a',
    language: 'en-US',
    include_adult: false,
  },
});

export const getTrends = async () => {
  const { data } = await moviesAPI.get('/trending/movie/week');
  return data.results;
};

export const getMoviesByQuery = async query => {
  const { data } = await moviesAPI.get('/search/movie', {
    params: { query },
  });
  return data.results;
};

export const getMovieDetails = async id => {
  const { data } = await moviesAPI.get(`/movie/${id}`);
  return data;
};

export const getCast = async id => {
  const { data } = await moviesAPI.get(`/movie/${id}/credits`);
  return data.cast;
};

export const getReviews = async id => {
  const { data } = await moviesAPI.get(`/movie/${id}/reviews`);
  return data.results;
};
