import styled from 'styled-components';

const Footer = styled.footer`
  grid-area: footer;
  background: var(--color-primary);
  transition: 0.2s ease;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 15rem;
  margin-left: 0.5rem;
`;

const Credits = styled.span`
  color: var(--color-text);
  font-size: 1.3rem;
  transition: 0.2s ease;

  & a {
    text-decoration: none;
    color: var(--color-text);
    transition: 0.2s ease;

    &:hover {
      color: var(--color-red);
    }
  }
`;

const Attribution = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--color-text);
  margin-top: 1rem;
`;

export const Styled = {
  Footer,
  Logo,
  Credits,
  Attribution,
};
