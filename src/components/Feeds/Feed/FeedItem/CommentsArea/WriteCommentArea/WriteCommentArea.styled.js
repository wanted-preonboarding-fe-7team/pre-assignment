import styled from 'styled-components';

const WriteCommentForm = styled.form`
  padding-top: ${({
    theme: {
      feed: { whitespace },
    },
  }) => whitespace};
  border-top: ${({
    theme: {
      border: { linear },
    },
  }) => linear};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommentSubmitButton = styled.button`
  background-color: ${({ theme: { color } }) => color.white};
  font-size: 1rem;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  color: ${({ theme: { color } }) => color.blue2};
`;

export { WriteCommentForm, CommentSubmitButton };
