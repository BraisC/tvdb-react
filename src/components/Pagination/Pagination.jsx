import React from 'react';
import { Styled } from './styled';

const createPaginationButtons = (currentPage, totalPages, size) => {
  const delta = 1;
  const range = [];
  const rangeWithDots = [];
  let l;

  range.push(1);

  if (totalPages <= 1) {
    return range;
  }

  for (let i = currentPage - delta; i <= currentPage + delta; i++) {
    if (i < totalPages && i > 1) {
      range.push(i);
    }
  }
  range.push(totalPages);

  for (const i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
};

const Pagination = ({ currentPage, totalPages, size }) => {
  const paginationButtons = createPaginationButtons(currentPage, totalPages, size);

  return (
    <Styled.Pagination>
      {paginationButtons.map((val, index) => {
        if (val === '...') {
          return <div key={val + index}>...</div>;
        }

        return (
          <Styled.Button
            key={val + index}
            to={`${process.env.PUBLIC_URL}?page=${val}`}
            className={currentPage === val ? 'active' : null}
          >
            {val}
          </Styled.Button>
        );
      })}
    </Styled.Pagination>
  );
};

export default Pagination;
