import React, { useState, useEffect } from 'react';
import { Wrapper } from './style';
import Navbar from '../../components/Navbar';
import FeedList from '../../components/FeedList';
import { getFeeds } from '../../api/feed';

const Home = () => {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('email') || !localStorage.getItem('password')) {
      localStorage.removeItem('email');
      localStorage.removeItem('password');

      location.href = '/';
    }
  }, []);

  useEffect(() => {
    getFeeds().then((res) => {
      setFeeds(res.feeds);
    });
  }, []);

  return (
    <>
      <Navbar />
      <Wrapper>
        <FeedList feeds={feeds} />
      </Wrapper>
    </>
  );
};

export default Home;
