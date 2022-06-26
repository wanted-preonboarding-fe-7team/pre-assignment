import theme from 'styles/theme';

import CommentTextInput from './CommentInput.styled';

const CommentInput = ({ inputText, setInputText, inputName }) => {
  const handleOnChange = ({ target }) => {
    const inputValue = target.value;
    setInputText(inputValue);
  };

  return (
    <CommentTextInput
      size={{ width: theme.comment.inputWidth, height: '100%' }}
      name={inputName}
      inputValue={inputText}
      onChange={handleOnChange}
    />
  );
};

export default CommentInput;
