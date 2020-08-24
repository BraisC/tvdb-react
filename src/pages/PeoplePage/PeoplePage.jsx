import React, { useEffect, useState, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getPeopleDetails } from 'api/tmdb';
import { Error } from 'components';
import { Styled } from './styled';
import { Appearances } from './Appearances';
import { PeopleInfo } from './PeopleInfo';

const PeoplePage = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  const [people, setPeople] = useState();
  const [error, setError] = useState(false);
  const prevLocation = useRef(location.pathname);

  useEffect(() => {
    async function getData() {
      const res = await getPeopleDetails(id);

      if (res.error) {
        setError(res.error);
      } else {
        setPeople(res.data);
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
      <PeopleInfo isLoading={isLoading} people={people} />
      <Appearances />
    </Styled.Wrapper>
  );
};

export default PeoplePage;
