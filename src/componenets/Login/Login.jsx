import { Logo, TextInput } from 'componenets/common';
import theme from 'styles/theme';

import { Wrapper, ButtonLink } from './Login.style';

const Login = () => {
  return (
    <Wrapper>
      <div className="login-area flex">
        <Logo />
        <div className="login-input-area">
          <TextInput
            placeholder="전화번호, 사용자 이름 또는 이메일"
            size={{ height: '36px', width: '100%' }}
            borderStyle={theme.border.linear}
            borderRadius={theme.border.radius.login}
          />
          <TextInput
            placeholder="비밀번호"
            size={{ height: '36px', width: '100%' }}
            borderStyle={theme.border.linear}
            borderRadius={theme.border.radius.login}
          />
        </div>
        <ButtonLink to="/" onClick={() => console.log('?')}>
          로그인
        </ButtonLink>
      </div>
    </Wrapper>
  );
};

export default Login;
