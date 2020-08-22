import React from 'react';
import { notFound } from 'images';
import { Helmet } from 'react-helmet';
import { Styled } from './styled';

const NotFound = () => (
  <Styled.Wrapper>
    <Helmet>
      <title>TVDB - Error 404</title>
    </Helmet>
    <Styled.ImageWrapper>
      <Styled.Image src={notFound} alt="Not found" />
    </Styled.ImageWrapper>
    <Styled.PageTitle>Page Not Found</Styled.PageTitle>
  </Styled.Wrapper>
);

export default NotFound;
