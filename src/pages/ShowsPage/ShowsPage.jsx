import React, { useEffect, useState } from 'react';
import { ShowList, Pagination, ShowListLoader } from 'components';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { getShows } from 'api/tmdb';
import queryString from 'query-string';
import { Styled } from './styled';

const ShowsPage = () => {
  const history = useHistory();
  const { category } = useParams();
  const location = useLocation();
  const [shows, setShows] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const params = queryString.parse(location.search);

  useEffect(() => {
    async function getData() {
      const res = await getShows(params.page, category);
      if (res.error) {
        history.push('/error');
        setIsLoading(false);
      } else {
        setShows(res.data);
        setIsLoading(false);
      }
    }
    getData();
    return () => setIsLoading(true);
  }, [category, history, params.page]);

  return (
    <Styled.Wrapper>
      <Styled.PageTitle>{category ?? 'popular'}</Styled.PageTitle>
      {isLoading ? (
        <ShowListLoader />
      ) : (
        <>
          <ShowList shows={shows.results} few={shows.total_results < 5 ? 'few' : null} />
          <Pagination
            currentPage={parseInt(params.page ?? '1')}
            totalPages={shows.total_pages}
            size={7}
          />
        </>
      )}
    </Styled.Wrapper>
  );
};

export default ShowsPage;
