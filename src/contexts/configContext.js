import React, { useState, useEffect } from 'react';
import { getConfig } from 'api/tmdb';

export const ConfigContext = React.createContext([]);

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const res = await getConfig();
      if (res.error) {
        setError(true);
      } else {
        setConfig(res.data);
      }
      setIsLoading(false);
    }
    getData();
  }, []);

  const data = { ...config, isLoading };

  return <ConfigContext.Provider value={error || data}>{children}</ConfigContext.Provider>;
};
