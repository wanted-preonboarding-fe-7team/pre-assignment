import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import GNB from './GNB';
import { BiHeart } from 'react-icons/bi';
import { FaRegCommentDots } from 'react-icons/fa';
import { BiPaperPlane } from 'react-icons/bi';
import { GrBookmark } from 'react-icons/gr';
import { BsEmojiSmile } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BsFillCircleFill } from 'react-icons/bs';

export default function Feed() {
  //   const [picture, setPicture] = useState({
  //     id: 0,
  //     img: '',
  //   });

  //   useEffect(() => {
  //     fetch('/data/mockdata.json').then((res) =>
  //       res.json().then((data) => {
  //         setPicture(data);
  //       })
  //     );
  //   }, []);

  return (
    <>
      <GNB />
      <Body>
        {/* {picture.map((el) => {
          <FeedPiece>
            <FeedTop></FeedTop>
            <Img src={el.image}></Img>
          </FeedPiece>;
        })} */}
        <FeedPiece>
          <FeedTop>
            <FeedTopLeft>
              <BsFillCircleFill size="35px" opacity="20%" />
              <ProfileID>wanted</ProfileID>
            </FeedTopLeft>
            <FeedTopRight>
              <FiMoreHorizontal cursor="pointer" />
            </FeedTopRight>
          </FeedTop>
          <Img src="https://source.unsplash.com/random/600x500" />
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
              <CommentID>bcleft25</CommentID>
              <CommentContent>안녕하세요?</CommentContent>
            </CommentList>
            <CommentList>
              <CommentID>bcleft25</CommentID>
              <CommentContent>
                안녕하세요? 저는 조인호라고 합니다. 만나서 반갑습니다.
              </CommentContent>
            </CommentList>
          </CommentGather>
          <CommentInput>
            <CommentInputLeft>
              <BsEmojiSmile size="25px" />
              <Comment placeholder="댓글달기..." />
            </CommentInputLeft>
            <CommentInputRight>게시</CommentInputRight>
          </CommentInput>
        </FeedPiece>
        {/* <FeedPiece>
          <FeedTop>
            <FeedTopLeft>
              <BsFillCircleFill size="35px" opacity="20%" />
              <ProfileID>wanted</ProfileID>
            </FeedTopLeft>
            <FeedTopRight>
              <FiMoreHorizontal cursor="pointer" />
            </FeedTopRight>
          </FeedTop>
          <Img src="https://source.unsplash.com/random/900x500" />
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
              <CommentID>bcleft25</CommentID>
              <CommentContent>안녕하세요?</CommentContent>
            </CommentList>
            <CommentList>
              <CommentID>bcleft25</CommentID>
              <CommentContent>
                안녕하세요? 저는 조인호라고 합니다. 만나서 반갑습니다.
              </CommentContent>
            </CommentList>
          </CommentGather>
          <CommentInput>
            <CommentInputLeft>
              <BsEmojiSmile size="25px" />
              <Comment placeholder="댓글달기..." />
            </CommentInputLeft>
            <CommentInputRight>게시</CommentInputRight>
          </CommentInput>
        </FeedPiece>
        <FeedPiece>
          <FeedTop>
            <FeedTopLeft>
              <BsFillCircleFill size="35px" opacity="20%" />
              <ProfileID>wanted</ProfileID>
            </FeedTopLeft>
            <FeedTopRight>
              <FiMoreHorizontal cursor="pointer" />
            </FeedTopRight>
          </FeedTop>
          <Img src="https://source.unsplash.com/random/700x1080" />
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
              <CommentID>bcleft25</CommentID>
              <CommentContent>안녕하세요?</CommentContent>
            </CommentList>
            <CommentList>
              <CommentID>bcleft25</CommentID>
              <CommentContent>
                안녕하세요? 저는 조인호라고 합니다. 만나서 반갑습니다.
              </CommentContent>
            </CommentList>
          </CommentGather>
          <CommentInput>
            <CommentInputLeft>
              <BsEmojiSmile size="25px" />
              <Comment placeholder="댓글달기..." />
            </CommentInputLeft>
            <CommentInputRight>게시</CommentInputRight>
          </CommentInput>
        </FeedPiece> */}
      </Body>
    </>
  );
}
const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: fit-content;
  overflow: auto;
`;

const FeedPiece = styled.div`
  margin: 20px 0;
  width: fit-content;
  height: fit-content;
  outline: 1px solid rgba(0, 0, 0, 0.2);
`;

const FeedTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
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
`;

const CommentGather = styled.div`
  margin-bottom: 40px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
`;
const CommentInputLeft = styled.div`
  display: flex;
  align-items: center;
`;
const CommentInputRight = styled.div`
  color: skyblue;
  font-weight: bold;
  cursor: pointer;
`;
const Comment = styled.input`
  margin-left: 10px;
`;
