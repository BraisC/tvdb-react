import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { missingPoster } from 'images';
import utils from 'utils';
import { ShowList, Pagination, ShowListLoader } from 'components';
import { getDetails, getCredits, getRecommendations } from 'api/tmdb';
import queryString from 'query-string';
import { Styled } from './styled';

const ShowPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState();
  const [credits, setCredits] = useState();
  const [recommendations, setRecommendations] = useState();

  const params = queryString.parse(location.search);

  useEffect(() => {
    async function getData() {
      const res = await getDetails(id);
      if (res.error) {
        history.push('/error');
      } else {
        setShow(res.data.data);
      }
      const creditsRes = await getCredits(id);
      if (creditsRes.error) {
        history.push('/error');
      } else {
        setCredits(creditsRes.data.data);
      }
      const recommendationsRes = await getRecommendations(params.page, id);
      if (recommendationsRes.error) {
        history.push('/error');
      } else {
        setRecommendations(recommendationsRes.data.data);
      }
      setIsLoading(false);
    }
    getData();
    return () => setIsLoading(true);
  }, [history, id, params.page]);

  console.log(credits);
  console.log(recommendations);
  console.log(show);
  console.log(isLoading);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <Styled.Wrapper>
      <Styled.ShowInfo
        background={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${show.backdrop_path}`}
      >
        <Styled.Filter />
        <Styled.Poster>
          <Styled.PosterImage
            src={
              show.poster_path
                ? `https://image.tmdb.org/t/p/w780${show.poster_path}`
                : missingPoster
            }
            alt=""
          />
        </Styled.Poster>
        <Styled.Data>
          <h1>{utils.generateTitle(show)}</h1>
          <span>{show.genres.map((genre) => genre.name).join(', ')}</span>
          <span>{show.episode_run_time} min</span>
          <p>{show.overview}</p>
          <span>{show.status}</span>
          <Styled.ContentRating>
            <h3>Rating</h3>
            <Styled.ContentStars>{utils.generateStars(show.vote_average)}</Styled.ContentStars>
          </Styled.ContentRating>
        </Styled.Data>
      </Styled.ShowInfo>
      <Styled.CastingContainer>
        <h2>Casting</h2>
        <Styled.Casting>
          {credits.cast.map((v) => (
            <Styled.CastingItem key={v.id}>
              <Styled.CastingImage
                src={`https://image.tmdb.org/t/p/w185${v.profile_path}`}
                alt={v.name}
              />
            </Styled.CastingItem>
          ))}
        </Styled.Casting>
      </Styled.CastingContainer>

      <div>
        <h2>Seasons</h2>
        {show.seasons.map((v) => (
          <div key={v.id}>{v.name}</div>
        ))}
      </div>
      <div>
        <h2>Recommended</h2>
        <ShowList
          shows={recommendations.results}
          few={recommendations.total_results < 5 ? 'few' : null}
        />
        <Pagination
          currentPage={parseInt(params.page ?? '1')}
          totalPages={recommendations.total_pages}
          size={7}
        />
      </div>
    </Styled.Wrapper>
  );
};

export default ShowPage;
