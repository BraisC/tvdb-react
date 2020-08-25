import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Seasons = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding: 3rem;

  & h1 {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 100;
    margin-bottom: 4rem;
  }

  @media ${(props) => props.theme.mediaQueries.phone} {
    padding: 2rem;
  }
`;

const SeasonsWrapper = styled.div`
  width: 95%;
  align-self: center;
`;

const SeasonsItemWrapper = styled.div`
  width: 100%;
  display: flex !important;
  padding: 2rem 0;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

const SeasonsItem = styled(Link)`
  max-width: 50rem;
  width: 90%;
  text-decoration: none;
  height: 100%;
  color: var(--color-text);
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);

    @media ${(props) => props.theme.mediaQueries.phone} {
      transform: none;
    }
  }
`;

const SeasonsItemContent = styled.div`
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

/*   @media ${(props) => props.theme.mediaQueries.phoneSmall} {
    height: 21rem;
  } */
`;

const SeasonsItemImageWrapper = styled.figure`
  margin: 1rem;
  height: 21rem;
  background-color: var(--color-primary);
  transition: background-color 0.2s ease;
  position: relative;

/*   @media ${(props) => props.theme.mediaQueries.phoneSmall} {
    display: none;
  } */
`;

const SeasonsItemImageLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const SeasonsItemImage = styled.img`
  opacity: 0;
  width: 100%;
  height: 100%;
  width: ${(props) => (props.missingPoster ? '16rem' : 'initial')};
  display: block;
  transition: 1s ease;
  object-fit: ${(props) => (props.missingPoster ? 'initial' : 'cover')};
`;

const SeasonsItemInfo = styled.section`
  padding: 1rem;

  & h2 {
    font-size: 1.6rem;
  }

  & p {
    font-size: 1.2rem;
    margin-top: 1rem;
  }

  @media ${(props) => props.theme.mediaQueries.tabLand} {
    width: 100%;
  }
`;

const NoResult = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;

export const Styled = {
  Seasons,
  SeasonsWrapper,
  SeasonsItemWrapper,
  SeasonsItem,
  SeasonsItemInfo,
  SeasonsItemImageLoader,
  SeasonsItemImage,
  SeasonsItemImageWrapper,
  SeasonsItemContent,
  NoResult,
};
