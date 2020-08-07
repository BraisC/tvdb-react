import React from 'react';
import { ShowItem } from './ShowItem';
import { Styled } from './styled';

const ShowList = React.memo(function ShowList({ shows }) {
  console.log('render list');
  return (
    <Styled.Wrapper>
      {shows.map((show) => (
        <ShowItem key={show.name} show={show} />
      ))}
    </Styled.Wrapper>
  );
});

export default ShowList;

//Recibe una lista de shows y la renderiza
