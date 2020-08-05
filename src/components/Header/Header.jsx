import React from 'react';
import { NavLink } from 'react-router-dom';
import { Styled } from './styled';
import { SearchBar } from './SearchBar';
import { ThemeToggler } from './ThemeToggler';

const MenuOptions = ['popular', 'top', 'on air', 'today', 'genre'];

const MenuItem = (props) => (
  <li>
    <NavLink
      to={`/${'shows/'.concat(props.value.split(' ').join('')).replace('shows/popular', '')}`}
      exact
    >
      <span>{`${props.value}`}</span>
    </NavLink>
  </li>
);

const Menu = () => (
  <Styled.Menu>
    {MenuOptions.map((val) => (
      <MenuItem key={val} value={val} />
    ))}
  </Styled.Menu>
);

const Header = () => (
  <Styled.Header>
    <Styled.Logo>TVDB</Styled.Logo>
    <Menu />
    <SearchBar />
    <ThemeToggler />
  </Styled.Header>
);

export default Header;
