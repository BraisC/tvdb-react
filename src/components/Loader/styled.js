import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  width: 6rem;
  height: 3rem;
  display: flex;

  & span:nth-child(2),
  & span:nth-child(3) {
    margin-left: 1px;
  }
`;

const Circle = styled(motion.span)`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  background-color: var(--color-text);
  border-radius: 50%;
`;

export const Styled = {
  Container,
  Circle,
};
