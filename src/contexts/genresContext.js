import React, { useState, useEffect } from 'react';
import { getGenres } from 'api/tmdb';

export const GenresContext = React.createContext([]);

export const GenresProvider = ({ children }) => {
  const [genres, setGenres] = useState();
  //const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const res = await getGenres();
      if (res.error) {
        //setIsLoading(false);
      } else {
        setGenres(res.data.data.genres);
        //setIsLoading(false);
      }
    }
    getData();
    //return () => setIsLoading(true);
  }, []);

  return <GenresContext.Provider value={genres}>{children}</GenresContext.Provider>;
};
