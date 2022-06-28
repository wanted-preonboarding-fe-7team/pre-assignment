import React from 'react';
import { useNavigate } from 'react-router-dom';
import Feed from './Feed';
import Header from './Header';

const FeedWrap = ({ data }) => {
  const localStorage = window.localStorage;
  const navigate = useNavigate();

  //로그아웃
  const logout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('pwd');
    navigate('/', { replace: true });
  };

  return (
    <>
      <Header onClick={logout} />
      {data && data.map((it, idx) => <Feed key={idx} data={it} />)};
    </>
  );
};

export default FeedWrap;
