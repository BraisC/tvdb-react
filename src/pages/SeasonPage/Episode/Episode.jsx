import React, { useState, useContext } from 'react';
import { Loader, Stars } from 'components';
import { ConfigContext } from 'contexts/configContext';
import { missingPoster } from 'images';
import { Styled } from './styled';

const Episode = ({ episode }) => {
  const config = useContext(ConfigContext);
  const [posterLoaded, setPosterLoaded] = useState(false);

  const handlePosterLoad = () => {
    setPosterLoaded(true);
  };

  return (
    <Styled.EpisodeWrapper key={episode.id}>
      <Styled.EpisodePoster missingPoster={!episode?.still_path}>
        {!posterLoaded && (
          <Styled.EpisodePosterImageLoader>
            <Loader />
          </Styled.EpisodePosterImageLoader>
        )}
        <Styled.EpisodePosterImage
          srcSet={`${
            episode?.still_path
              ? `${config?.url}${config?.still.normal}${episode?.still_path}`
              : missingPoster
          } 185w,${
            episode?.still_path
              ? `${config?.url}${config?.still.big}${episode?.still_path}`
              : missingPoster
          } 320w `}
          sizes="(min-width: 416px) and (max-width: 1200px) 180px, (max-width: 415px) 360px, 340px"
          src={
            episode?.still_path
              ? `${config?.url}${config?.still.big}${episode?.still_path}`
              : missingPoster
          }
          missingPoster={!episode?.still_path}
          onLoad={handlePosterLoad}
          style={{ opacity: posterLoaded ? '1' : '0' }}
          alt={episode?.name}
        />
      </Styled.EpisodePoster>
      <Styled.EpisodeInfo>
        <Styled.InfoHeader>
          <Styled.InfoTitle>
            {episode.episode_number} - {episode.name}
          </Styled.InfoTitle>
          <Styled.InfoStars>
            <Stars valoration={episode.vote_average} />
          </Styled.InfoStars>
        </Styled.InfoHeader>
        <Styled.Info>
          <Styled.InfoOverview>{episode.overview}</Styled.InfoOverview>
        </Styled.Info>
      </Styled.EpisodeInfo>
    </Styled.EpisodeWrapper>
  );
};

export default Episode;
