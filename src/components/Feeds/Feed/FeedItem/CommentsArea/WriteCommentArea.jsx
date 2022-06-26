import LOCAL_STORAGE_KEY_NAME from 'constants';

import { useState, useEffect } from 'react';

import { Icon } from 'components/common';
import theme from 'styles/theme';
import storageUtils from 'utils/storage';
import isEmpty from 'utils/utils';

import {
  WriteCommentForm,
  CommentTextInput,
  CommentSubmitButton,
} from './WriteCommentArea.styled';

const COMMENT_INPUT_NAME = 'comment-content';
const EMPTY_COMMENT_ALRET_MESSAGE = '내용을 입력해주세요.';

const { getLocalStorage } = storageUtils;

const CommentInputText = ({ inputText, setInputText }) => {
  const handleOnChange = ({ target }) => {
    const inputValue = target.value;
    setInputText(inputValue);
  };

  return (
    <CommentTextInput
      size={{ width: theme.comment.inputWidth, height: '100%' }}
      name={COMMENT_INPUT_NAME}
      inputValue={inputText}
      onChange={handleOnChange}
    />
  );
};

const WriteCommentArea = ({ comments, setComments }) => {
  const [inputText, setInputText] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const $commentInput = e.target[COMMENT_INPUT_NAME];
    const commentContent = $commentInput.value;

    if (isEmpty(commentContent)) {
      alert(EMPTY_COMMENT_ALRET_MESSAGE);
      $commentInput.focus();
      return;
    }

    const { id } = getLocalStorage(LOCAL_STORAGE_KEY_NAME);
    const [userName] = id.split('@');

    setComments([
      ...comments,
      { id: comments.length + 1, writer: userName, content: commentContent },
    ]);
  };

  useEffect(() => {
    setInputText('');
  }, [comments]);

  return (
    <WriteCommentForm onSubmit={onSubmitHandler}>
      <Icon icon="smile" />
      <CommentInputText inputText={inputText} setInputText={setInputText} />
      <CommentSubmitButton type="submit">게시</CommentSubmitButton>
    </WriteCommentForm>
  );
};

export default WriteCommentArea;
