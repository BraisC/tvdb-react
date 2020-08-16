import React from 'react';

import Slider from 'react-slick';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import '../../../../node_modules/slick-carousel/slick/slick.css';
import '../../../../node_modules/slick-carousel/slick/slick-theme.css';

const NextArrow = ({ onClick }) => (
  <FontAwesomeIcon
    style={{
      right: '-15px',
      position: 'absolute',
      top: '50%',
      display: 'block',
      width: '3rem',
      height: '3rem',
      padding: '0',
      transform: 'translate(0, -50%)',
      cursor: 'pointer',
    }}
    onClick={onClick}
    icon={faCaretRight}
  />
);

const PrevArrow = ({ onClick }) => (
  <FontAwesomeIcon
    onClick={onClick}
    style={{
      left: '-15px',
      position: 'absolute',
      top: '50%',
      display: 'block',
      width: '3rem',
      height: '3rem',
      padding: '0',
      transform: 'translate(0, -50%)',
      cursor: 'pointer',
    }}
    icon={faCaretLeft}
  />
);

const Carousel = ({ children, ...props }) => {
  const defaults = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: props.length,
    slidesToScroll: 1,
    accesibility: true,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    variableWidth: false,
  };

  const settings = { ...defaults, ...props };

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
