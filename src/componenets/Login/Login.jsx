import { Logo, TextInput } from 'componenets/common';
import theme from 'styles/theme';

import Wrapper from './Login.style';

const Login = () => {
  return (
    <Wrapper>
      <div className="login-area">
        <Logo />
        <div className="login-input-area">
          <TextInput
            placeholder="전화번호, 사용자 이름 또는 이메일"
            size={{ height: '36px', width: '266px' }}
            borderStyle={theme.border.linear}
            borderRadius={theme.border.radius.login}
          />
          <TextInput
            placeholder="비밀번호"
            size={{ height: '36px', width: '266px' }}
            borderStyle={theme.border.linear}
            borderRadius={theme.border.radius.login}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
