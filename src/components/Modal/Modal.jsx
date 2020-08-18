import React from 'react';
import ReactDOM from 'react-dom';
import { Styled } from './styled';

const Modal = ({ children, hide }) => {
  console.log('hola');

  return ReactDOM.createPortal(
    <Styled.Overlay onClick={hide}>{children}</Styled.Overlay>,
    document.querySelector('#modal')
  );
};

export default Modal;
