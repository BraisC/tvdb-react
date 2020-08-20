import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CastingContainer = styled.section`
  padding: 3rem 6rem;
  display: flex;
  flex-direction: column;

  & h1 {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 100;
    margin-bottom: 4rem;
  }
`;

const CastingWrapper = styled.div`
  max-width: 110rem;
  width: 100%;
  align-self: center;
`;

const CastingItemWrapper = styled.div`
  width: 100%;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

const CastingItem = styled(Link)`
  text-decoration: none;
  height: 100%;
  width: 70%;
  max-width: 15.4rem;
  color: var(--color-text);
  box-shadow: var(--shadow);
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const CastingItemImageWrapper = styled.figure`
  width: 100%;
  height: 20rem;
  background-color: var(--color-primary);
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
    font-size: 1.4rem;
    margin-bottom: 5px;
  }

  & span {
    font-size: 1.2rem;
  }
`;

export const Styled = {
  CastingItemImageWrapper,
  CastingItemImage,
  CastingItemInfo,
  CastingItemWrapper,
  CastingItem,
  CastingWrapper,
  CastingContainer,
};
