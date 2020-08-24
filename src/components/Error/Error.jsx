import React from 'react';
import { error } from 'images';
import { Styled } from './styled';

const Error = ({ message }) => (
  <Styled.Wrapper>
    <Styled.ImageWrapper>
      <Styled.Image src={error} alt="Error" />
    </Styled.ImageWrapper>
    <Styled.PageTitle>{message}</Styled.PageTitle>
  </Styled.Wrapper>
);

export default Error;
