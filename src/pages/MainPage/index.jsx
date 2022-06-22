import React, { useEffect } from 'react';
import { Wrapper } from './style';
import Navbar from '../../components/Navbar';
import FeedList from '../../components/FeedList';

const Home = () => {
  useEffect(() => {
    if (!localStorage.getItem('email') || !localStorage.getItem('password')) {
      localStorage.removeItem('email');
      localStorage.removeItem('password');

      location.href = '/';
    }
  }, []);

  return (
    <>
      <Navbar />
      <Wrapper>
        <FeedList />
      </Wrapper>
    </>
  );
};

export default Home;
