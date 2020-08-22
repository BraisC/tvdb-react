import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SeasonHeader = styled.div`
  padding: 2rem 4rem;

  background-color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  padding: 1rem;
`;

const Poster = styled.picture`
  width: 8rem;
  height: 12rem;
`;

const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  font-size: 1.4rem;
  width: 100%;
  border: none;
  color: var(--color-text);
  background-color: var(--color-secondary);
  appearance: none;
`;

export const Styled = {
  SeasonHeader,
  SeasonHeaderLeft,
  BackLink,
  Icon,
  Poster,
  PosterImage,
  TitleWrapper,
  Title,
  SeasonHeaderRight,
  Select,
  SelectWrapper,
};
