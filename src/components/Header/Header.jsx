import React from 'react';
import { NavLink } from 'react-router-dom';
import { Styled } from './styled';
import { SearchBar } from './SearchBar';
import { ThemeToggler } from './ThemeToggler';

const MenuOptions = [
  { name: 'popular', route: '/' },
  { name: 'top', route: 'top rated' },
  { name: 'on air', route: 'on the air' },
  { name: 'today', route: 'airing today' },
  { name: 'genre' },
];

const MenuItem = (props) => (
  <li>
    <NavLink to={`${process.env.PUBLIC_URL}/shows/${props.route}`.replace('shows//', '')} exact>
      <span>{`${props.value}`}</span>
    </NavLink>
  </li>
);

const MenuItemSub = (props) => (
  <li>
    <Styled.SubMenu>{props.value}</Styled.SubMenu>
  </li>
);

const Menu = () => (
  <Styled.Menu>
    {MenuOptions.map((val) =>
      val.route ? (
        <MenuItem key={val.name} value={val.name} route={val.route} />
      ) : (
        <MenuItemSub key={val.name} value={val.name} />
      )
    )}
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
