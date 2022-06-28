import React, { useRef, useState } from 'react';
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
  const [comment, setComment] = useState();
  const [newcom, setNewcom] = useState(data.comments);
  const [load, setLoad] = useState(false);

  const inpRef = useRef();

  //댓글 입력값 받기
  const getInputValue = (e) => {
    const inputValue = String(inpRef.current.value);
    setComment(inputValue);
  };

  //기존 데이터에 새로운 댓글 추가
  const saveInputValue = () => {
    setNewcom([...newcom, { content: comment }]);
    inpRef.current.value = '';
  };

  //버튼으로 댓글 게시
  const addComBtn = () => {
    saveInputValue();
  };

  //엔터키로 댓글 게시하기
  const addComEnter = (e) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      saveInputValue();
    }
  };

  //이미지 로드 상태 변경 함수
  const onLoad = () => {
    setLoad(true);
  };

  return (
    <>
      <section className={['Feed', load ? 'Feed-on' : ''].join(' ')}>
        {load && (
          <div className="feed-head">
            <div className="feed-profile">
              <FiUser className="img-usr" />
              <p>chaengss</p>
            </div>
            <FiMoreHorizontal className="btn-opt" />
          </div>
        )}
        <div className="feed-img">
          <img src={data.img} onLoad={onLoad}></img>
        </div>
        {load && (
          <>
            <div className="icon-wrap">
              <div>
                <FiHeart className="feed-icon" />
                <FiMessageCircle className="feed-icon" />
                <FiSend className="feed-icon" />
              </div>
              <FiBookmark className="feed-icon" />
            </div>
            <div className="feed-content">
              <p className="bold">좋아요 {data.like}개</p>
              <p>
                <strong>chaengss</strong>
                {data.content}
              </p>
            </div>
            <div className="feed-comment">
              <ul>
                {newcom.map((it, idx) => (
                  <li key={idx}>
                    <strong>익명</strong>
                    {it.content}
                  </li>
                ))}
              </ul>
            </div>
            <div className="inp-comment">
              <div>
                <FiSmile className="inp-icon" />
                <input
                  placeholder="댓글 달기..."
                  ref={inpRef}
                  onChange={getInputValue}
                  onKeyDown={addComEnter}
                />
              </div>
              <button onClick={addComBtn}>게시</button>
            </div>
          </>
        )}
      </section>
    </>
  );
};
export default Feed;
