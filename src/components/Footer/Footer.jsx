import React from 'react';
import { logo } from 'images';
import { Styled } from './styled';

const Footer = () => (
  <Styled.Footer>
    <Styled.Credits>
      Made by <a href="https://github.com/BraisC">Brais Cao</a>
    </Styled.Credits>
    <Styled.Attribution href="https://www.themoviedb.org/">
      <Styled.Credits>Powered by</Styled.Credits>
      <Styled.Logo src={logo} alt="TMDB Logo" />
    </Styled.Attribution>
  </Styled.Footer>
);

export default Footer;
