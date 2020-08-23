import styled from 'styled-components';
import { motion } from 'framer-motion';

const ShowItemLoader = styled(motion.div)`
  height: 37rem;
  background-color: var(--color-primary);
  margin-bottom: 2.4rem;

  @media ${(props) => props.theme.mediaQueries.phone} {
    height: 28rem;
  }
`;

export const Styled = {
  ShowItemLoader,
};
