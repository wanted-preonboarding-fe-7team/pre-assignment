import React from 'react';
import { Ul } from './style';
import Comment from '../Comment';

const Comments = ({ comments }) => {
  return (
    <Ul>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </Ul>
  );
};

export default Comments;
