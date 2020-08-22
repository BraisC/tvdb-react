import React from 'react';
import { Styled } from './styled';

const ShowItemLoader = ({ children }) => (
  <Styled.ShowItemLoader
    animate={{ opacity: 0.8 }}
    transition={{ flip: Infinity, duration: 0.3, type: 'tween' }}
  >
    {children}
  </Styled.ShowItemLoader>
);

export default ShowItemLoader;
