import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  font-size: 1.4rem;
`;

const Button = styled(Link)`
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: var(--color-text);
  background-color: var(--color-primary);
  transition: 0.2s ease;

  &:hover {
    color: var(--color-red);
  }
`;

export const Styled = {
  Pagination,
  Button,
};
