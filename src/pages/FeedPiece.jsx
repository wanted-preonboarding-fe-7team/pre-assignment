import React from 'react';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { BiHeart } from 'react-icons/bi';
import { FaRegCommentDots } from 'react-icons/fa';
import { BiPaperPlane } from 'react-icons/bi';
import { GrBookmark } from 'react-icons/gr';
import { BsEmojiSmile } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BsFillCircleFill } from 'react-icons/bs';

export default function FeedPiece({ feed }) {
  const [newID, setNewID] = useState('');
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState([]);

  const IDFocus = useRef(0);
  const CommentFocus = useRef(0);

  const writeID = (e) => {
    console.log(e.target.value);
    if (e.key === 'Enter') {
      setNewID(e.target.value);
      CommentFocus.current.focus();
    }
    console.log('newID는? ', newID);
  };

  const writeComment = (e) => {
    console.log(e.target.value);
    if (e.key === 'Enter') {
      addComment();
      IDFocus.current.focus();
    }
  };

  const addComment = (e) => {
    setComments(...comments, {
      CommentNewID: newID,
      CommentNewContent: newComment,
    });
    return;
  };

  return (
    <Body>
      {/* {console.log(comments)} */}
      <FeedTop key={feed.id}>
        <FeedTopLeft>
          <BsFillCircleFill size="35px" opacity="20%" />
          <ProfileID>wanted</ProfileID>
        </FeedTopLeft>
        <FeedTopRight>
          <FiMoreHorizontal cursor="pointer" />
        </FeedTopRight>
      </FeedTop>
      <Img src={feed.image} />
      <Icons>
        <IconsLeft>
          <BiHeart size="30px" cursor="pointer" />
          <FaRegCommentDots size="30px" cursor="pointer" />
          <BiPaperPlane size="30px" cursor="pointer" />
        </IconsLeft>
        <IconsRight>
          <GrBookmark size="30px" cursor="pointer" />
        </IconsRight>
      </Icons>
      <Like>좋아요 0개</Like>
      <CommentGather>
        <CommentList>
          {comments.map((el) => {
            return (
              <>
                <CommentID>{el.CommentNewID}</CommentID>
                <CommentContent>{el.CommentNewContent}</CommentContent>
              </>
            );
          })}
        </CommentList>
      </CommentGather>
      <CommentInput>
        <CommentInputLeft>
          <BsEmojiSmile size="35px" />
          <NickName ref={IDFocus} placeholder="닉네임" onKeyUp={writeID} />
          <Comment
            ref={CommentFocus}
            placeholder="댓글달기..."
            onKeyUp={writeComment}
          />
        </CommentInputLeft>
        <CommentInputRight>게시</CommentInputRight>
      </CommentInput>
    </Body>
  );
}

const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  height: fit-content;
  outline: 1px solid rgba(0, 0, 0, 0.2);
  overflow: auto;
  margin: 15px 0;
`;

const FeedTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  width: 100%;
  height: 6vh;
  outline: 1px solid rgba(0, 0, 0, 0.2);
`;

const FeedTopLeft = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileID = styled.div`
  margin: 0 10px;
  font-weight: bold;
`;

const FeedTopRight = styled.div``;

const Img = styled.img``;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  padding: 0 10px;
`;

const IconsLeft = styled.div`
  display: flex;
  justify-content: space-between;
  width: 120px;
  /* outline: 1px solid black; */
`;
const IconsRight = styled.div``;

const Like = styled.div`
  margin: 24px 0;
  padding: 0 10px;
  color: gray;
  width: 100%;
`;

const CommentGather = styled.div`
  margin-bottom: 40px;
  width: 100%;
`;

const CommentList = styled.div`
  padding: 0 10px;
  display: flex;
  /* justify-content: center; */
`;

const CommentID = styled.div`
  font-weight: bold;
`;

const CommentContent = styled.div`
  margin: 0 15px;
`;

const CommentInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
`;

const CommentInputLeft = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
`;

const NickName = styled.input`
  width: 50px;
  margin-left: 10px;
`;

const CommentInputRight = styled.div`
  white-space: nowrap;
  color: skyblue;
  font-weight: bold;
  cursor: pointer;
  margin-left: 5px;
`;

const Comment = styled.input`
  width: 100%;
`;
