import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Styled } from './styled';
import { Appearances } from './Appearances';

const PeoplePage = () => {
  const { id } = useParams();

  useEffect(() => console.log('hola'));

  return (
    <Styled.Wrapper>
      <Appearances />
    </Styled.Wrapper>
  );
};

export default PeoplePage;
