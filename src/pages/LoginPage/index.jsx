import React from 'react';
import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { emailValid, passwordValid } from '../../utils/util';
import {
  Wrapper,
  LoginContainer,
  Header,
  Logo,
  LoginForm,
  InputBox,
  Input,
  Button,
} from './style';

const LoginPage = () => {
  const [validCheck, setValidCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(true);
  const [passwordCheck, setPasswordCheck] = useState(true);

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleChangeEmail = (e) => {
    if (e.target.value === '') {
      setEmailCheck(true);
    } else {
      const isValid = emailValid(e.target.value);
      setEmailCheck(isValid);
    }
  };

  const handleChangePassword = (e) => {
    if (e.target.value === '') {
      setPasswordCheck(true);
    } else {
      const isValid = passwordValid(e.target.value);
      setPasswordCheck(isValid);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (
      emailRef.current.value &&
      passwordRef.current.value &&
      emailCheck &&
      passwordCheck
    ) {
      setValidCheck(true);
    } else {
      setValidCheck(false);
    }
  }, [emailCheck, passwordCheck]);

  return (
    <Wrapper>
      <div>
        <LoginContainer>
          <Header>
            <Logo src="./images/logo.png" alt="logo" />
            <h3>친구들의 사진과 동영상을 보려면 가입하세요.</h3>
          </Header>
          <LoginForm onSubmit={handleSubmit}>
            <InputBox>
              <Input
                name="email"
                type="text"
                ref={emailRef}
                onChange={handleChangeEmail}
                isChecked={emailCheck}
                placeholder="이메일"
                required
              />
              <Input
                name="pasword"
                type="password"
                ref={passwordRef}
                onChange={handleChangePassword}
                isChecked={passwordCheck}
                placeholder="비밀번호"
                autoComplete="off"
                required
              />
            </InputBox>
            <Button isValid={validCheck} disabled={validCheck} type="submit">
              로그인
            </Button>
          </LoginForm>
        </LoginContainer>
      </div>
    </Wrapper>
  );
};

export default LoginPage;
