import styled from 'styled-components';

const MobileHeader = styled.header`
  padding: 0.5rem 0;
  display: flex;
  background: var(--color-primary);
  align-items: center;
  justify-content: space-around;
  transition: background-color 0.2s ease, color 0.2s ease;
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 5;
`;

const MobileLogo = styled.div`
  background-color: #ff5959;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  padding: 0.8rem 3rem;
`;

const Hamburger = styled.div`
  width: 9rem;
  height: 100%;
  padding: 0.6rem 3rem;
  color: var(--color-text);
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
`;

const HamburgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 3px;
  background-color: var(--color-text);
`;

export const Styled = {
  MobileLogo,
  MobileHeader,
  Hamburger,
  HamburgerLine,
};
