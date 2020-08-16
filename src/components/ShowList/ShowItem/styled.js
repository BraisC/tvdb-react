import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ShowItem = styled(motion.div)`
  color: var(--color-text);
`;

const Title = styled.span`
  display: inline-block;
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.6rem;
  transition: color 0.2s ease;
`;

const Poster = styled.div`
  background-color: var(--color-primary);
  position: relative;
  transition: transform 0.2s ease;
`;

const PosterImage = styled.img`
  width: 100%;
  height: 38rem;
  transition: opacity 1s ease;
  display: block;
`;

const PosterLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Overlay = styled.div`
  background-color: var(--color-transparency);
  height: 38rem;
  width: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 2;
  transition: opacity 0.2s ease;
  padding: 2rem 0;
`;

const ShowItemLink = styled(Link)`
  color: var(--color-text);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  box-shadow: 6px 6px 13px rgba(0, 0, 0, 0.4);
  transition: 0.2s ease;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: scaleY(1.2) scaleX(1.4);
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.3);
  }

  &:hover ${Poster} {
    transform: scaleY(1.2);
  }

  &:hover ${Overlay} {
    opacity: 1;
  }
`;

const Content = styled(motion.div)`
  transform: scaleX(0.87);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  & h2 {
    font-weight: 600;
    font-size: 2rem;
  }
`;

const ContentHeader = styled.div``;

const ContentSummary = styled.div`
  & h3 {
    font-size: 1.4rem;
  }
  & p {
    font-size: 1.1rem;
  }
`;
const ContentSeasons = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
`;

const ContentStatus = styled.div`
  & h3 {
    font-size: 1.4rem;
  }
  & p {
    font-size: 1.1rem;
  }
`;

const ContentFooter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const ContentRating = styled.div`
  & h3 {
    font-size: 1.4rem;
  }
`;

const ContentStars = styled.div`
  color: var(--color-red);

  & span {
    margin-right: 2px;
  }
`;
const ContentLogo = styled.img`
  max-width: ${(props) => (props.small ? '5rem' : '9rem')};
  opacity: ${(props) => (props.logoLoaded ? '1' : '0')};
  transition: opacity 1s ease;
`;

export const Styled = {
  ShowItem,
  ShowItemLink,
  Title,
  Poster,
  PosterImage,
  PosterLoader,
  Overlay,
  Content,
  ContentHeader,
  ContentSummary,
  ContentSeasons,
  ContentStatus,
  ContentRating,
  ContentFooter,
  ContentStars,
  ContentLogo,
};
