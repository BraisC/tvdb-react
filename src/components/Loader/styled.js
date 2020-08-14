import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  width: 10rem;
  height: 5rem;
  display: flex;
  justify-content: space-around;
`;

const Circle = styled(motion.span)`
  display: block;
  width: 3rem;
  height: 3rem;
  background-color: var(--color-text);
  border-radius: 50%;
`;

export const Styled = {
  Container,
  Circle,
};
