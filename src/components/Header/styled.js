import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  background: var(--color-primary);
  align-items: center;
  transition: 0.5s ease;
`;

const Logo = styled.div`
  background-color: var(--color-red);
  color: #f4f4f4;
  font-size: 3rem;
  font-weight: bold;
  padding: 1.3rem 5rem;
`;

const Menu = styled.ul`
  padding: 0 2rem;
  display: flex;

  & li {
    list-style: none;
  }

  & a {
    color: var(--text-color);
    font-size: 1.8rem;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1rem 3rem;
    transition: 0.5s ease;

    &:hover {
      color: var(--color-red);
      transition: 0.2s ease;
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
  Header,
  Logo,
  Menu,
};
