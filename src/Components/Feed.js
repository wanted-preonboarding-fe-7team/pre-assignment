import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import {
  FiHeart,
  FiMessageCircle,
  FiSend,
  FiBookmark,
  FiSmile,
  FiUser,
  FiMoreHorizontal,
} from 'react-icons/fi';

const Feed = ({ data }) => {
  const localStorage = window.localStorage;
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('id');
    localStorage.removeItem('pwd');
    navigate('/', { replace: true });
  };

  return (
    <div className="Feed">
      <Header onClick={logout} />
      <section>
        <div className="feed-head">
          <div className="feed-profile">
            <FiUser className="img-usr" />
            <p>chaengss</p>
          </div>
          <FiMoreHorizontal className="btn-opt" />
        </div>
        <div>
          <img src={data.img}></img>
          <div className="icon-wrap">
            <div>
              <FiHeart className="feed-icon" />
              <FiMessageCircle className="feed-icon" />
              <FiSend className="feed-icon" />
            </div>
            <FiBookmark className="feed-icon" />
          </div>
        </div>
        <div className="feed-content">
          <p>좋아요 {data.like}개</p>
          <p>
            <strong>chaengss</strong>
            {data.content}
          </p>
        </div>
        <div className="feed-coment">
          <p>
            <ul>
              {data.comments.map((it, idx) => (
                <li key={idx}>
                  <p>
                    <strong>익명</strong>
                    {it.content}
                  </p>
                </li>
              ))}
            </ul>
          </p>
        </div>
        <div className="inp-comment">
          <div>
            <FiSmile className="inp-icon" />
            <input placeholder="댓글 달기..." />
          </div>
          <button>게시</button>
        </div>
      </section>
    </div>
  );
};
export default Feed;
