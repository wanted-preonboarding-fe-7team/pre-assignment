import { useContext, useState } from 'react';

import { LoginContext } from 'context/context';

import {
  inputSize,
  loginInputRadius,
  LoginTextInput,
} from './LoginInput.styled';

const PLACE_HOLDER = {
  email: '전화번호, 사용자 이름 또는 이메일',
  password: '비밀번호',
};

const inputType = {
  email: 'text',
  password: 'password',
};

const patterns = {
  email:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  password: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
};

const checkValidInput = {
  email(value) {
    return patterns.email.test(value);
  },
  password(value) {
    return patterns.password.test(value);
  },
};

const LoginInput = ({ id, inputRef }) => {
  const { isValidInput, setIsValidInput } = useContext(LoginContext);

  const [inputText, setInputText] = useState('');

  const handleOnChange = ({ target }) => {
    const inputValue = target.value;

    setInputText(inputValue);
    setIsValidInput[id](checkValidInput[id](inputValue));
  };

  return (
    <LoginTextInput
      placeholder={PLACE_HOLDER[id]}
      type={inputType[id]}
      onChange={handleOnChange}
      size={inputSize}
      borderRadius={loginInputRadius}
      isValidInput={(inputText && isValidInput[id]) || !inputText}
      ref={inputRef}
      inputValue={inputText}
    />
  );
};

export default LoginInput;
