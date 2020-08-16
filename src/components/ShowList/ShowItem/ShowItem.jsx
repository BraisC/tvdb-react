import React, { useState, useRef, useEffect } from 'react';
import { missingPoster } from 'images';
import { getDetails } from 'api/tmdb';
import utils from 'utils';
import { Loader } from 'components';
import { Styled } from './styled';
import { ShowItemContentLoader } from './ShowItemContentLoader';

const ShowItem = ({ show }) => {
  const [details, setDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);
  const imgHeight = useRef();
  const isUnMounted = useRef(false);
  const handleHover = async () => {
    if (!details) {
      const res = await getDetails(show.id);
      if (res.error) {
        !isUnMounted.current && setIsLoading(false);
      } else {
        !isUnMounted.current && setDetails(res.data.data);
        !isUnMounted.current && setIsLoading(false);
      }
    }
  };

  const handleLogoLoad = (event) => {
    const img = new Image();
    img.src = event.target.src;
    imgHeight.current = img.height;
    !isUnMounted.current && setLogoLoaded(true);
  };

  const handlePosterLoad = () => {
    !isUnMounted.current && setPosterLoaded(true);
  };

  useEffect(
    () => () => {
      isUnMounted.current = true;
    },
    []
  );

  return (
    <Styled.ShowItem onMouseEnter={handleHover}>
      <Styled.ShowItemLink
        to={{
          pathname: `${process.env.PUBLIC_URL}/show/${show.id}`,
          state: {
            details,
          },
        }}
      >
        <Styled.Overlay>
          {isLoading ? (
            <ShowItemContentLoader />
          ) : (
            <Styled.Content
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Styled.ContentHeader>
                <h2>{utils.limitTextLength(utils.generateTitle(details))}</h2>
                <span>{details.genres.map((genre) => genre.name).join(', ')}</span>
              </Styled.ContentHeader>
              <Styled.ContentSummary>
                <h3>Summary</h3>
                <p>{utils.limitTextLength(details.overview, 200) || 'No summary'}</p>
              </Styled.ContentSummary>
              <Styled.ContentSeasons>
                {details.seasons?.length} {details.seasons?.length > 1 ? 'Seasons' : 'Season'}
              </Styled.ContentSeasons>
              <Styled.ContentStatus>
                <h3>Status</h3>
                <span>{details.status}</span>
              </Styled.ContentStatus>
              <Styled.ContentFooter>
                <Styled.ContentRating>
                  <h3>Rating</h3>
                  <Styled.ContentStars>
                    {utils.generateStars(details.vote_average)}
                  </Styled.ContentStars>
                </Styled.ContentRating>
                {details.networks[0]?.logo_path ? (
                  <Styled.ContentLogo
                    small={imgHeight.current > 80}
                    onLoad={handleLogoLoad}
                    logoLoaded={logoLoaded}
                    src={`https://image.tmdb.org/t/p/w154${details.networks[0]?.logo_path}`}
                    alt="Network"
                  />
                ) : null}
              </Styled.ContentFooter>
            </Styled.Content>
          )}
        </Styled.Overlay>
        <Styled.Poster>
          <Styled.PosterLoader
            style={{ visibility: !posterLoaded ? 'visible' : 'hidden', position: 'absolute' }}
          >
            <Loader />
          </Styled.PosterLoader>
          <Styled.PosterImage
            style={{ opacity: posterLoaded ? '1' : '0' }}
            loading="lazy"
            onLoad={handlePosterLoad}
            src={
              show.poster_path
                ? `https://image.tmdb.org/t/p/w342${show.poster_path}`
                : missingPoster
            }
            alt={show.name}
          />
        </Styled.Poster>
      </Styled.ShowItemLink>
      <Styled.Title>{utils.generateTitle(show)}</Styled.Title>
    </Styled.ShowItem>
  );
};

export default ShowItem;
