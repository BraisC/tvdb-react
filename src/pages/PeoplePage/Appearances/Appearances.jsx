import React, { useEffect, useState } from 'react';
import { ShowList } from 'components';

import { useParams } from 'react-router-dom';
import { getAppearances } from 'api/tmdb';
import ShowListLoader from 'components/ShowListLoader/ShowListLoader';
import { Styled } from './styled';

const Appearances = () => {
  const { id } = useParams();

  const [appearances, setAppearances] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const res = await getAppearances(id);

      if (res.error) {
        setError(true);
      } else {
        setAppearances(res.data);
      }
      setIsLoading(false);
    }
    getData();

    return () => setIsLoading(true);
  }, [id]);

  return error ? (
    'Error'
  ) : (
    <Styled.Appearances>
      <h1>Appearances</h1>
      {isLoading ? (
        <>
          <ShowListLoader />
        </>
      ) : (
        <>
          {appearances.results.length ? (
            <>
              <ShowList
                shows={appearances.results}
                few={appearances.total_results < 5 ? 'few' : null}
              />
            </>
          ) : (
            'No appearances found for this show'
          )}
        </>
      )}
    </Styled.Appearances>
  );
};

export default Appearances;
