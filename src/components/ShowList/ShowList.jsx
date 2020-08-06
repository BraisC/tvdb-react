import React from 'react';
import { ShowItem } from './ShowItem';

const ShowList = React.memo(function ShowList({ shows }) {
  console.log('render list');
  return shows.map((show) => <ShowItem key={show.name} show={show} />);
});

export default ShowList;

//Recibe una lista de shows y la renderiza
