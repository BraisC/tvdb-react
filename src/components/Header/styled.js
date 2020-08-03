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
`;

export const Styled = {
  Header,
  Logo,
};
