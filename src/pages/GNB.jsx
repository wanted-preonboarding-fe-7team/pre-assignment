import React, { useState, useEffect } from 'react';
import '../styles/gnb.scss';
import Feed from '../components/Feed';
import { FiSearch } from 'react-icons/fi';
import { TiHome } from 'react-icons/ti';
import { FaRegPaperPlane } from 'react-icons/fa';
// import { AiOutlinePlusCircle } from 'react-icons/ai';
// import { ImCompass2 } from 'react-icons/im';
// import { AiOutlineHeart } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { useNavigate, Link } from 'react-router-dom';

function GNB() {
  const navigate = useNavigate();
  const id = localStorage.getItem('id');
  const pw = localStorage.getItem('pw');
  const [list, setList] = useState([]); //배열

  //json 파일 가져오기
  useEffect(() => {
    fetch('data/feedList.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setList(myJson);
      });
  }, []);

  //url접근 막기
  if (id === null || pw === null) {
    alert('로그인 정보가 없습니다.');
    navigate('/');
  }

  //로그아웃
  function logout() {
    console.log('logout');
    //Local Storage 에 로그인 정보 삭제
    localStorage.removeItem('id');
    localStorage.removeItem('pw');
    //메인으로 이동
    navigate('/');
  }

  return (
    <>
      <div className="main-top">
        <div className="inner">
          <h1>
            <Link to="/">
              <img
                className="logo"
                alt="instagram"
                src="instagram-new-logo.png"
              />
            </Link>
          </h1>
          <div className="search">
            <FiSearch className="search-icon" size={18} color="#aaa" />
            <input type="text" placeholder="검색" className="search-input" />
          </div>
          <div className="icons">
            <TiHome size={20} />
            <FaRegPaperPlane size={20} />
            {/* <AiOutlinePlusCircle size={20} />
            <ImCompass2 size={20} />
            <AiOutlineHeart size={20} /> */}
            <FiLogOut size={20} onClick={logout} className="logout" />
          </div>
        </div>
      </div>
      {/* 피드 */}
      <div className="feed-box">
        {list.map((data) => {
          return <Feed list={data} key={data.id} />;
        })}
      </div>
    </>
  );
}
export default GNB;
