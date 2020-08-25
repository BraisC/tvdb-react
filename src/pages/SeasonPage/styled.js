import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SeasonHeader = styled.div`
  padding: 2rem 4rem;
  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s ease;
  height: 18rem;

  @media ${(props) => props.theme.mediaQueries.phone} {
    padding: 1rem;
    height: 13rem;
  }
`;

const SeasonHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-text);
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${(props) => props.theme.mediaQueries.phone} {
    padding: 0;
  }
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  padding: 1rem;
  transition: 0.2s ease;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
  margin-right: 1rem;
  color: var(--color-red);
  transition: all 0.2s ease;
`;

const BackLink = styled(Link)`
  padding: 1rem;
  text-decoration: none;
  color: var(--color-text);
  font-size: 1.6rem;
  transition: 0.2s ease;

  &:hover ${Icon} {
    transform: translateX(-1rem);
  }
`;

const SeasonHeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
`;

const SelectWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;

  & ${Icon} {
    position: absolute;
    right: 10%;
    top: 40%;
    pointer-events: none;
  }
`;

const Select = styled.select`
  margin: 1rem;
  padding: 1rem;
  font-size: 1.5rem;
  width: 100%;
  border: none;
  color: var(--color-text);
  background-color: var(--color-secondary);
  transition: 0.2s ease;
  appearance: none;
`;

const Wrapper = styled.div`
  color: var(--color-text);
  padding: 3rem 3rem;
  display: flex;
  flex-direction: column;
  transition: color 0.2s ease;

  @media ${(props) => props.theme.mediaQueries.phone} {
    padding: 2rem 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 100;

  margin-bottom: 4rem;
`;

const Overview = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--color-primary);
  padding: 1rem;
  margin-bottom: 4rem;

  @media ${(props) => props.theme.mediaQueries.phone} {
    flex-direction: column;
    align-items: center;
  }

  & div {
    padding: 0 2rem;
    @media ${(props) => props.theme.mediaQueries.phone} {
      padding: 0;
    }
  }

  & h2 {
    font-size: 1.8rem;
    margin-bottom: 0.2rem;
  }

  & p {
    font-size: 1.5rem;
  }
`;

const Poster = styled.picture`
  height: 18rem;
  width: 12rem;
  flex-shrink: 0;

  @media ${(props) => props.theme.mediaQueries.phone} {
    margin-bottom: 1rem;
  }
`;

const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${(props) => (props.missingPoster ? 'initial' : 'cover')};
`;

const Episodes = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 2rem;
`;

const GoTop = styled.button`
  padding: 1rem;
  margin-top: 2rem;
  font-size: 1.4rem;
  border: none;
  background-color: var(--color-secondary);
  color: var(--color-text);
  cursor: pointer;
  transition: 0.2s ease;

  &:hover ${Icon} {
    transform: translateY(-0.5rem);
  }
`;

export const Styled = {
  SeasonHeader,
  SeasonHeaderLeft,
  BackLink,
  Icon,
  Poster,
  PosterImage,
  TitleWrapper,
  PageTitle,
  SeasonHeaderRight,
  Select,
  SelectWrapper,
  Wrapper,
  Overview,
  Title,
  Episodes,
  GoTop,
};
