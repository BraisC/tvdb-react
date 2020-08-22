import React from 'react';
import { Styled } from './styled';

const ContentLoader = () => (
  <Styled.ShowItemContentLoader>
    <Styled.Placeholder height={6} />
    <Styled.Placeholder height={10} />
    <Styled.Placeholder height={4} />
    <Styled.Placeholder height={4} />
    <Styled.Placeholder height={4} />
  </Styled.ShowItemContentLoader>
);

export default ContentLoader;
