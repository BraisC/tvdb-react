import React, { useEffect, useState, useContext, useRef } from 'react';
import { ShowList, Pagination, Error } from 'components';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { getShowsGenre } from 'api/tmdb';
import queryString from 'query-string';
import { GenresContext } from 'contexts/genresContext';
import { Helmet } from 'react-helmet';
import { animateScroll as scroll } from 'react-scroll';
import { Styled } from './styled';

const GenrePage = () => {
  const history = useHistory();
  const { genre } = useParams();
  const location = useLocation();
  const [shows, setShows] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const genres = useContext(GenresContext);
  const [error, setError] = useState(false);
  const pages = useRef(1);
  const prevLocation = useRef(location.pathname);

  const params = queryString.parse(location.search);

  useEffect(() => {
    async function getData() {
      if (genres) {
        const genreId = genres?.filter((v) => v.name === genre).map((v) => v.id);
        const res = await getShowsGenre(params.page, genreId);
        if (res.error) {
          setError(true);
        } else {
          setShows(res.data);
          pages.current = res.data.total_pages;
        }
        setIsLoading(false);
      }
    }
    getData();

    return () => setIsLoading(true);
  }, [genre, history, params.page, genres]);

  useEffect(() => {
    if (prevLocation !== location.pathname) window.scrollTo(0, 0);
    prevLocation.current = location.pathname;
  }, [location.pathname]);

  const scrollHandler = () => {
    scroll.scrollToTop({
      smooth: true,
    });
  };

  return error ? (
    <Error />
  ) : (
    <Styled.Wrapper>
      <Helmet>
        <title>TVDB - {genre}</title>
      </Helmet>
      <Styled.PageTitle>{genre}</Styled.PageTitle>
      <ShowList isLoading={isLoading} shows={shows?.results} />
      <Pagination
        scrollHandler={scrollHandler}
        willScroll
        currentPage={parseInt(params.page ?? '1')}
        totalPages={pages.current}
        size={7}
      />
    </Styled.Wrapper>
  );
};

export default GenrePage;
