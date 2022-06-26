import { useState } from 'react';

import { isEmpty } from 'utils/utils';

import Comment from './Comment';
import { Wrapper, Comments } from './CommentsArea.styled';
import WriteCommentArea from './WriteCommentArea';

const CommentsArea = ({ data: { comments: commentData } }) => {
  const [comments, setComments] = useState(commentData);

  return (
    <Wrapper>
      <Comments>
        {(!isEmpty(comments) &&
          comments?.map(({ id, writer, content }) => (
            <Comment writerId={writer} content={content} key={id} />
          ))) || <p> 댓글이 없습니다. </p>}
      </Comments>
      <WriteCommentArea setComments={setComments} comments={comments} />
    </Wrapper>
  );
};

export default CommentsArea;
