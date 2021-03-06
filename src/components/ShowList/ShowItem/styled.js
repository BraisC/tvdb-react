import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ShowItem = styled(motion.article)`
  color: var(--color-text);
`;

const Title = styled.span`
  display: inline-block;
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.5rem;
  transition: color 0.2s ease;
`;

const Poster = styled.figure`
  position: relative;
  transition: transform 0.2s ease;
  height: 100%;
`;

const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  transition: opacity 1s ease;
  display: block;
  object-fit: ${(props) => (props.missingPoster ? 'initial' : 'cover')};
`;

const PosterLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Overlay = styled.div`
  background-color: var(--color-transparency);
  height: 100%;
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
  justify-content: center;
  box-shadow: var(--shadow);
  transition: 0.2s ease;
  overflow: hidden;
  position: relative;
  height: 37rem;
  background-color: var(--color-primary);

  @media ${(props) => props.theme.mediaQueries.phone} {
    height: 28rem;
  }

  @media ${(props) => props.theme.mediaQueries.phoneSmall} {
    height: 23rem;
  }

  &.hover {
    z-index: 4;
    transform: ${(props) => (props.$isMobile ? 'none' : 'scaleY(1.2) scaleX(1.4)')};
    box-shadow: ${(props) =>
      props.$isMobile ? 'var(--shadow)' : '6px 6px 20px rgba(0, 0, 0, 0.3)'};
  }

  &.hover ${Poster} {
    transform: ${(props) => (props.$isMobile ? 'none' : 'scaleY(1.2)')};
  }

  &.hover ${Overlay} {
    opacity: 1;
  }
`;

const Content = styled(motion.section)`
  transform: scaleX(0.87);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ContentHeader = styled.section`
  & h1 {
    font-weight: 600;
    font-size: 2rem;
  }
`;

const ContentSeasons = styled.section`
  font-weight: 600;
  font-size: 1.4rem;
`;

const ContentSection = styled.section`
  & h2 {
    font-size: 1.4rem;
  }

  & p {
    font-size: 1.1rem;
  }
`;

const ContentFooter = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
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
  ContentSection,
  ContentSeasons,
  ContentFooter,
  ContentStars,
  ContentLogo,
};
