import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  background: var(--color-primary);

  & a {
    color: var(--text-color);
  }
`;

const Logo = styled.div`
  background-color: var(--color-red);
  color: #f4f4f4;
  font-size: 3rem;
  font-weight: bold;
  padding: 1.3rem 5rem;
`;

export const Styled = {
  Header,
  Logo,
};
