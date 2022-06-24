import React, { useState, useEffect, useRef } from 'react';
import '../styles/feed.scss';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsChat } from 'react-icons/bs';
import { FaRegPaperPlane } from 'react-icons/fa';
import { FiBookmark } from 'react-icons/fi';
import { VscSmiley } from 'react-icons/vsc';

function Feed() {
  const [list, setList] = useState([]);
  const [inputComment, setInputComment] = useState([]);
  const [isDisabled, setDisabled] = useState(true);
  const [imgLoad, setImgLoad] = useState(true);
  const [show, setShow] = useState(false);
  const [commentCount, setCommentCount] = useState([]); //댓글 카운트 증가
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

  //댓글 작성
  const active = useRef();
  //setInputComment(data.list.map((item) =>item.comment )
  //각 list의 comment array만들고 inputComment[index] = e.target.value
  const handleInputComment = (e) => {
    if (e.target.value != '') {
      active.current.style = 'color:#0095f6;font-weight:bold';
      // setInputComment(e.target.value);
      // setInputComment([e.target.value]);
      setInputComment(
        list.map((item, i) => (inputComment[i] = e.target.value))
      );

      setDisabled(false);
    } else {
      active.current.style = 'color:#80c3f0';
      setDisabled(true);
    }
  };
  console.log(inputComment);
  //클릭으로 댓글 업로드
  const uploadComment = (e) => {
    setInputComment('');
    setDisabled(true);
    active.current.style = 'color:#80c3f0';
  };
  //엔터로 댓글 업로드
  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      uploadComment();
    }
  };
  //더보기
  function fullLength() {
    setShow(true);
    console.log(show);
  }
  //댓글 추가시 +1
  return (
    <>
      {list.map((d, i) => {
        return (
          <div
            className="feed-card"
            key={i}
            style={{ display: imgLoad ? 'none' : 'block' }}
          >
            <div className="feed-img">
              <img
                className="feed"
                alt="feed"
                src={d.image}
                onLoad={() => setImgLoad(false)}
              />
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
                {d.title.length > 8 && show === false ? (
                  <span> {d.title.substr(0, 15)}...</span>
                ) : (
                  <span> {d.title}</span>
                )}
                {show === false ? (
                  <span className="more" onClick={fullLength}>
                    더보기
                  </span>
                ) : null}
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
                    value={inputComment[i] || ''}
                    onChange={handleInputComment}
                    onKeyPress={handleOnKeyPress}
                  />
                </div>
              </div>
              <button
                type="submit"
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
