import React from 'react';
import { NavLink } from 'react-router-dom';
import { Styled } from './styled';

const Menu = () => (
  <Styled.Menu>
    <li>
      <NavLink to="/">
        <span>home</span>
      </NavLink>
    </li>
    <li>
      <NavLink to="/popular">
        <span>popular</span>
      </NavLink>
    </li>
    <li>
      <NavLink to="/top">
        <span>top</span>
      </NavLink>
    </li>
    <li>
      <NavLink to="/onair">
        <span>on air</span>
      </NavLink>
    </li>
    <li>
      <NavLink to="/today">
        <span>today</span>
      </NavLink>
    </li>
    <li>
      <NavLink to="/genre">
        <span>genre</span>
      </NavLink>
    </li>
  </Styled.Menu>
);

const Header = (props) => {
  const handleClick = () => {
    props.setTheme((theme) => !theme);
  };

  return (
    <Styled.Header>
      <Styled.Logo>TVDB</Styled.Logo>
      <Menu />
      <button onClick={handleClick}>Switch Theme</button>
    </Styled.Header>
  );
};

export default Header;
