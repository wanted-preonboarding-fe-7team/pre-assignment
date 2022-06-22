import { useState } from 'react';

import LoginContext from 'context/context';
import { Login } from 'pages';
import Test from 'pages/Test';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [loginData, setLoginData] = useState(null);

  return (
    <LoginContext.Provider value={{ loginData, setLoginData }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </LoginContext.Provider>
  );
}

export default App;
