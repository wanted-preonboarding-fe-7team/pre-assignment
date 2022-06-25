import { TextInput } from 'components/common';
import styled, { css } from 'styled-components';

const WriteCommentForm = styled.form`
  ${({
    theme: {
      feed: { whitespace },
    },
  }) => css`
    padding: calc(${whitespace} * 2) ${whitespace} ${whitespace};
  `};
  border-top: ${({
    theme: {
      border: { linear },
    },
  }) => linear};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommentInput = styled(TextInput)`
  background-color: ${({ theme: { color } }) => color.white};
`;

const CommentSubmitButton = styled.button`
  background-color: ${({ theme: { color } }) => color.white};
  font-size: 1rem;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  color: ${({ theme: { color } }) => color.blue2};
`;

export { WriteCommentForm, CommentInput, CommentSubmitButton };
