import React from 'react';
import { error } from 'images';
import { Styled } from './styled';

const Error = () => (
  <Styled.Wrapper>
    <Styled.ImageWrapper>
      <Styled.Image src={error} alt="Error" />
    </Styled.ImageWrapper>
    <Styled.PageTitle>Error</Styled.PageTitle>
  </Styled.Wrapper>
);

export default Error;
