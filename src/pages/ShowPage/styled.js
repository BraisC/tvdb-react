import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  color: var(--color-text);
  display: flex;
  flex-direction: column;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
  margin-right: 8px;
`;

const SeasonsContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 3rem 6rem;

  & h1 {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 100;
    margin-bottom: 4rem;
  }
`;

const SeasonsWrapper = styled.div`
  margin-left: 0 1rem;
  width: 100%;
  align-self: center;
`;

const SeasonsItemWrapper = styled.div`
  width: 100%;
  display: flex !important;
  padding: 2rem 0;
  justify-content: center;
  align-items: center;
`;

const SeasonsItem = styled(Link)`
  width: 90%;
  text-decoration: none;
  height: 100%;

  color: var(--color-text);
`;

const SeasonsItemContent = styled.div`
  max-width: 50rem;
  box-shadow: var(--shadow);
  display: flex;
  background-color: var(--color-primary);
  transition: background-color 0.2s ease, color 0.2s ease;

  & h2 {
    font-size: 1.4rem;
    margin-bottom: 5px;
  }

  & span {
    font-size: 1.2rem;
  }
`;

const SeasonsItemImageWrapper = styled.figure`
  height: 22.5rem;
  padding: 1rem;
  flex-shrink: 0;
`;

const SeasonsItemImage = styled.img`
  height: 100%;
  background-color: var(--color-text);
  display: block;
  object-fit: cover;
`;

const SeasonsItemInfo = styled.section`
  padding: 1rem;

  & h2 {
    font-size: 1.6rem;
  }

  & p {
    margin-top: 1rem;
  }
`;

const RecommendedContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 3rem 6rem;

  & > h1 {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 100;
    margin-bottom: 4rem;
  }
`;

export const Styled = {
  Wrapper,
  VideoWrapper,
  Icon,

  SeasonsContainer,
  SeasonsWrapper,
  SeasonsItemWrapper,
  SeasonsItem,
  SeasonsItemInfo,
  SeasonsItemImage,
  SeasonsItemImageWrapper,
  SeasonsItemContent,
  RecommendedContainer,
};
