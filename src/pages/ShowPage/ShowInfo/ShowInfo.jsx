import React, { useState, useContext, useEffect } from 'react';
import { ConfigContext } from 'contexts/configContext';

import { missingPoster } from 'images';
import { Button, Loader } from 'components';
import ModalVideo from 'react-modal-video';

import utils from 'utils';

import { faExternalLinkAlt, faVideo, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { Helmet } from 'react-helmet';

import { Styled } from './styled';
import { InfoLoader } from './Loader';

const ShowInfo = ({ show, isLoading }) => {
  const [backdropLoaded, setBackdropLoaded] = useState(false);
  const [posterLoaded, setPosterLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const config = useContext(ConfigContext);

  const handleBackdropLoad = () => {
    setBackdropLoaded(true);
  };
  const handlePosterLoad = () => {
    setPosterLoaded(true);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  useEffect(
    () => () => {
      setPosterLoaded(false);
      setBackdropLoaded(false);
    },
    [show]
  );

  const renderDurationCountry = (duration, country) => {
    let res = '';
    duration && (res += `${duration} min`);
    country && (res += ` / ${utils.getCountryName(country)}`);

    return res;
  };

  return isLoading ? (
    <InfoLoader />
  ) : (
    <>
      {show.video && (
        <ModalVideo
          channel="youtube"
          isOpen={isModalOpen}
          videoId={show.video}
          onClose={hideModal}
        />
      )}
      <Styled.ShowInfo>
        <Helmet>
          <title>TVDB - {show.name}</title>
        </Helmet>
        <Styled.Background>
          <Styled.BackgroundImage
            style={{ opacity: backdropLoaded ? '1' : '0' }}
            src={show.backdrop && `${config?.url}${config?.backdrop.custom}${show.backdrop}`}
            alt={show.name}
            onLoad={handleBackdropLoad}
          />
        </Styled.Background>
        <Styled.Filter />

        <Styled.Poster>
          {!posterLoaded && (
            <Styled.PosterLoader>
              <Loader />
            </Styled.PosterLoader>
          )}

          <Styled.PosterImage
            style={{ opacity: posterLoaded ? '1' : '0' }}
            srcSet={`
             ${
               show.poster ? `${config?.url}${config?.poster.smaller}${show.poster}` : missingPoster
             } 154w,
            
            ${
              show.poster ? `${config?.url}${config?.poster.small}${show.poster}` : missingPoster
            } 342w,
            ${
              show.poster ? `${config?.url}${config?.poster.normal}${show.poster}` : missingPoster
            } 500w 
            `}
            sizes="(min-width: 416px) and (max-width: 600px) 300px, (max-width: 415px) 144px,
            340px"
            src={
              show.poster ? `${config?.url}${config?.poster.normal}${show.poster}` : missingPoster
            }
            alt={show.name}
            onLoad={handlePosterLoad}
            missingPoster={!show.poster}
          />
        </Styled.Poster>
        <Styled.Data>
          <Styled.DataHeader>
            <div>
              <h1>{utils.generateTitle(show)}</h1>
              {show.rating && <span>{show.rating}</span>}
            </div>
            {(show.genres.length || show.duration || show.country) && (
              <Styled.DataSubHeader>
                <p>{show.genres.map((genre) => genre.name).join(', ')}</p>
                <p>{renderDurationCountry(show.duration, show.country)}</p>
              </Styled.DataSubHeader>
            )}
          </Styled.DataHeader>
          {show.overview && (
            <Styled.DataSection>
              <h2>Summary</h2>
              <p>{show.overview}</p>
            </Styled.DataSection>
          )}

          <Styled.DataSeasons to={`${process.env.PUBLIC_URL}/show/${show.id}/season/1`}>
            {show.seasons?.length} {show.seasons?.length > 1 ? 'Seasons' : 'Season'}
            <Styled.Icon icon={faChevronRight} />
          </Styled.DataSeasons>
          {show.creator && (
            <Styled.DataSection>
              <h2>Created by</h2>
              <p>{show.creator}</p>
            </Styled.DataSection>
          )}
          <Styled.DataSection>
            <h2>Status</h2>
            <p>{show.status}</p>
          </Styled.DataSection>
          <Styled.DataRating>
            <h2>Rating</h2>
            <Styled.DataStars>{utils.generateStars(show.vote_average)}</Styled.DataStars>
            <Styled.DataVotes>
              {`${show.vote_average} with 
              ${show.vote_count} votes`}
            </Styled.DataVotes>
          </Styled.DataRating>

          <Styled.DataFooter>
            <Styled.DataFooterLeft>
              {show.website && (
                <Styled.DataFooterLink href={show.website}>
                  <Button>
                    <Styled.Icon icon={faExternalLinkAlt} />
                    Website
                  </Button>
                </Styled.DataFooterLink>
              )}
              {show.video && (
                <Styled.DataFooterLink onClick={showModal}>
                  <Button>
                    <Styled.Icon icon={faVideo} />
                    Trailer
                  </Button>
                </Styled.DataFooterLink>
              )}
            </Styled.DataFooterLeft>
            <Styled.DataFooterRight>
              {show.network.logo ? (
                <img src={`${config?.url}/${config?.logo.big}${show.network.logo}`} alt="Network" />
              ) : null}
            </Styled.DataFooterRight>
          </Styled.DataFooter>
        </Styled.Data>
      </Styled.ShowInfo>
    </>
  );
};

export default ShowInfo;
