import React from 'react';
import { Styled } from './styled';
import { ShowItemLoader } from './ShowItemLoader';

const ShowListLoader = () => {
  const items = [...Array(20).keys()];
  console.log('Loader');
  return (
    <Styled.ShowListLoader>
      {items.map((show, i) => (
        <ShowItemLoader key={i} />
      ))}
    </Styled.ShowListLoader>
  );
};

export default ShowListLoader;
