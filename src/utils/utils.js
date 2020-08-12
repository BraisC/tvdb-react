import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import React from 'react';

const generateTitle = (show) => {
  const title = show.name;
  const year = show.first_air_date?.substring(0, 4);

  return year ? `${title} (${year})` : title;
};

const limitTextLength = (title, limit = 18) => {
  const newTitle = [];

  if (title.length > limit) {
    title.split(' ').reduce((accumulator, currentValue) => {
      if (accumulator + currentValue.length < limit) {
        newTitle.push(currentValue);
      }
      return accumulator + currentValue.length;
    }, 0);

    if (newTitle.join(' ').length === title.length) {
      return newTitle.join(' ');
    }
    return `${newTitle.join(' ')} ...`;
  }

  return title;
};

const generateStars = (valoration) => {
  const full = Math.trunc(valoration / 2);
  const decimal = Math.round(((valoration / 2) % 1) * 10);
  const result = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= full || (i === full + 1 && decimal > 6)) {
      result.push(<FontAwesomeIcon key={i} icon={faStar} />);
    } else if (i === full + 1 && decimal > 2 && decimal < 6) {
      result.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} />);
    } else {
      result.push(<FontAwesomeIcon key={i} icon={faStarEmpty} />);
    }
  }

  return result;
};

const utils = {
  generateTitle,
  generateStars,
  limitTextLength,
};

export default utils;
