import axios from 'axios';

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_API,
  },
});

export async function getGenres() {
  const res = {
    data: null,
    error: null,
  };
  try {
    res.data = await tmdb.get(`/genre/tv/list`);
  } catch (err) {
    res.error = err.response;
  }

  return res;
}

export async function getDetails(id) {
  const res = {
    data: null,
    error: null,
  };
  try {
    res.data = await tmdb.get(`/tv/${id}`);
  } catch (err) {
    res.error = err.response;
  }

  return res;
}

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

export async function getShowsSearch(page = 1, query) {
  const res = {
    data: null,
    error: null,
  };
  try {
    res.data = await tmdb.get(`/search/tv/`, {
      params: {
        page,
        query,
      },
    });
  } catch (err) {
    res.error = err.response;
  }

  return res;
}

export async function getShowsGenre(page = 1, genres) {
  const res = {
    data: null,
    error: null,
  };
  try {
    res.data = await tmdb.get(`/discover/tv/`, {
      params: {
        page,
        with_genres: genres.join(','),
      },
    });
  } catch (err) {
    res.error = err.response;
  }

  return res;
}
