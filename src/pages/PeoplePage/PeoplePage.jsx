import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPeopleDetails } from 'api/tmdb';
import { Styled } from './styled';
import { Appearances } from './Appearances';

const PeoplePage = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [people, setPeople] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    async function getData() {
      const res = await getPeopleDetails(id);

      if (res.error) {
        setError(true);
      } else {
        setPeople(res.data);
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
      {isLoading ? (
        'Loading'
      ) : (
        <Styled.PeopleInfo>
          <h1>{people.name}</h1>
        </Styled.PeopleInfo>
      )}

      <Appearances />
    </Styled.Wrapper>
  );
};

export default PeoplePage;
