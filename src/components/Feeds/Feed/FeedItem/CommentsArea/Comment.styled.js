import styled from 'styled-components';

const CommentWrapper = styled.li`
  &:not(:last-child) {
    margin-bottom: ${({ theme: { comment } }) => comment.marginBottom};
  }
`;

const WriterName = styled.span`
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
  margin-right: 0.5rem;
`;

export { CommentWrapper, WriterName };
