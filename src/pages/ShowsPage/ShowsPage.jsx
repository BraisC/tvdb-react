import React, { useEffect, useState, useRef } from 'react';
import { ShowList, Pagination, Error } from 'components';
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
  const [error, setError] = useState(false);
  const pages = useRef(1);

  const params = queryString.parse(location.search);

  useEffect(() => {
    async function getData() {
      const res = await getShows(params.page, category);
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
  }, [category, history, params.page]);

  return error ? (
    <Error />
  ) : (
    <Styled.Wrapper>
      <Styled.PageTitle>{category ?? 'popular'}</Styled.PageTitle>
      <ShowList isLoading={isLoading} shows={shows?.results} />
      <Pagination currentPage={parseInt(params.page ?? '1')} totalPages={pages.current} size={7} />
    </Styled.Wrapper>
  );
};

export default ShowsPage;
