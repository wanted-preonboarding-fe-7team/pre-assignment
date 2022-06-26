import LOCAL_STORAGE_KEY_NAME from 'constants';

import { useState, useEffect } from 'react';

import { LoginContext } from 'context/context';
import { Home, NotFound } from 'pages';
import { Route, Routes } from 'react-router-dom';

const { getLocalStorage } = storageUtils;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const prevLoginData = getLocalStorage(LOCAL_STORAGE_KEY_NAME);

    if (prevLoginData) {
      setIsLoggedIn(prevLoginData);
    }
  }, []);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LoginContext.Provider>
  );
}

export default App;
