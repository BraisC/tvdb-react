import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  color: var(--color-text);
`;

const Title = styled.span`
  display: inline-block;
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.6rem;
  transition: color 0.2s ease;
`;

const ItemLink = styled(Link)`
  color: var(--color-text);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  box-shadow: 6px 6px 13px rgba(0, 0, 0, 0.4);

  & img {
    width: 100%;
    height: 37.5rem;
    object-fit: cover;
  }
`;

export const Styled = {
  Wrapper,
  ItemLink,
  Title,
};
