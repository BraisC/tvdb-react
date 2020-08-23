import React from 'react';
import { SearchBar } from 'components';
import { Styled } from './styled';

const MobileHeader = () => {
  console.log('si');
  return (
    <Styled.MobileHeader>
      <SearchBar />
      <Styled.Hamburger>
        <Styled.HamburgerLine />
        <Styled.HamburgerLine />
        <Styled.HamburgerLine />
      </Styled.Hamburger>
    </Styled.MobileHeader>
  );
};

export default MobileHeader;
