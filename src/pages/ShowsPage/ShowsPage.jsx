import React from 'react';
import { ShowList } from 'components';
import { useTVShows } from 'hooks/useTVShows';
import { useLocation } from 'react-router-dom';

const ShowsPage = () => {
  const location = useLocation();
  const data = useTVShows('1', location.pathname);

  console.log(location);
  console.log(data);

  return (
    <>
      <ShowList />;
    </>
  );
};

export default ShowsPage;

//Aqui hacemos la request
