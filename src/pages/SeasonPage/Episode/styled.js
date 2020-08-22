import styled from 'styled-components';

const EpisodeWrapper = styled.article`
  display: flex;
  padding: 1rem;
  background-color: var(--color-primary);
  transition: 0.2s ease;
`;

const EpisodePoster = styled.picture`
  width: 20rem;
  height: 12rem;
  flex-shrink: 0;
`;

const EpisodePosterImage = styled.img`
  opacity: 0;
  width: 100%;
  height: 100%;
  object-fit: ${(props) => (props.missingPoster ? 'initial' : 'cover')};
`;

const EpisodeInfo = styled.section`
  width: 100%;
  padding: 0 2rem;
`;

const InfoHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const InfoTitle = styled.h1`
  font-size: 1.8rem;
  line-height: 1;
`;

const InfoStars = styled.div`
  color: var(--color-red);
  line-height: 1;
  margin-left: auto;

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
  EpisodeInfo,
  InfoHeader,
  InfoStars,
  InfoTitle,
  Info,
  InfoOverview,
};
