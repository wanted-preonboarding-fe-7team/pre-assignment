import { TextInput } from 'components/common';
import styled from 'styled-components';

const CommentTextInput = styled(TextInput)`
  background-color: ${({ theme: { color } }) => color.white};
`;

export default CommentTextInput;
