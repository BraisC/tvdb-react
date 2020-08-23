import React, { useEffect, useState, useRef } from 'react';
import { ShowList, Pagination, Error } from 'components';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { getShowsSearch } from 'api/tmdb';
import queryString from 'query-string';
import { Helmet } from 'react-helmet';
import { Styled } from './styled';

const SearchPage = () => {
  const history = useHistory();
  const { query } = useParams();
  const location = useLocation();
  const [shows, setShows] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const pages = useRef(1);
  const prevLocation = useRef(location.pathname);

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

  useEffect(() => {
    if (prevLocation !== location.pathname) window.scrollTo(0, 0);
    prevLocation.current = location.pathname;
  }, [location.pathname]);

  return error ? (
    <Error />
  ) : (
    <Styled.Wrapper>
      <Helmet>
        <title>TVDB - Search: {query}</title>
      </Helmet>
      <Styled.PageTitle>{`search: ${query}`}</Styled.PageTitle>
      {shows?.results.length !== 0 ? (
        <>
          <ShowList isLoading={isLoading} shows={shows?.results} />
          <Pagination
            currentPage={parseInt(params.page ?? '1')}
            totalPages={pages.current}
            size={7}
          />
        </>
      ) : (
        'No results found for this search'
      )}
    </Styled.Wrapper>
  );
};

export default SearchPage;
