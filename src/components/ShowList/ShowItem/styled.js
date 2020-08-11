import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Item = styled.div`
  color: var(--color-text);
  opacity: ${(props) => (props.loaded ? '1' : '0')};
  transition: opacity 1s ease;
`;

const Title = styled.span`
  display: inline-block;
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.6rem;
  transition: color 0.2s ease;
`;

const Image = styled.img`
  width: 100%;
  height: 38rem;
  object-fit: cover;
  transition: 0.2s ease;

  &.missing-poster {
    object-fit: contain;
    background-color: var(--color-primary);
  }
`;

const Overlay = styled.div`
  background-color: rgba(var(--color-transparency), 0.96);
  height: 38rem;
  width: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 2;
  transition: opacity 0.2s ease;
  padding: 2rem 0;
`;

const ItemLink = styled(Link)`
  color: var(--color-text);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  box-shadow: 6px 6px 13px rgba(0, 0, 0, 0.4);
  transition: 0.2s ease;
  overflow: hidden;
  position: relative;

  &:hover {
    transform: scaleY(1.2) scaleX(1.4);
    box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.3);
  }

  &:hover ${Image} {
    transform: scaleY(1.2);
  }

  &:hover ${Overlay} {
    opacity: 1;
  }
`;

const Content = styled.div`
  transform: scaleX(0.87);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  opacity: ${(props) => (props.contentLoaded ? '1' : '0')};
  transition: opacity 1s ease;

  & h2 {
    font-weight: 600;
    font-size: 2rem;
  }
`;

const ContentHeader = styled.div``;

const ContentSummary = styled.div`
  & h3 {
    font-size: 1.4rem;
  }
  & p {
    font-size: 1.1rem;
  }
`;
const ContentSeasons = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
`;

const ContentStatus = styled.div`
  & h3 {
    font-size: 1.4rem;
  }
  & p {
    font-size: 1.1rem;
  }
`;

const ContentFooter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const ContentRating = styled.div`
  & h3 {
    font-size: 1.4rem;
  }
`;

const ContentStars = styled.div`
  color: var(--color-red);
`;
const ContentLogo = styled.img`
  max-width: ${(props) => (props.small ? '4rem' : '9rem')};
`;

export const Styled = {
  Item,
  ItemLink,
  Title,
  Image,
  Overlay,
  Content,
  ContentHeader,
  ContentSummary,
  ContentSeasons,
  ContentStatus,
  ContentRating,
  ContentFooter,
  ContentStars,
  ContentLogo,
};
