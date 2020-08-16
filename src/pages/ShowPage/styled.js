import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  color: var(--color-text);
  display: flex;
  flex-direction: column;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
  margin-right: 8px;
`;

const ShowInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.background});
  background-size: cover;
  padding: 4rem;
  position: relative;
`;

const Filter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--color-transparency-show);
  transition: background-color 0.2s ease;
  z-index: 1;
`;

const Poster = styled.div`
  z-index: 2;
  background-color: var(--color-primary);
  position: relative;
`;

const PosterLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50rem;
  height: 75rem;
`;

const PosterImage = styled.img`
  width: 50rem;
  height: 75rem;
  display: block;
  box-shadow: 6px 6px 13px rgba(0, 0, 0, 0.4);
  transition: opacity 1s ease;
`;

const Data = styled.div`
  display: flex;
  align-self: stretch;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  max-width: 180rem;
  z-index: 2;
  /* background-color: rgba(var(--color-transparency), 0.8); */
  padding: 6rem;
`;

const DataHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DataHeaderLeft = styled.div`
  & div {
    display: flex;
    align-items: center;
  }
  & h1 {
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 0.2rem;
    display: inline-block;
    margin-right: 2rem;
  }

  & p {
    font-size: 1.2rem;
  }

  & span {
    font-size: 1.4rem;
    padding: 3px;
    border: 2px solid var(--color-text);
    line-height: 1;
  }
`;

const DataHeaderRight = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
`;

const DataSection = styled.div`
  & h2 {
    font-size: 2rem;
  }

  & p {
    font-size: 1.6rem;
    line-height: 1.4;
  }
`;

const DataSeasons = styled.h3`
  font-size: 2rem;
`;

const DataRating = styled.div`
  & h2 {
    font-size: 2rem;
  }
`;

const DataStars = styled.span`
  color: var(--color-red);
  font-size: 1.4rem;
  margin-right: 1rem;

  & span {
    margin-right: 2px;
  }
`;

const DataVotes = styled.span`
  font-size: 1.4rem;
`;

const DataFooter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
`;

const DataFooterLeft = styled.div`
  display: flex;
  gap: 2rem;
`;

const DataFooterRight = styled.div`
  max-height: 10rem;
  position: absolute;
  right: 0;

  & img {
    display: block;
    max-height: 10rem;
    height: 100%;
  }
`;

const DataFooterLink = styled.a`
  text-decoration: none;
  font-size: 1.8rem;
`;

const CastingContainer = styled.div`
  padding: 3rem 6rem;
  display: flex;
  flex-direction: column;

  & h2 {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 100;
    margin-bottom: 4rem;
  }
`;

const CastingWrapper = styled.div`
  margin-left: 1rem;
  width: 50%;
  align-self: center;
`;

const CastingItem = styled(Link)`
  width: 20rem;
  text-decoration: none;
  height: 100%;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  color: var(--color-text);
`;

const CastingItemContent = styled.div`
  width: 70%;
  box-shadow: 6px 6px 13px rgba(0, 0, 0, 0.4);

  & h3 {
    font-size: 1.4rem;
    margin-bottom: 5px;
  }

  & span {
    font-size: 1.2rem;
  }
`;

const CastingItemImageWrapper = styled.div`
  width: 100%;
`;

const CastingItemImage = styled.img`
  width: 100%;
  height: 20rem;
  background-color: var(--color-text);
  display: block;
  object-fit: cover;
`;

const CastingItemInfo = styled.div`
  background-color: var(--color-primary);
  padding: 1rem;
`;

const SeasonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 3rem 6rem;

  & h2 {
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

const SeasonsItem = styled(Link)`
  width: 100%;
  text-decoration: none;
  height: 100%;
  display: flex !important;
  padding: 2rem 0;
  color: var(--color-text);
  justify-content: center;
  align-items: center;
`;

const SeasonsItemContent = styled.div`
  width: 90%;
  max-width: 50rem;
  box-shadow: 6px 6px 13px rgba(0, 0, 0, 0.4);
  display: flex;
  background-color: var(--color-primary);

  & h3 {
    font-size: 1.4rem;
    margin-bottom: 5px;
  }

  & span {
    font-size: 1.2rem;
  }
`;

const SeasonsItemImageWrapper = styled.div`
  width: 30%;
  padding: 1rem;
`;

const SeasonsItemImage = styled.img`
  width: 100%;

  background-color: var(--color-text);
  display: block;
  object-fit: cover;
`;

const SeasonsItemInfo = styled.div`
  background-color: var(--color-primary);
  padding: 1rem;
  flex: 1;

  & h3 {
    font-size: 1.6rem;
  }

  & p {
    margin-top: 1rem;
  }
`;

const RecommendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 3rem 6rem;

  & h2 {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 100;
    margin-bottom: 4rem;
  }
`;

export const Styled = {
  Wrapper,
  Icon,
  ShowInfo,
  Filter,
  Poster,
  PosterLoader,
  PosterImage,
  Data,
  DataHeader,
  DataHeaderRight,
  DataHeaderLeft,
  DataSection,
  DataSeasons,
  DataStars,
  DataVotes,
  DataRating,
  DataFooter,
  DataFooterLink,
  DataFooterLeft,
  DataFooterRight,
  CastingItemImageWrapper,
  CastingItemImage,
  CastingItemInfo,
  CastingItem,
  CastingItemContent,
  CastingWrapper,
  CastingContainer,
  SeasonsContainer,
  SeasonsWrapper,
  SeasonsItem,
  SeasonsItemInfo,
  SeasonsItemImage,
  SeasonsItemImageWrapper,
  SeasonsItemContent,
  RecommendedContainer,
};
