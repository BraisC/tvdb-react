import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  color: var(--color-text);
  padding: 3rem 6rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const PageTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 100;
  text-transform: uppercase;
  margin-bottom: 4rem;
  transition: color 0.2s ease;
`;

export const Styled = {
  Wrapper,
  PageTitle,
};
