import React from 'react';
import { Li, Nickname } from './style';

const Comment = ({ comment }) => {
  return (
    <Li>
      <Nickname>{comment.nickname}</Nickname>
      <p>{comment.content}</p>
    </Li>
  );
};

export default Comment;
