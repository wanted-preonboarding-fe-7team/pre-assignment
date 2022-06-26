import React, { useState } from 'react';
import Login from './pages/Login';
import './App.css';

function App() {
  const sessionStorage = window.sessionStorage;

  const [state, setState] = useState({
    id: '',
    pwd: '',
  });

  const saveInfo = () => {
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('pwd', pwd);
  };

  return <Login />;
}

export default App;
