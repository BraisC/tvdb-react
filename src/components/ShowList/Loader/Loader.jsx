import React from 'react';
import { Styled } from './styled';
import { ShowItemLoader } from './ShowItemLoader';

const Loader = () => {
  const items = [...Array(20).keys()];

  return (
    <Styled.ShowListLoader>
      {items.map((show, i) => (
        <ShowItemLoader key={i} />
      ))}
    </Styled.ShowListLoader>
  );
};

export default Loader;
