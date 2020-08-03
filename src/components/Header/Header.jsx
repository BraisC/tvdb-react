import React from 'react';
import { NavLink } from 'react-router-dom';
import { Styled } from './styled';

const Header = (props) => {
  const handleClick = () => {
    props.setTheme((theme) => !theme);
  };

  return (
    <Styled.Header>
      <Styled.Logo>TVDB</Styled.Logo>
      <NavLink to="/">Header</NavLink>
      <button onClick={handleClick}>Switch Theme</button>
    </Styled.Header>
  );
};

export default Header;
