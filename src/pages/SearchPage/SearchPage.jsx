import React, { useEffect, useState, useRef } from 'react';
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
  const [error, setError] = useState(false);
  const pages = useRef(1);

  const params = queryString.parse(location.search);

  useEffect(() => {
    async function getData() {
      const res = await getShowsSearch(params.page, query);
      if (res.error) {
        setError(true);
      } else {
        setShows(res.data);
        pages.current = res.data.total_pages;
      }
      setIsLoading(false);
    }
    getData();
    return () => setIsLoading(true);
  }, [query, history, params.page]);

  return error ? (
    'Error'
  ) : (
    <Styled.Wrapper>
      <Styled.PageTitle>{`search: ${query}`}</Styled.PageTitle>
      {isLoading ? (
        <>
          <ShowListLoader />
          <Pagination
            currentPage={parseInt(params.page ?? '1')}
            totalPages={pages.current}
            size={7}
          />
        </>
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

export default SearchPage;
