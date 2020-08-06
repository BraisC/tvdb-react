import React, { useEffect, useState } from 'react';
import { ShowList } from 'components';
import { useLocation, useHistory } from 'react-router-dom';
import { getShows } from 'api/tmdb';

const ShowsPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  //const [error, setError] = useState();

  useEffect(() => {
    async function getData() {
      const res = await getShows('1', location.pathname);
      if (res.error) {
        setLoading(false);
        history.push('/error');
        console.log(res.error.status);

        // setError(res.error);
      } else {
        setLoading(false);
        setShows(res.data.data.results);
      }
    }

    getData();
  }, [location.pathname, history]);

  //console.log(error);
  console.log(shows);
  console.log(location);

  return loading ? 'Loading' : <ShowList shows={shows} />;
};

export default ShowsPage;
