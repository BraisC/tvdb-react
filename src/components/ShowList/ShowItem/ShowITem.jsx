import React from 'react';

const ShowItem = ({ show }) => (
  <>
    <div>{show.name}</div>
    <img src={`https://image.tmdb.org/t/p/w342${show.poster_path}`} alt="" />
  </>
);

export default ShowItem;
