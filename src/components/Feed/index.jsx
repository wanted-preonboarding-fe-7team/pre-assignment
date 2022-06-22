import React, { useEffect, useRef, useState } from 'react';
import Comments from '../Comments';
import CommentForm from '../CommentForm';
import {
  Li,
  Header,
  Avatar,
  Nickname,
  Icon,
  Like,
  Contents,
  FeedImage,
  IconList,
} from './style';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { FiHeart, FiSend, FiBookmark } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';

const Feed = ({ feed }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = feed.src;
    image.onload = () => {
      setLoading(false);
    };
  }, []);

  return loading ? null : (
    <Li>
      <Header>
        <Avatar src={feed.avatar} />
        <Nickname>{feed.nickname}</Nickname>
        <Icon>
          <HiOutlineDotsHorizontal />
        </Icon>
      </Header>
      <Contents>
        <FeedImage src={feed.src} />
        <IconList>
          <Icon>
            <FiHeart />
          </Icon>
          <Icon>
            <FaRegComment />
          </Icon>
          <Icon>
            <FiSend />
          </Icon>
          <Icon>
            <FiBookmark />
          </Icon>
        </IconList>
        <Like>좋아요 {feed.like}개</Like>
        <Comments comments={feed.comments} />
      </Contents>
      <CommentForm />
    </Li>
  );
};

export default Feed;
