import styled from 'styled-components';

const EpisodeWrapper = styled.article`
  display: flex;
  padding: 1rem;
  background-color: var(--color-primary);
  transition: 0.2s ease;

  @media ${(props) => props.theme.mediaQueries.phone} {
    flex-direction: column;
  }
`;

const EpisodePoster = styled.picture`
  width: 20rem;
  height: 12rem;
  flex-shrink: 0;
  position: relative;

  @media ${(props) => props.theme.mediaQueries.phone} {
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
  @media ${(props) => props.theme.mediaQueries.phoneSmall} {
    height: ${(props) => (props.missingPoster ? '12rem' : 'auto')};
  }
`;

const EpisodePosterImageLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const EpisodePosterImage = styled.img`
  opacity: 0;
  width: 100%;
  height: 100%;
  object-fit: ${(props) => (props.missingPoster ? 'initial' : 'cover')};
  transition: opacity 1s ease;

  @media ${(props) => props.theme.mediaQueries.phone} {
    width: auto;
  }
  @media ${(props) => props.theme.mediaQueries.phoneSmall} {
    width: ${(props) => (props.missingPoster ? 'auto' : '100%')};
  }
`;

const EpisodeInfo = styled.section`
  width: 100%;
  padding: 0 2rem;

  @media ${(props) => props.theme.mediaQueries.phone} {
    padding: 0rem;
  }
`;

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const InfoTitle = styled.h1`
  font-size: 1.8rem;
  line-height: 1;
  margin-right: 1rem;
`;

const InfoStars = styled.div`
  color: var(--color-red);
  line-height: 1;
  margin-left: auto;
  white-space: nowrap;

  & span {
    margin-right: 2px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
`;

const InfoOverview = styled.p`
  font-size: 1.4rem;
`;

export const Styled = {
  EpisodeWrapper,
  EpisodePoster,
  EpisodePosterImage,
  EpisodePosterImageLoader,
  EpisodeInfo,
  InfoHeader,
  InfoStars,
  InfoTitle,
  Info,
  InfoOverview,
};
