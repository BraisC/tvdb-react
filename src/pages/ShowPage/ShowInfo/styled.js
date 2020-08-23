import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
  margin-right: 8px;
`;

const ShowInfo = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.background});
  background-size: cover;
  padding: 4rem;
  position: relative;
  overflow: hidden;
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  transition: opacity 1s ease;
`;

const Filter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--color-transparency-show);
  transition: background-color 0.2s ease;
  z-index: 1;
`;

const Poster = styled.figure`
  width: 50rem;
  height: 75rem;
  z-index: 2;
  background-color: var(--color-primary);
  position: relative;
`;

const PosterLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  box-shadow: var(--shadow);
  transition: opacity 1s ease;
  object-fit: cover;
`;

const Data = styled.section`
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
  & div {
    display: flex;
    align-items: center;
  }
  & h1 {
    font-size: 3rem;
    line-height: 1;

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
    transition: border 0.2s ease;
    line-height: 1;
  }
`;

const DataSubHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DataHeaderRight = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
`;

const DataSection = styled.section`
  & h2 {
    font-size: 2rem;
  }

  & p {
    font-size: 1.6rem;
    line-height: 1.4;
  }
`;

const DataSeasons = styled(Link)`
  padding: 0.5rem;
  text-decoration: none;
  color: var(--color-text);
  font-size: 2rem;
  transition: color 0.2s ease;
  line-height: 1;
  align-self: flex-start;

  & ${Icon} {
    color: var(--color-red);
    margin-left: 1rem;
    transition: 0.2s ease;
    line-height: 1;
  }

  &:hover ${Icon} {
    transform: translateX(1rem);
  }
`;

const DataRating = styled.section`
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

const DataFooter = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
`;

const DataFooterLeft = styled.div`
  display: flex;
  gap: 2rem;
`;

const DataFooterRight = styled.figure`
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

export const Styled = {
  Icon,
  ShowInfo,
  Background,
  Filter,
  Poster,
  PosterLoader,
  PosterImage,
  Data,
  DataHeader,
  DataHeaderRight,
  DataSubHeader,
  DataSection,
  DataSeasons,
  DataStars,
  DataVotes,
  DataRating,
  DataFooter,
  DataFooterLink,
  DataFooterLeft,
  DataFooterRight,
};
