import React from 'react';
import { useParams } from 'react-router-dom';

const SeasonPage = (props) => {
  const { id, number } = useParams();
  return (
    <div>
      {id} , {number}
    </div>
  );
};

export default SeasonPage;
