import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FeedWrap from '../Components/FeedWrap';

const Home = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const localStorage = window.localStorage;

  useEffect(() => {
    if (!localStorage.getItem('id')) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/');
    }

    fetch(`${process.env.PUBLIC_URL}/data/feedData.json`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return <FeedWrap data={data} />;
};

export default Home;
