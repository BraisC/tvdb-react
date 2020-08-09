import React from 'react';
import { Styled } from './styled';

const createPaginationButtons = (currentPage, totalPages, size) => {
  let buttons = [];

  //! REFACTOR THIS SHIT

  if (currentPage < 5 && totalPages <= 7) {
    buttons = [1, 2, 3, 4, 5, 6, 7];
  } else if (currentPage < 5) {
    buttons = [1, 2, 3, 4, 5, '...', totalPages];
  } else if (currentPage >= 5 && currentPage + 3 < totalPages) {
    buttons = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
  } else if (currentPage + 3 > totalPages) {
    buttons = [
      1,
      '...',
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  } else {
    buttons = [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
      totalPages,
    ];
  }
  //console.log(buttons);

  return buttons;
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
            active={val === currentPage}
            to={`${process.env.PUBLIC_URL}?page=${val}`}
          >
            {val}
          </Styled.Button>
        );
      })}
    </Styled.Pagination>
  );
};

export default Pagination;
