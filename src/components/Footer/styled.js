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
`;

const Attribution = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Styled = {
  Footer,
  Logo,
  Credits,
  Attribution,
};
