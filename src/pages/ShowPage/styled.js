import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  width: 50rem;
  z-index: 2;
  padding: 4rem;
  /* background-color: rgba(var(--color-transparency), 0.8); */
`;

const PosterImage = styled.img`
  width: 100%;
  display: block;
  box-shadow: 6px 6px 13px rgba(0, 0, 0, 0.4);
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
  & h3 {
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
  & h3 {
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

const Casting = styled.div`
  overflow-x: hidden;
`;

const CastingItemsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
`;

const CastingItem = styled.div`
  flex: 0 0 10rem;
`;

const CastingImage = styled.img`
  width: 100px;
  background-color: var(--color-text);
  height: 100%;
  display: block;
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
  Casting,
  CastingImage,
  CastingItemsWrapper,
  CastingItem,
  CastingContainer,
  SeasonsContainer,
  RecommendedContainer,
};
