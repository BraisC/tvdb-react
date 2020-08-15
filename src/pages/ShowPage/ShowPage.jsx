import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useHistory, Link } from 'react-router-dom';
import { missingPoster } from 'images';
import utils from 'utils';
import { ShowList, Pagination, ShowListLoader, Button } from 'components';
import { getShowsPage } from 'api/tmdb';
import queryString from 'query-string';
import { faExternalLinkAlt, faVideo } from '@fortawesome/free-solid-svg-icons';
import { Styled } from './styled';

const ShowPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState();

  const params = queryString.parse(location.search);

  useEffect(() => {
    async function getData() {
      const res = await getShowsPage(params.page, id);
      if (res.error) {
        history.push('/error');
      } else {
        setShow(res.data);
      }
      setIsLoading(false);
    }
    getData();
    return () => setIsLoading(true);
  }, [history, id, params.page]);

  console.log(show);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <Styled.Wrapper>
      <Styled.ShowInfo
        background={
          show.backdrop && `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${show.backdrop}`
        }
      >
        <Styled.Filter />
        <Styled.Poster>
          <Styled.PosterImage
            src={show.poster ? `https://image.tmdb.org/t/p/w780${show.poster}` : missingPoster}
            alt={show.name}
          />
        </Styled.Poster>
        <Styled.Data>
          <Styled.DataHeader>
            <Styled.DataHeaderLeft>
              <div>
                <h1>{utils.generateTitle(show)}</h1>
                <span>{show.rating}</span>
              </div>
              <p>{show.genres.map((genre) => genre.name).join(', ')}</p>
            </Styled.DataHeaderLeft>
            <Styled.DataHeaderRight>
              {`${show.duration} min / ${utils.getCountryName(show.country)}`}
            </Styled.DataHeaderRight>
          </Styled.DataHeader>
          <Styled.DataSection>
            <h3>Overview</h3>
            <p>{show.overview}</p>
          </Styled.DataSection>
          <Styled.DataSeasons>
            {show.seasons?.length} {show.seasons?.length > 1 ? 'Seasons' : 'Season'}
          </Styled.DataSeasons>
          <Styled.DataSection>
            <h3>Created by</h3>
            <p>{show.creator}</p>
          </Styled.DataSection>
          <Styled.DataSection>
            <h3>Status</h3>
            <p>{show.status}</p>
          </Styled.DataSection>
          <Styled.DataRating>
            <h3>Rating</h3>
            <Styled.DataStars>{utils.generateStars(show.vote_average)}</Styled.DataStars>
            <Styled.DataVotes>
              {`${show.vote_average} with 
              ${show.vote_count} votes`}
            </Styled.DataVotes>
          </Styled.DataRating>
          <Styled.DataFooter>
            <Styled.DataFooterLeft>
              <Styled.DataFooterLink href={show.website}>
                <Button>
                  <Styled.Icon icon={faExternalLinkAlt} />
                  Website
                </Button>
              </Styled.DataFooterLink>
              <Styled.DataFooterLink as={Link} to={show.website}>
                <Button>
                  <Styled.Icon icon={faVideo} />
                  Trailer
                </Button>
              </Styled.DataFooterLink>
            </Styled.DataFooterLeft>
            <Styled.DataFooterRight>
              {show.network.logo ? (
                <img src={`https://image.tmdb.org/t/p/w154${show.network.logo}`} alt="Network" />
              ) : null}
            </Styled.DataFooterRight>
          </Styled.DataFooter>
        </Styled.Data>
      </Styled.ShowInfo>
      <Styled.CastingContainer>
        <h2>Casting</h2>
        <Styled.Casting>
          <Styled.CastingItemsWrapper>
            {show.cast.map((v) => (
              <Styled.CastingItem key={v.id + v.character}>
                <Styled.CastingImage
                  src={`https://image.tmdb.org/t/p/w185${v.profile_path}`}
                  alt={v.name}
                />
              </Styled.CastingItem>
            ))}
          </Styled.CastingItemsWrapper>
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
          shows={show.recommendations.results}
          few={show.recommendations.total_results < 5 ? 'few' : null}
        />
        <Pagination
          currentPage={parseInt(params.page ?? '1')}
          totalPages={show.recommendations.total_pages}
          size={7}
        />
      </div>
    </Styled.Wrapper>
  );
};

export default ShowPage;
