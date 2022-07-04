import styled, { css } from 'styled-components';

const WriteCommentForm = styled.form`
  ${({ theme: { feed } }) =>
    css`
      padding: ${feed.whitespace} ${feed.whitespace} 0;
    `};

  border-top: ${({
    theme: {
      border: { linear },
    },
  }) => linear};
  display: grid;
  grid-template-columns: 1fr 19fr 2fr;
  align-items: center;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr 12fr 2fr;
  }
`;

const CommentSubmitButton = styled.button`
  background-color: ${({ theme: { color } }) => color.white};
  font-size: 1rem;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  color: ${({ theme: { color } }) => color.blue2};
`;

export { WriteCommentForm, CommentSubmitButton };
