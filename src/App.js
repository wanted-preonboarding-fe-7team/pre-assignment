import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import GNB from './pages/GNB';
import './App.css';

// import PreAssignmentGuide from './pages/PreAssignmentGuide';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<GNB />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
