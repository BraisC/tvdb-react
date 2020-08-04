import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MyThemeContext } from 'contexts/myThemeContext';
import { Styled } from './styled';

const MenuOptions = ['home', 'popular', 'top', 'on air', 'today', 'genre'];

const MenuItem = (props) => (
  <li>
    <NavLink to={`/${props.value.split(' ').join('').replace('home', '')}`} exact>
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

const Header = () => {
  const themeContext = useContext(MyThemeContext);

  const handleClick = () => {
    themeContext.themeToggler();
  };

  return (
    <Styled.Header>
      <Styled.Logo>TVDB</Styled.Logo>
      <Menu />
      <button type="button" onClick={handleClick}>
        Switch Theme
      </button>
    </Styled.Header>
  );
};

export default Header;
