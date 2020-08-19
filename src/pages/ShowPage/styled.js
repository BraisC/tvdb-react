import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.div`
  color: var(--color-text);
  display: flex;
  flex-direction: column;
`;

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.4rem;
  margin-right: 8px;
`;

export const Styled = {
  Wrapper,
  VideoWrapper,
  Icon,
};
