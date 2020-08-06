import axios from 'axios';

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_API,
  },
});

export async function getShows(page = 1, route = '/') {
  let path = route.replace('shows/', '').split(' ').join('_');
  path = path === '/' ? '/popular' : path;

  const res = await tmdb.get(`/tv${path}`, {
    params: {
      page,
    },
  });

  return res;
}

export default tmdb;
