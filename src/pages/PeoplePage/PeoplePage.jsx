import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Styled } from './styled';

const PeoplePage = () => {
  const { id } = useParams();

  useEffect(() => console.log('hola'));

  return (
    <Styled.Wrapper>
      <Styled.PageTitle>{id}</Styled.PageTitle>
    </Styled.Wrapper>
  );
};

export default PeoplePage;
