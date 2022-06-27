import React from 'react';
import { Routes } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';

function App() {
  const saveInfo = () => {
    sessionStorage.setItem('id', id);
    sessionStorage.setItem('pwd', pwd);
  };

  return <Login />;
}
export default App;
