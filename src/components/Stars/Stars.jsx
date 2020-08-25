import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import { Styled } from './styled';

const Stars = ({ valoration }) => {
  const full = Math.trunc(valoration / 2);
  const decimal = Math.round(((valoration / 2) % 1) * 10);
  const result = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= full || (i === full + 1 && decimal > 6)) {
      result.push(
        <Styled.StarWrapper key={i}>
          <FontAwesomeIcon icon={faStar} />
        </Styled.StarWrapper>
      );
    } else if (i === full + 1 && decimal > 2 && decimal <= 6) {
      result.push(
        <Styled.StarWrapper key={i}>
          <FontAwesomeIcon icon={faStarHalfAlt} />
        </Styled.StarWrapper>
      );
    } else {
      result.push(
        <Styled.StarWrapper key={i}>
          <FontAwesomeIcon icon={faStarEmpty} />
        </Styled.StarWrapper>
      );
    }
  }

  return result;
};

export default Stars;
