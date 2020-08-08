import React from 'react';
import { logo } from 'images';
import { Styled } from './styled';

const Footer = () => (
  <Styled.Footer>
    <Styled.Credits>Made by Brais Cao</Styled.Credits>
    <Styled.Attribution>
      <Styled.Credits>Powered by</Styled.Credits>
      <Styled.Logo src={logo} alt="TMDB Logo" />
    </Styled.Attribution>
  </Styled.Footer>
);

export default Footer;
