import axios from 'axios';
const API_KEY = '4f759a8f2a3c2252d280f73946c6d093';

export const fetchTopFilms = async () => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );
  return res.data.results;
};

export const fetchFilmsByName = async q => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${q}&api_key=${API_KEY}`
  );
  return res.data.results;
};

export const fetchFilmDetails = async id => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  return res;
};

export const fetchFilmCredits = async id => {
  const res = await axios.get(`
https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`);
  return res;
};

export const fetchFilmReviews = async id => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return res;
};
