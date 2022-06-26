import LOCAL_STORAGE_KEY_NAME from 'constants';

import { useState, useEffect, useCallback } from 'react';

import { Icon } from 'components/common';
import storageUtils from 'utils/storage';
import { isEmpty } from 'utils/utils';

import CommentInput from './CommentInput';
import {
  WriteCommentForm,
  CommentSubmitButton,
} from './WriteCommentArea.styled';

const COMMENT_INPUT_NAME = 'comment-content';
const EMPTY_COMMENT_ALRET_MESSAGE = '내용을 입력해주세요.';

const { getLocalStorage } = storageUtils;

const WriteCommentArea = ({ comments, setComments }) => {
  const [inputText, setInputText] = useState('');

  const handleOnSubmit = useCallback((e) => {
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
  }, []);

  useEffect(() => {
    setInputText('');
  }, [comments]);

  return (
    <WriteCommentForm onSubmit={handleOnSubmit}>
      <Icon icon="smile" />
      <CommentInput
        inputText={inputText}
        setInputText={setInputText}
        inputName={COMMENT_INPUT_NAME}
      />
      <CommentSubmitButton type="submit">게시</CommentSubmitButton>
    </WriteCommentForm>
  );
};

export default WriteCommentArea;
