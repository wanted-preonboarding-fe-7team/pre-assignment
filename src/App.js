import LOCAL_STORAGE_KEY_NAME from 'constants';

import { useState, useEffect } from 'react';

import { LoginContext } from 'context/context';
import { Home, NotFound } from 'pages';
import { Route, Routes } from 'react-router-dom';
import storageUtils from 'utils/storage';

const { setLocalStorage, getLocalStorage } = storageUtils;
const saveLoginData = (loginData) =>
  setLocalStorage(LOCAL_STORAGE_KEY_NAME, loginData);

function App() {
  const [loginData, setLoginData] = useState(null);

  useEffect(() => {
    const prevLoginData = getLocalStorage(LOCAL_STORAGE_KEY_NAME);

    if (prevLoginData) {
      setLoginData(prevLoginData);
    }
  }, []);

  useEffect(() => {
    saveLoginData(loginData);
  }, [loginData]);

  return (
    <LoginContext.Provider value={{ loginData, setLoginData }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LoginContext.Provider>
  );
}

export default App;
