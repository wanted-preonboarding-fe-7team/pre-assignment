import { CommentWrapper, WriterName } from './Comment.styled';

const Comment = ({ writerId, content }) => {
  return (
    <CommentWrapper>
      <WriterName>{writerId}</WriterName>
      {content}
    </CommentWrapper>
  );
};

export default Comment;
