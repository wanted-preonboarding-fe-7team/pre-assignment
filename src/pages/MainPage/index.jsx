import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      localStorage.removeItem('email');
      localStorage.removeItem('password');

      location.href = '/';
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (!localStorage.getItem('email') || !localStorage.getItem('password')) {
      location.href = '/';
    }
  }, []);

  return (
    <div>
      <Navbar onLogOut={handleLogOut} />
    </div>
  );
};

export default Home;
