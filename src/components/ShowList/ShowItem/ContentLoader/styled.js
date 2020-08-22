import styled from 'styled-components';

const ShowItemContentLoader = styled.div`
  transform: scaleX(0.87);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Placeholder = styled.div`
  width: 100%;
  background-color: var(--color-primary);
  height: ${(props) => props.height + 'rem'};
`;

export const Styled = {
  ShowItemContentLoader,
  Placeholder,
};
