import isEmpty from 'utils/utils';

import Comment from './Comment';
import Wrapper from './CommentsList.styled';

const MOCK_COMMENTS_DATA = [
  { id: 0, writerId: 'flower', content: '이미지가 너무 좋네요!' },
  { id: 1, writerId: 'cloud', content: '잘 보고 갑니다😆' },
  { id: 2, writerId: 'penguin', content: '펭펭🐧' },
];

const CommentsList = () => {
  return (
    <Wrapper>
      {(!isEmpty(MOCK_COMMENTS_DATA) &&
        MOCK_COMMENTS_DATA.map(({ id, writerId, content }) => (
          <Comment writerId={writerId} content={content} key={id} />
        ))) || <p> 댓글이 없습니다. </p>}
    </Wrapper>
  );
};

export default CommentsList;
