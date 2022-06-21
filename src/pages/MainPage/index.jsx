import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import FeedList from '../../components/FeedList';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (
      !localStorage.getItem('email') ||
      !localStorage.getItem('password') ||
      !isLoggedIn
    ) {
      localStorage.removeItem('email');
      localStorage.removeItem('password');

      location.href = '/';
    }
  }, [isLoggedIn]);

  return (
    <>
      <Navbar onLogOut={handleLogOut} />
      <FeedList />
    </>
  );
};

export default Home;
