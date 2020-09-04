import axios from 'axios';
import { mapShowPage, mapConfig, mapShowList, mapShowDetails } from 'mappers';
import { mapAppearences } from 'mappers/AppearancesMapper';
import { mapSeasonPage } from 'mappers/SeasonPageMapper';

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_API,
  },
});

async function getData(route, mapper, params = {}) {
  const res = {
    data: null,
    error: null,
  };
  try {
    const resData = await tmdb.get(route, {
      params,
    });
    res.data = mapper ? mapper(resData.data) : resData.data;
  } catch (err) {
    res.error = err.message;
  }
  return res;
}

export async function getConfig() {
  return getData(`/configuration`, mapConfig);
}

export async function getGenres() {
  return getData(`/genre/tv/list`);
}

export async function getDetails(id) {
  return getData(`/tv/${id}`, mapShowDetails);
}

export async function getCertifications(id) {
  return getData(`/tv/${id}/content_ratings`);
}

export async function getShows(page = 1, route = '/') {
  let path = route.split(' ').join('_');
  path = path === '/' ? 'popular' : path;

  return getData(`/tv/${path}`, mapShowList, { page });
}

export async function getShowsSearch(page = 1, query) {
  return getData(`/search/tv`, mapShowList, { page, query });
}

export async function getShowsGenre(page = 1, genres) {
  return getData(`/discover/tv`, mapShowList, {
    page,
    with_genres: genres.join(','),
  });
}

export async function getCredits(id) {
  return getData(`/tv/${id}/credits`);
}

export async function getRecommendations(page = 1, id) {
  return getData(`/tv/${id}/recommendations`, mapShowList, { page });
}

export async function getVideos(id) {
  return getData(`/tv/${id}/videos`);
}

export async function getPeopleDetails(id) {
  return getData(`/person/${id}`);
}

export async function getAppearances(id) {
  const res = await getData(`/person/${id}/tv_credits`, mapAppearences);
  const arr = res.data.results;
  const rest = arr.reduce((acc, val) => {
    const x = acc.find((el) => el.id === val.id);
    if (!x) {
      return acc.concat([val]);
    }
    return acc;
  }, []);
  res.data = { results: rest };

  return res;
}

//These are some special cases

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
    res.error = err.message;
  }

  return res;
}

export async function getSeasonDetails(id, number) {
  const res = {
    data: null,
    error: null,
  };
  try {
    const showRes = await getDetails(id);
    const seasonRes = await tmdb.get(`/tv/${id}/season/${number}`);
    res.data = mapSeasonPage(seasonRes.data, showRes.data);
  } catch (err) {
    res.error = err.message;
  }

  return res;
}
