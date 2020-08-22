import React, { useState, useContext } from 'react';
import utils from 'utils';
import { Loader } from 'components';
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
      <Styled.EpisodePoster>
        {!posterLoaded && (
          <Styled.EpisodePosterImageLoader>
            <Loader />
          </Styled.EpisodePosterImageLoader>
        )}
        <Styled.EpisodePosterImage
          src={
            episode?.still_path
              ? `${config?.url}${config?.still.normal}${episode?.still_path}`
              : missingPoster
          }
          missingPoster={!episode?.still_path}
          onLoad={handlePosterLoad}
          style={{ opacity: posterLoaded ? '1' : '0' }}
        />
      </Styled.EpisodePoster>
      <Styled.EpisodeInfo>
        <Styled.InfoHeader>
          <Styled.InfoTitle>
            {episode.episode_number} - {episode.name}
          </Styled.InfoTitle>
          <Styled.InfoStars>{utils.generateStars(episode.vote_average)}</Styled.InfoStars>
        </Styled.InfoHeader>
        <Styled.Info>
          <Styled.InfoOverview>{episode.overview}</Styled.InfoOverview>
        </Styled.Info>
      </Styled.EpisodeInfo>
    </Styled.EpisodeWrapper>
  );
};

export default Episode;
