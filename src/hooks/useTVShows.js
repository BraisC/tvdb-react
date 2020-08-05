import { useEffect, useState } from 'react';
import tmdbAPI from 'api/tmdb';

export const useTVShows = (page = '1', route = '/') => {
  const [data, setData] = useState([]);
  let path = route.replace('shows/', '').split(' ').join('_');
  path = path === '/' ? '/popular' : path;

  useEffect(() => {
    const fetchData = async () => {
      const res = await tmdbAPI.get(`/tv${path}`, {
        params: {
          page,
        },
      });

      setData(res.data);
    };

    fetchData();
  }, [page, path]);

  return data;
};
