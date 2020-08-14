import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  width: 6rem;
  height: 3rem;
  display: flex;
  justify-content: space-around;
  gap: 2px;
`;

const Circle = styled(motion.span)`
  display: block;
  width: 2rem;
  height: 2rem;
  background-color: var(--color-text);
  border-radius: 50%;
`;

export const Styled = {
  Container,
  Circle,
};
