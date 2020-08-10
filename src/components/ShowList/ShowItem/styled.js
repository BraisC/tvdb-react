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
  height: 37.5rem;
  object-fit: cover;
  transition: 0.2s ease;

  &.missing-poster {
    object-fit: contain;
    background-color: var(--color-primary);
  }
`;

const Overlay = styled.div`
  background-color: rgba(var(--color-transparency), 0.96);
  height: 37.5rem;
  width: 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 2;
  transition: 0.2s ease;
  padding: 2rem 0;
`;

const Content = styled.div`
  transform: scaleX(0.87);

  & h2 {
    font-weight: 600;
    font-size: 2rem;
  }
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

export const Styled = {
  Item,
  ItemLink,
  Title,
  Image,
  Overlay,
  Content,
};
