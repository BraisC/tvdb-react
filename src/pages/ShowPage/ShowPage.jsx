import React, { useEffect, useState, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { getShowPage } from 'api/tmdb';
import { Error } from 'components';

import { Styled } from './styled';

import { ShowInfo } from './ShowInfo';
import { Casting } from './Casting';
import { Seasons } from './Seasons';
import { Recommended } from './Recommended';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

const ShowPage = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const [show, setShow] = useState();
  const [error, setError] = useState(false);
  const prevLocation = useRef(location.pathname);

  useEffect(() => {
    async function getData() {
      const res = await getShowPage(id);
      if (res.error) {
        setError(res.error);
      } else {
        setShow(res.data);
      }
      setIsLoading(false);
    }
    getData();
    return () => setIsLoading(true);
  }, [id]);

  useEffect(() => {
    if (prevLocation !== location.pathname) window.scrollTo(0, 0);
    prevLocation.current = location.pathname;
  }, [location.pathname]);

  return error ? (
    <Error message={error} />
  ) : (
    <Styled.Wrapper>
      <ShowInfo show={show} isLoading={isLoading} />
      <Casting parentLoading={isLoading} />
      <Seasons show={show} isLoading={isLoading} />
      <Recommended parentLoading={isLoading} />
    </Styled.Wrapper>
  );
};

export default ShowPage;
