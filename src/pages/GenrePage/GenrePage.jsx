import React, { useEffect, useState, useContext } from 'react';
import { ShowList, Pagination, ShowListLoader } from 'components';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { getShowsGenre } from 'api/tmdb';
import queryString from 'query-string';
import { GenresContext } from 'contexts/genresContext';
import { Styled } from './styled';

const GenrePage = () => {
  const history = useHistory();
  const { genre } = useParams();
  const location = useLocation();
  const [shows, setShows] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const genres = useContext(GenresContext);

  const params = queryString.parse(location.search);

  useEffect(() => {
    async function getData() {
      if (genres) {
        const genreId = genres?.filter((v) => v.name === genre).map((v) => v.id);
        const res = await getShowsGenre(params.page, genreId);
        if (res.error) {
          history.push('/error');
          setIsLoading(false);
        } else {
          setShows(res.data.data);
          setIsLoading(false);
        }
      }
    }
    getData();

    return () => setIsLoading(true);
  }, [genre, history, params.page, genres]);

  return (
    <>
      <Styled.PageTitle>{genre}</Styled.PageTitle>
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
    </>
  );
};

export default GenrePage;
