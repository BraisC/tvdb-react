import axios from 'axios';
import { mapShowPage, mapConfig, mapShowList, mapShowDetails } from 'mappers';

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
    const detailsRes = await tmdb.get(`/tv/${id}`);
    res.data = mapShowDetails(detailsRes.data);
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
    const certRes = await tmdb.get(`/tv/${id}/content_ratings`);
    res.data = certRes.data;
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
    const listRes = await tmdb.get(`/tv/${path}`, {
      params: {
        page,
      },
    });

    res.data = mapShowList(listRes.data);
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
    const searchRes = await tmdb.get(`/search/tv`, {
      params: {
        page,
        query,
      },
    });

    res.data = mapShowList(searchRes.data);
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
    res.data = await tmdb.get(`/discover/tv`, {
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
    const creditsRes = await tmdb.get(`/tv/${id}/credits`);
    res.data = creditsRes.data;
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
    const recRes = await tmdb.get(`/tv/${id}/recommendations`, {
      params: {
        page,
      },
    });

    res.data = mapShowList(recRes.data);
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
    const videosRes = await tmdb.get(`/tv/${id}/videos`);
    res.data = videosRes.data;
  } catch (err) {
    res.error = err.response;
  }

  return res;
}

export async function getShowPage(id) {
  const res = {
    data: null,
    error: null,
  };

  try {
    const showRes = await getDetails(id);
    const certificationsRes = await getCertifications(id);
    const videosRes = await getVideos(id);
    res.data = mapShowPage(showRes.data, certificationsRes.data, videosRes.data);
  } catch (err) {
    res.error = err.response;
  }

  return res;
}
