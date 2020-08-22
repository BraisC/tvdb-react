import React from 'react';
import { notFound } from 'images';
import { Styled } from './styled';

const NotFound = () => (
  <Styled.Wrapper>
    <Styled.ImageWrapper>
      <Styled.Image src={notFound} alt="Not found" />
    </Styled.ImageWrapper>
    <Styled.PageTitle>Page Not Found</Styled.PageTitle>
  </Styled.Wrapper>
);

export default NotFound;
