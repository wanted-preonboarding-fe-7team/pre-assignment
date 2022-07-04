import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import GNB from './pages/GNB';
import Feed from './pages/Feed';

// import PreAssignmentGuide from './pages/PreAssignmentGuide';

function App() {
  // return <PreAssignmentGuide />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
  // return <Feed></Feed>;
}

export default App;
