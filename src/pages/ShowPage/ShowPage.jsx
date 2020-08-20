import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getShowPage } from 'api/tmdb';

import { Styled } from './styled';

import { ShowInfo } from './ShowInfo';
import { Casting } from './Casting';
import { Seasons } from './Seasons';
import { Recommended } from './Recommended';
import '../../../node_modules/react-modal-video/scss/modal-video.scss';

const ShowPage = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [show, setShow] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      const res = await getShowPage(id);

      if (res.error) {
        setError(true);
      } else {
        setShow(res.data);
      }
      setIsLoading(false);
    }
    getData();
    return () => setIsLoading(true);
  }, [id]);

  return error ? (
    'Error'
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
