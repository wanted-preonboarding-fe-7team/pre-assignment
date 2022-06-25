import { Icon } from 'components/common';
import theme from 'styles/theme';

import {
  WriteCommentForm,
  CommentInput,
  CommentSubmitButton,
} from './WriteCommentArea.styled';

const onSubmitHandler = (e) => {
  e.preventDefault();
  console.log(e);
};

const WriteCommentArea = () => {
  return (
    <WriteCommentForm onSubmit={onSubmitHandler}>
      <Icon icon="smile" />
      <CommentInput
        size={{ width: theme.comment.inputWidth, height: '100%' }}
      />
      <CommentSubmitButton type="submit">게시</CommentSubmitButton>
    </WriteCommentForm>
  );
};

export default WriteCommentArea;
