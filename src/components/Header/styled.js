import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  background: var(--color-primary);
  align-items: center;
  transition: background-color 0.2s ease, color 0.2s ease;
  grid-area: header;
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
  margin-right: auto;

  & li {
    list-style: none;
  }

  & a {
    color: var(--text-color);
    font-size: 1.8rem;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1rem 3rem;
    transition: 0.2s ease;

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

const SearchBar = styled.form`
  width: 40rem;
  margin-right: auto;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: var(--text-color);
  transition: 0.2s ease;
  padding-left: 5rem;

  &:focus::placeholder {
    opacity: 0;
  }

  &::placeholder {
    opacity: 35%;
    color: var(--text-color);
    text-transform: uppercase;
    font-family: Montserrat;
  }
`;

const SearchIcon = styled.label`
  color: var(--color-red);
  margin-right: -3.5rem;
  font-size: 2.2rem;
  cursor: pointer;
  z-index: 999;
`;

export const Styled = {
  Header,
  Logo,
  Menu,
  SearchBar,
  SearchInput,
  SearchIcon,
};
