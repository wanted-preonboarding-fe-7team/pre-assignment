import React from 'react';
import { Form, CommentInput, Button } from './style';

const CommentForm = () => {
  return (
    <Form>
      <CommentInput placeholder="댓글달기..." />
      <Button>게시</Button>
    </Form>
  );
};

export default CommentForm;
