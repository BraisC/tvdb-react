import React, { useEffect, useState } from 'react';
import { ShowList } from 'components';
import { useParams, useHistory } from 'react-router-dom';
import { getShows } from 'api/tmdb';
import { Styled } from './styled';

const ShowsPage = () => {
  const history = useHistory();
  const { category } = useParams();
  const [shows, setShows] = useState();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const res = await getShows(page, category);
      if (res.error) {
        history.push('/error');
        console.log(res.error.status);
        setIsLoading(false);
      } else {
        setShows(res.data.data.results);
        setIsLoading(false);
      }
    }
    getData();
    return () => setIsLoading(true);
  }, [category, history, page]);

  return <Styled.Wrapper>{isLoading ? 'Loading' : <ShowList shows={shows} />}</Styled.Wrapper>;
};

export default ShowsPage;
