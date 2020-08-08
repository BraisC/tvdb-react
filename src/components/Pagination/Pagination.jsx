import React from 'react';
import { Styled } from './styled';

const Pagination = ({ currentPage, totalPages }) => (
  <Styled.Pagination>
    <Styled.Button to={`${process.env.PUBLIC_URL}?page=1`}>1</Styled.Button>
    <Styled.Button to={`${process.env.PUBLIC_URL}?page=2`}>2</Styled.Button>
  </Styled.Pagination>
);

//if currentpage < 5 show 1,2,3,4,5...500
//if currentPage >= 5 show 1..currentPage-1, currentPage, currentPage+1 ..500
//if currentPage+3 == 500, show 1...currentpage-1, currentpage, currentpage+1, currentpage+2, 500

export default Pagination;
