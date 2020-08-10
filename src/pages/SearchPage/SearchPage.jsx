import React, { useEffect, useState } from 'react';
import { ShowList, Pagination, ShowListLoader } from 'components';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { getShowsSearch } from 'api/tmdb';
import queryString from 'query-string';
import { Styled } from './styled';

const SearchPage = () => {
  const history = useHistory();
  const { query } = useParams();
  const location = useLocation();
  const [shows, setShows] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const params = queryString.parse(location.search);

  useEffect(() => {
    async function getData() {
      const res = await getShowsSearch(params.page, query);
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
  }, [query, history, params.page]);

  if (isLoading) {
    return (
      <Styled.Wrapper>
        <Styled.PageTitle>{query}</Styled.PageTitle>
        <ShowListLoader />
      </Styled.Wrapper>
    );
  }

  return (
    <Styled.Wrapper>
      <Styled.PageTitle>{query}</Styled.PageTitle>
      <ShowList shows={shows.results} />
      <Pagination
        currentPage={parseInt(params.page ?? '1')}
        totalPages={shows.total_pages}
        size={7}
      />
    </Styled.Wrapper>
  );
};

export default SearchPage;
