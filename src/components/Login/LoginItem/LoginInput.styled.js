import { TextInput } from 'components/common';
import styled from 'styled-components';
import theme from 'styles/theme';

const { loginInput: inputSize } = theme.login;

const {
  linear: linearBorder,
  radius: { login: loginInputRadius },
} = theme.border;

const errorBorder = `2px solid ${theme.color.red}`;

const LoginTextInput = styled(TextInput)`
  border: ${({ isValidInput }) => {
    return isValidInput ? linearBorder : errorBorder;
  }};
`;

export { inputSize, loginInputRadius, LoginTextInput };
