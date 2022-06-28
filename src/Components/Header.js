import React from 'react';
import { FiSend, FiHeart, FiHome, FiSearch, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Header = ({ onClick }) => {
  return (
    <header className="Header">
      <Link to={'/home'}>
        <button className="btn-logo">
          <img src={process.env.PUBLIC_URL + '/assets/logo.png'} />
        </button>
      </Link>
      <div className="search">
        <FiSearch />
        <input placeholder="검색"></input>
      </div>
      <div className="btn-wrap">
        <FiHome className="btn-icon" />
        <FiSend className="btn-icon" />
        <FiUsers className="btn-icon" />
        <FiHeart className="btn-icon" />
        <button className="btn-logout" onClick={onClick}>
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default Header;
