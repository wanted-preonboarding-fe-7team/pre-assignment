import React, { useState, useEffect, useRef } from 'react';
import '../styles/feed.scss';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsChat } from 'react-icons/bs';
import { FaRegPaperPlane } from 'react-icons/fa';
import { FiBookmark } from 'react-icons/fi';
import { VscSmiley } from 'react-icons/vsc';

function Feed() {
  const [list, setList] = useState([]);
  const [inputComment, setInputComment] = useState('');
  const [isDisabled, setDisabled] = useState(true);

  //json 파일 가져오기
  useEffect(() => {
    fetch('data/feedList.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson);
        setList(myJson);
      });
  }, []);
  const active = useRef();
  //댓글 작성
  const handleInputComment = (e) => {
    setInputComment(e.target.value);
    commentActive();
  };
  //댓글 게시 활성화
  const commentActive = () => {
    active.current.style = 'color:red';
    setDisabled(false);
  };

  //댓글 업로드
  function uploadComment() {
    setInputComment('');
    setDisabled(true);
  }
  return (
    <>
      {list.map((d, i) => {
        return (
          <div className="feed-card" key={i}>
            <div className="feed-img">
              <img className="feed" alt="feed" src={d.image} />
            </div>
            <ul className="banner-btn">
              <li></li>
              <li></li>
            </ul>
            <div className="icons">
              <div>
                <AiOutlineHeart size={20} />
                <BsChat size={18} />
                <FaRegPaperPlane size={18} />
              </div>
              <div>
                <FiBookmark size={18} />
              </div>
            </div>
            <ul className="inform">
              <li>좋아요 {d.like.toLocaleString()} 개</li>
              <li>
                {d.id}
                {d.title.length > 8 ? (
                  <span> {d.title}</span>
                ) : (
                  <span> {d.title}...</span>
                )}
                <span className="more">더보기</span>
              </li>
              <li>댓글 {d.comment.toLocaleString()} 개 모두보기</li>
              <li>{d.time}분 전</li>
            </ul>
            <div className="comment-box">
              <div className="comment">
                <VscSmiley size={20} className="smile" />
                <div>
                  <input
                    type="text"
                    placeholder="댓글달기..."
                    value={inputComment}
                    onChange={handleInputComment}
                  />
                </div>
              </div>
              <button
                className="upload"
                ref={active}
                disabled={isDisabled}
                onClick={uploadComment}
              >
                게시
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Feed;
