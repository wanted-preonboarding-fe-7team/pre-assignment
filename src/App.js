import { useState } from 'react';

import { LoginContext } from 'context/context';
import { Login, Main, NotFound } from 'pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [loginData, setLoginData] = useState(null);

  return (
    <LoginContext.Provider value={{ loginData, setLoginData }}>
      <Routes>
        <Route path="/" element={(loginData && <Main />) || <Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LoginContext.Provider>
  );
}

export default App;
