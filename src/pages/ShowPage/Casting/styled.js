import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CastingContainer = styled.section`
  padding: 3rem;
  display: flex;
  flex-direction: column;

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

const CastingWrapper = styled.div`
  max-width: 110rem;
  width: 95%;
  align-self: center;

  &:focus {
    outline: none !important;
  }
`;

const CastingItemWrapper = styled.div`
  width: 100%;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;

  &:focus {
    outline: none;
  }
`;

const CastingItem = styled(Link)`
  text-decoration: none;
  height: 100%;
  width: 70%;
  max-width: 15.4rem;
  color: var(--color-text);
  box-shadow: var(--shadow);
  transition: all 0.2s ease;

  @media ${(props) => props.theme.mediaQueries.phoneSmall} {
    width: 80%;
  }

  &:hover {
    transform: scale(1.05);

    @media ${(props) => props.theme.mediaQueries.phone} {
      transform: none;
    }
  }
`;

const CastingItemImageWrapper = styled.figure`
  width: 100%;
  height: 20rem;
  background-color: var(--color-primary);
  transition: background-color 0.2s ease;

  @media ${(props) => props.theme.mediaQueries.phoneSmall} {
    height: 17rem;
  }
`;

const CastingItemImage = styled.img`
  width: 100%;
  height: ${(props) => (props.missingImage ? 'initial' : '100%')};
  padding-top: ${(props) => (props.missingImage ? '13%' : '0')};
  display: block;
  object-fit: cover;
`;

const CastingItemInfo = styled.section`
  background-color: var(--color-primary);
  transition: background-color 0.2s ease, color 0.2s ease;
  padding: 1rem;

  & h2 {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }

  & span {
    font-size: 1.3rem;
  }
`;

const NoResult = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

export const Styled = {
  CastingItemImageWrapper,
  CastingItemImage,
  CastingItemInfo,
  CastingItemWrapper,
  CastingItem,
  CastingWrapper,
  CastingContainer,
  NoResult,
};
