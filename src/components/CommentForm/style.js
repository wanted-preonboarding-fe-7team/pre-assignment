import styled from 'styled-components';

export const Form = styled.form`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const CommentInput = styled.input`
  flex-grow: 1;
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.regular};
  color: ${({ theme }) => theme.colors.blue};
  background-color: inherit;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
`;
