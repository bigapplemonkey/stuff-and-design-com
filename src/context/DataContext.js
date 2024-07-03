import { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

const repoVariables = {
  repoOwner: 'bigapplemonkey',
  repoName: 'stuff-and-design-external',
  filePath: 'data.json',
};

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const gitHubFetch = async (filePath = repoVariables.filePath) => {
      const { repoOwner, repoName } = repoVariables;
      const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${filePath}`;

      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        const content = atob(responseData.content);

        const parsedData = JSON.parse(content); // Always parse content as JSON

        setData(parsedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    gitHubFetch();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
