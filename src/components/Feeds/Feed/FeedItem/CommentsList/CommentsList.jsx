import isEmpty from 'utils/utils';

import Comment from './Comment';
import Wrapper from './CommentsList.styled';

const CommentsList = ({ data: { comments: commentData } }) => {
  return (
    <Wrapper>
      {(!isEmpty(commentData) &&
        commentData?.map(({ id, writer, content }) => (
          <Comment writerId={writer} content={content} key={id} />
        ))) || <p> 댓글이 없습니다. </p>}
    </Wrapper>
  );
};

export default CommentsList;
