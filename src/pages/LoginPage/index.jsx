import React from 'react';
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
  return (
    <Wrapper>
      <div>
        <LoginContainer>
          <Header>
            <Logo src="./images/logo.png" alt="logo" />
          </Header>
          <LoginForm>
            <InputBox>
              <Input
                name="email"
                type="text"
                placeholder="휴대폰 번호 또는 이메일 주소"
                required
              />
              <Input
                name="pasword"
                type="password"
                placeholder="비밀번호"
                autoComplete="off"
                required
              />
            </InputBox>
            <Button>로그인</Button>
          </LoginForm>
        </LoginContainer>
      </div>
    </Wrapper>
  );
};

export default LoginPage;
