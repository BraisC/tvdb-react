import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  font-size: 1.4rem;
  gap: 1rem;
`;

const Button = styled(Link)`
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: var(--color-text);
  background-color: var(--color-primary);
  transition: 0.2s ease;
  font-weight: 500;

  &.active {
    background-color: var(--color-red);
  }

  &:hover {
    color: ${(props) => (props.active ? 'var(--color-white)' : 'var(--color-red)')};
    cursor: ${(props) => (props.active ? 'default' : 'pointer')};
  }
`;

export const Styled = {
  Pagination,
  Button,
};
