import axios from 'axios';

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_API,
    language: 'en-US',
  },
});

export async function getShows(page = 1, route = '/') {
  let path = route.split(' ').join('_');
  path = path === '/' ? 'popular' : path;
  const res = {
    data: null,
    error: null,
  };
  try {
    res.data = await tmdb.get(`/tv/${path}`, {
      params: {
        page,
      },
    });
  } catch (err) {
    res.error = err.response;
  }

  return res;
}
