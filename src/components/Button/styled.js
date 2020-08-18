import styled from 'styled-components';

const Button = styled.div`
  padding: 0.8rem 3rem;
  background-color: var(--color-red);
  color: var(--color-white);
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: var(--shadow);
  }
  &:active {
    transform: translateY(0rem);
    box-shadow: initial;
  }
`;

export const Styled = {
  Button,
};
