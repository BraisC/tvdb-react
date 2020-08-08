import React from 'react';
import { Styled } from './styled';

const ShowItem = ({ show }) => (
  <Styled.Item>
    <Styled.ItemLink to={`${process.env.PUBLIC_URL}/show/${show.name}`}>
      <img src={`https://image.tmdb.org/t/p/w342${show.poster_path}`} alt={show.name} />
    </Styled.ItemLink>
    <Styled.Title>{`${show.name} (${show.first_air_date.substring(0, 4)})`}</Styled.Title>
  </Styled.Item>
);

export default ShowItem;
