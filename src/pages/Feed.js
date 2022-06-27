import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

const Feed = () => {
  const localStorage = window.localStorage;
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('pwd');
    navigate('/', { replace: true });
  };

  return <Header onClick={logout} />;
};
export default Feed;
