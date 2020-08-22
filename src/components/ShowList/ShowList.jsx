import React from 'react';
import { ShowItem } from './ShowItem';
import { Styled } from './styled';
import ShowListLoader from './ShowListLoader';

const ShowList = React.memo(function ShowList({ shows, isLoading }) {
  return isLoading ? (
    <ShowListLoader />
  ) : (
    <Styled.ShowList className={shows.length < 6 ? 'few' : null}>
      {shows.map((show) => (
        <ShowItem key={show.id} show={show} />
      ))}
    </Styled.ShowList>
  );
});

export default ShowList;
