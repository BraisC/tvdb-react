import styled from 'styled-components';

const Footer = styled.footer`
  grid-area: footer;
  background: var(--color-primary);
  transition: 0.2s ease;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const Logo = styled.img`
  width: 15rem;
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
  gap: 5px;
  text-decoration: none;
  color: var(--color-text);
`;

export const Styled = {
  Footer,
  Logo,
  Credits,
  Attribution,
};
