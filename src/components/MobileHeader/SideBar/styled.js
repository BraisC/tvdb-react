import styled from 'styled-components';

const SideBar = styled.div`
  padding: 6rem 5rem 0 5rem;
  flex-direction: column;
  background: var(--color-secondary);
  transition: background-color 0.2s ease, color 0.2s ease;
  position: fixed;
  width: 300px;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 8;
  overflow: auto scroll;
  box-shadow: -12px 2px 29px -8px rgba(0, 0, 0, 0.35);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6rem;
  min-height: 100%;
`;

const Logo = styled.div`
  color: var(--color-text);
  font-size: 3rem;
  font-weight: bold;
  padding: 1.3rem 5rem;
  transition: all 0.2s ease;
`;

const SubMenuWrapper = styled.div`
  max-height: ${(prop) => (prop.isVisible ? '100vh' : '0')};
  transition: max-height 0.5s ease;
  overflow: hidden;
  width: 100%;
  right: 0;
`;

const SubMenu = styled.ul`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  transition: all 0.5s ease;

  & li a {
    padding: 0.5rem 1rem;
    font-size: 1.4rem;
    display: block;
  }
`;

const SubMenuButton = styled.span`
  cursor: pointer;
`;

const Nav = styled.nav`
  padding: 1rem;
  width: 100%;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  align-items: flex-end;
  position: relative;
  justify-content: space-between;

  & li {
    list-style: none;
    text-align: right;
  }

  & a,
  & ${SubMenuButton} {
    color: var(--color-text);
    font-size: 1.8rem;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0.5rem 2rem;
    margin: 0.2rem 0;
    transition: 0.2s ease;
    display: inline-block;

    &:hover {
      color: var(--color-red);
    }

    & span {
      padding: 0.2rem 0rem;
    }

    &.active span {
      border-bottom: 2px solid var(--color-red);
    }
  }
`;

export const Styled = {
  SideBar,
  Wrapper,
  Logo,
  Nav,
  Menu,
  SubMenuButton,
  SubMenuWrapper,
  SubMenu,
};
