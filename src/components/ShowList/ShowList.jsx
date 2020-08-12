import React from 'react';
import { ShowItem } from './ShowItem';
import { Styled } from './styled';

const ShowList = React.memo(function ShowList({ shows, few }) {
  return (
    <Styled.ShowList className={few}>
      {shows.map((show) => (
        <ShowItem key={show.name + show.first_air_date} show={show} />
      ))}
    </Styled.ShowList>
  );
});

export default ShowList;
