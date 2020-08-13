import React from 'react';
import { useParams } from 'react-router-dom';

const GenrePage = (props) => {
  const { genre } = useParams();

  return <div>{genre}</div>;
};

export default GenrePage;
