import React, { useEffect, useState, useRef } from 'react';
import { ShowList, Pagination, Error } from 'components';
import queryString from 'query-string';
import { useLocation, useParams } from 'react-router-dom';
import { getRecommendations } from 'api/tmdb';
import { scroller, Element } from 'react-scroll';
import { Styled } from './styled';

const Recommended = () => {
  const { id } = useParams();

  const location = useLocation();

  const [recommendations, setRecommendations] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pages = useRef(1);
  const params = queryString.parse(location.search);

  useEffect(() => {
    async function getData() {
      const res = await getRecommendations(params.page, id);
      if (res.error) {
        setError(res.error);
      } else {
        setRecommendations(res.data);
        pages.current = res.data.total_pages;
      }
      setIsLoading(false);
    }
    getData();

    return () => setIsLoading(true);
  }, [id, params.page]);

  const scrollHandler = () => {
    scroller.scrollTo('scroll-to-element', {
      duration: 1500,
      smooth: 'easeInOutQuart',
      offset: -50,
    });
  };

  return error ? (
    <Error message={error} />
  ) : (
    <Styled.Recommended>
      <Element name="scroll-to-element">
        <Styled.Title>Recommended</Styled.Title>
      </Element>
      {recommendations?.results.length !== 0 ? (
        <>
          <ShowList isLoading={isLoading} shows={recommendations?.results} />
          <Pagination
            scrollHandler={scrollHandler}
            willScroll
            currentPage={parseInt(params.page ?? '1')}
            totalPages={pages.current}
            size={7}
          />
        </>
      ) : (
        'No recommendations found for this show'
      )}
    </Styled.Recommended>
  );
};

export default Recommended;
