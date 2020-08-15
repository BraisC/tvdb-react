import React, { useState, useEffect } from 'react';
import { getConfig } from 'api/tmdb';

export const ConfigContext = React.createContext([]);

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getData() {
      const res = await getConfig();
      if (res.error) {
        setError(true);
      } else {
        setConfig(res.data);
      }
    }
    getData();
  }, []);

  return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
};
