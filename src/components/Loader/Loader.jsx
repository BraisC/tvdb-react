import React from 'react';
import { Styled } from './styled';

const loadingContainerVariants = {
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '30%',
  },
  end: {
    y: '100%',
  },
};

const loadingCircleTransition = {
  duration: 0.3,
  yoyo: Infinity,
  ease: 'easeInOut',
};

export default function Loader() {
  return (
    <Styled.Container variants={loadingContainerVariants} initial="start" animate="end">
      <Styled.Circle variants={loadingCircleVariants} transition={loadingCircleTransition} />
      <Styled.Circle variants={loadingCircleVariants} transition={loadingCircleTransition} />
      <Styled.Circle variants={loadingCircleVariants} transition={loadingCircleTransition} />
    </Styled.Container>
  );
}
