import React from 'react';
import { ShowItem } from './ShowItem';
import { Styled } from './styled';

const ShowList = React.memo(function ShowList({ shows }) {
  console.log('render list');
  return (
    <Styled.ShowList>
      {shows.map((show) => (
        <ShowItem key={show.name} show={show} />
      ))}
    </Styled.ShowList>
  );
});

export default ShowList;

//Recibe una lista de shows y la renderiza
