import { useRef, useState, useEffect, useContext } from 'react';

import { Logo, TextInput } from 'components/common';
import { LoginContext } from 'context/context';
import { useNavigate } from 'react-router-dom';
import theme from 'styles/theme';
import storageUtils from 'utils/storage';

import { LoginWrapper, ButtonLink } from './Login.style';

const { setLocalStorage, getLocalStorage } = storageUtils;

const LOCAL_STORAGE_KEY_NAME = 'Bstagram_login';

const saveLoginData = (data) => setLocalStorage(LOCAL_STORAGE_KEY_NAME, data);
const getLoginData = getLocalStorage(LOCAL_STORAGE_KEY_NAME);

const Login = () => {
  const { setLoginData } = useContext(LoginContext);
  const [isValidId, setIsValidId] = useState(false);
  const [isValidPw, setIsValidPw] = useState(false);

  const isButtonActive = isValidId && isValidPw;

  const $inputId = useRef(null);
  const $inputPw = useRef(null);

  const navigate = useNavigate();

  const isValidInput = {
    email: isValidId,
    password: isValidPw,
  };

  const setIsValidInput = {
    email(boolean) {
      setIsValidId(boolean);
    },
    password(boolean) {
      setIsValidPw(boolean);
    },
  };

  const handleLoginButtonClick = () => {
    const currentId = $inputId.current.value;
    const currentPw = $inputPw.current.value;
    const loginData = { id: currentId, pw: currentPw };

    saveLoginData(loginData);
    setLoginData(loginData);

    navigate('/main', { replace: true });
  };

  useEffect(() => {
    $inputId.current.focus();
  }, [$inputId]);

  return (
    <LoginWrapper className="flex flex-center">
      <div className="login-area flex">
        <LoginContext.Provider value={{ isValidInput, setIsValidInput }}>
          <Logo />
          <div className="login-input-area">
            <TextInput
              placeholder="전화번호, 사용자 이름 또는 이메일"
              size={{ height: '36px', width: '100%' }}
              borderStyle={theme.border.linear}
              borderRadius={theme.border.radius.login}
              id="email"
              ref={$inputId}
            />
            <TextInput
              type="password"
              placeholder="비밀번호"
              size={{ height: '36px', width: '100%' }}
              borderStyle={theme.border.linear}
              borderRadius={theme.border.radius.login}
              id="password"
              ref={$inputPw}
            />
          </div>
          <ButtonLink
            onClick={handleLoginButtonClick}
            disabled={!isButtonActive}
          >
            로그인
          </ButtonLink>
        </LoginContext.Provider>
      </div>
    </LoginWrapper>
  );
};

export default Login;
