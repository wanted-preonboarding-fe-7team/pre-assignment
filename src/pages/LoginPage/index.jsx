import React, { useCallback, useRef, useState, useEffect } from 'react';
import { userData } from '../../utils/const';
import { validator } from '../../utils/util';
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
  const [emailCheck, setEmailCheck] = useState(true);
  const [passwordCheck, setPasswordCheck] = useState(true);
  const [validCheck, setValidCheck] = useState(false);

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleChangeEmail = useCallback((e) => {
    const [emailValid, passwordValid] = validator(
      emailRef.current.value,
      passwordRef.current.value
    );

    if (e.target.value === '') {
      setEmailCheck(true);
      setValidCheck(false);
      return;
    }

    if (emailValid) {
      setEmailCheck(true);
      if (passwordValid) {
        setValidCheck(true);
        return;
      }
      return;
    }

    setValidCheck(false);
    setEmailCheck(false);
  }, []);

  const handleChangePassword = useCallback((e) => {
    const [emailValid, passwordValid] = validator(
      emailRef.current.value,
      passwordRef.current.value
    );

    if (e.target.value === '') {
      setPasswordCheck(true);
      setValidCheck(false);
      return;
    }

    if (passwordValid) {
      setPasswordCheck(true);
      if (emailValid) {
        setValidCheck(true);
        return;
      }
      return;
    }

    setValidCheck(false);
    setPasswordCheck(false);
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (
      emailRef.current.value !== userData.email ||
      passwordRef.current.value != userData.password
    ) {
      alert('정보가 일치 하지 않습니다.');
      return;
    }

    localStorage.setItem('email', emailRef.current.value);
    localStorage.setItem('password', passwordRef.current.value);

    location.href = '/home';
  }, []);

  useEffect(() => {
    if (localStorage.getItem('email') && localStorage.getItem('password')) {
      location.href = '/home';
    }
  }, []);

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
                type="email"
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
            <Button isValid={validCheck} type="submit">
              로그인
            </Button>
          </LoginForm>
        </LoginContainer>
      </div>
    </Wrapper>
  );
};

export default LoginPage;
