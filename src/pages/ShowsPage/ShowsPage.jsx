import React, { useEffect, useState } from 'react';
import { ShowList } from 'components';
import { useLocation } from 'react-router-dom';
import { getShows } from 'api/tmdb';

const ShowsPage = () => {
  const location = useLocation();
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await getShows('1', 'pene');
      if (res.error) {
        console.log(res.error);
      } else {
        setShows(res.data);
      }
    }

    getData();
  }, [location.pathname]);

  console.log(shows);
  console.log(location);

  return (
    <>
      <ShowList />;
    </>
  );
};

export default ShowsPage;

//Aqui hacemos la request
