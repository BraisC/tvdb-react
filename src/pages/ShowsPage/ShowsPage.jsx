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
        setIsLoading(false);
      } else {
        setShows(res.data.data);
        setIsLoading(false);
      }
    }
    getData();
    return () => setIsLoading(true);
  }, [category, history, page]);
  console.log('render page');
  if (isLoading) {
    return 'Loading';
  }

  return (
    <Styled.Wrapper>
      <Styled.PageTitle>{category || 'popular'}</Styled.PageTitle>
      <ShowList shows={shows.results} />
      <div>{shows.total_pages}</div>
    </Styled.Wrapper>
  );
};

export default ShowsPage;
