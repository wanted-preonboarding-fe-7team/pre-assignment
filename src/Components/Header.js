import React from 'react';

const Header = () => {
  return (
    <header className="Header">
      <button className="btn-logo"></button>
      <div className="search">
        <img src={process.env.PUBLIC_URL + '/assets/search.png'}></img>
        <input placeholder="검색"></input>
      </div>
      <div className="btn-wrap">
        <button className="btn-home"></button>
        <button className="btn-msg"></button>
        <button className="btn-upload"></button>
        <button className="btn-explore"></button>
        <button className="btn-like"></button>
        <button className="btn-profile"></button>
      </div>
    </header>
  );
};

export default Header;
