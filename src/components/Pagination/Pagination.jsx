import React from 'react';
import { Styled } from './styled';

const renderPaginationButtons = (currentPage, totalPages, size) => {
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

  return (
    <Styled.Pagination>
      {buttons.map((val) => {
        if (val === currentPage) {
          return (
            <Styled.Button key={val} active to={`${process.env.PUBLIC_URL}?page=${val}`}>
              {val}
            </Styled.Button>
          );
        }
        if (val === '...') {
          return <div key={val}>...</div>;
        }

        return (
          <Styled.Button key={val} to={`${process.env.PUBLIC_URL}?page=${val}`}>
            {val}
          </Styled.Button>
        );
      })}
    </Styled.Pagination>
  );
};

const Pagination = ({ currentPage, totalPages, size }) => {
  const paginationButtons = renderPaginationButtons(currentPage, totalPages, size);
  console.log(currentPage, totalPages);
  return paginationButtons;
};

//if currentpage < 5 show 1,2,3,4,5...500
//if currentPage >= 5 show 1..currentPage-1, currentPage, currentPage+1 ..500
//if currentPage+3 == 500, show 1...currentpage-1, currentpage, currentpage+1, currentpage+2, 500

//[1,2,3,4*,5, '...', 500]
//[1, '...', 2,3*,4, ... , 500]
//[1, '...', 496, 497*, 498, 499, 500]

export default Pagination;
