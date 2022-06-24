import { useState } from 'react';

import { LoginContext } from 'context/context';
import { Home, NotFound } from 'pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

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
