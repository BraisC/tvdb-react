import styled from 'styled-components';

const Wrapper = styled.label`
  display: flex;
  height: 2.4rem;
  width: 5.1rem;
  position: relative;
  border-radius: 34px;
  cursor: pointer;
  background-color: ${(props) => (props.themeColor === 'dark' ? 'var(--color-red)' : '#dcdcdc')};
  transition: 0.2s ease;
  flex-shrink: 0;
  margin-right: 5rem;

  @media ${(props) => props.theme.mediaQueries.tabLand} {
    margin-right: 0;
  }
`;

const Toggler = styled.span`
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  border-radius: 1.8rem;
  height: 1.8rem;
  width: 1.8rem;
  background-color: var(--color-red);
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: var(--color-white);

  @media ${(props) => props.theme.mediaQueries.tabLand} {
    font-size: 1.1rem;
  }
`;

const CheckBox = styled.input`
  display: none;
  opacity: 0;
  width: 0;
  height: 0;

  &:active ~ ${Toggler} {
    width: 3rem;
  }

  &:checked ~ ${Toggler} {
    background-color: var(--color-red);
  }

  &:checked ~ ${Toggler} {
    background-color: var(--color-primary);
    right: calc(100% - 0.3rem);
    transform: translateX(100%); /* this helps the growing as it will adjust with the width */
  }
`;

export const Styled = {
  Wrapper,
  CheckBox,
  Toggler,
};
