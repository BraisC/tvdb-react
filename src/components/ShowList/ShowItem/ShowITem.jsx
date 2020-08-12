import React, { useState, useRef } from 'react';
import { missingPoster } from 'images';
import { getDetails } from 'api/tmdb';
import { AnimatePresence } from 'framer-motion';
import utils from 'utils';
import { Styled } from './styled';

const ShowItem = ({ show }) => {
  const [posterLoaded, setPosterLoaded] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [details, setDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const imgHeight = useRef();

  const handleHover = async () => {
    if (!details) {
      const res = await getDetails(show.id);
      if (res.error) {
        setIsLoading(false);
      } else {
        setDetails(res.data.data);
        setIsLoading(false);
      }
    }
  };

  const handleContentLoad = (event) => {
    const img = new Image();
    img.src = event.target.src;
    imgHeight.current = img.height;
    setContentLoaded(true);
  };

  const handlePosterLoad = () => {
    setPosterLoaded(true);
  };

  return (
    <AnimatePresence>
      <Styled.Item
        animate={posterLoaded && { opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        onMouseEnter={handleHover}
      >
        <Styled.ItemLink to={`${process.env.PUBLIC_URL}/show/${show.name}`}>
          <Styled.Overlay>
            {isLoading ? (
              'Loading'
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
                      small={imgHeight.current > 100}
                      onLoad={handleContentLoad}
                      contentLoaded={contentLoaded}
                      src={`https://image.tmdb.org/t/p/w154${details.networks[0]?.logo_path}`}
                      alt="Network"
                    />
                  ) : null}
                </Styled.ContentFooter>
              </Styled.Content>
            )}
          </Styled.Overlay>
          <Styled.Image
            loading="lazy"
            onLoad={handlePosterLoad}
            src={
              show.poster_path
                ? `https://image.tmdb.org/t/p/w342${show.poster_path}`
                : missingPoster
            }
            alt={show.name}
            className={show.poster_path ? null : 'missing-poster'}
          />
        </Styled.ItemLink>
        <Styled.Title>{utils.generateTitle(show)}</Styled.Title>
      </Styled.Item>
    </AnimatePresence>
  );
};

export default ShowItem;
