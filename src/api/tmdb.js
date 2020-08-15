import axios from 'axios';
import { mapShowPage, mapConfig } from 'mappers';

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_API,
  },
});

export async function getConfig() {
  const res = {
    data: null,
    error: null,
  };
  try {
    const configRes = await tmdb.get(`/configuration`);
    res.data = mapConfig(configRes.data);
  } catch (err) {
    res.error = err.response;
  }

  return res;
}

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

export async function getCertifications(id) {
  const res = {
    data: null,
    error: null,
  };
  try {
    res.data = await tmdb.get(`/tv/${id}/content_ratings`);
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

export async function getCredits(id) {
  const res = {
    data: null,
    error: null,
  };
  try {
    res.data = await tmdb.get(`/tv/${id}/credits`);
  } catch (err) {
    res.error = err.response;
  }

  return res;
}

export async function getRecommendations(page = 1, id) {
  const res = {
    data: null,
    error: null,
  };
  try {
    res.data = await tmdb.get(`/tv/${id}/recommendations`, {
      params: {
        page,
      },
    });
  } catch (err) {
    res.error = err.response;
  }

  return res;
}

export async function getVideos(id) {
  const res = {
    data: null,
    error: null,
  };
  try {
    res.data = await tmdb.get(`/tv/${id}/videos`);
  } catch (err) {
    res.error = err.response;
  }

  return res;
}

export async function getShowsPage(page = 1, id) {
  const res = {
    data: null,
    error: null,
  };

  try {
    const showRes = await getDetails(id);
    const creditsRes = await getCredits(id);
    const recommendationsRes = await getRecommendations(page, id);
    const certificationsRes = await getCertifications(id);
    const videosRes = await getVideos(id);
    res.data = mapShowPage(
      showRes.data.data,
      creditsRes.data.data,
      recommendationsRes.data.data,
      certificationsRes.data.data,
      videosRes.data.data
    );
  } catch (err) {
    res.error = err.response;
  }

  return res;
}
