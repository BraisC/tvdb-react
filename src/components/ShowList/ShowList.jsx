import React from 'react';
import { ShowItem } from './ShowItem';

const ShowList = React.memo(function ShowList({ shows }) {
  console.log(shows);
  return shows.map((show) => <div key={show.original_name}>{show.original_name}</div>);
});

export default ShowList;

//Recibe una lista de shows y la renderiza
