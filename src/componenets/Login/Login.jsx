import TextInput from 'componenets/common/TextInput';
import theme from 'styles/theme';

import { Wrapper, LoginArea } from './Login.style';

const Login = () => {
  return (
    <Wrapper>
      <LoginArea>
        로그인 로고
        <TextInput
          placeholder="전화번호, 사용자 이름 또는 이메일"
          size={{ height: '36px', width: '266px' }}
          borderStyle={theme.border.linear}
          borderRadius={theme.border.radius.login}
        />
      </LoginArea>
    </Wrapper>
  );
};

export default Login;
