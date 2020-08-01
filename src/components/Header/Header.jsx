import React from 'react';
import { NavLink } from 'react-router-dom';
import { Styled } from './styled';

const Header = () => (
  <Styled.Header>
    <NavLink to="/">Header</NavLink>
  </Styled.Header>
);

export default Header;
