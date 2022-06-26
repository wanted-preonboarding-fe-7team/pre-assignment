import LOCAL_STORAGE_KEY_NAME from 'constants';

import { useRef, useState, useEffect, useContext } from 'react';

import LoginInput from 'components/Login/LoginItem/LoginInput';
import { Logo } from 'components/common';
import { LoginContext } from 'context/context';
import storageUtils from 'utils/storage';

import { Wrapper, ButtonLink, LoginArea, LoginInputArea } from './Login.style';

const { setLocalStorage, getLocalStorage } = storageUtils;

const saveLoginData = (data) => setLocalStorage(LOCAL_STORAGE_KEY_NAME, data);

const Login = () => {
  const { setIsLoggedIn } = useContext(LoginContext);
  const [isValidId, setIsValidId] = useState(false);
  const [isValidPw, setIsValidPw] = useState(false);

  const isButtonActive = isValidId && isValidPw;

  const $inputId = useRef(null);
  const $inputPw = useRef(null);

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

  const excuteLogin = (loginData) => {
    saveLoginData(loginData);
    setIsLoggedIn(loginData);
  };

  const handleLoginButtonClick = () => {
    const currentId = $inputId.current.value;
    const currentPw = $inputPw.current.value;
    const loginData = { id: currentId, pw: currentPw };

    const prevLoginData = getLocalStorage(LOCAL_STORAGE_KEY_NAME);

    if (!prevLoginData) {
      excuteLogin(loginData);
      return;
    }

    if (JSON.stringify(loginData) !== JSON.stringify(prevLoginData)) {
      alert('아이디(이메일)과 비밀번호를 확인해주세요.');
      $inputId.current.focus();
      return;
    }

    excuteLogin(loginData);
  };

  const handleInputEnterKeyUp = ({ key }) => {
    if (key !== 'Enter' || !isButtonActive) {
      return;
    }

    handleLoginButtonClick();
  };

  useEffect(() => {
    $inputId.current.focus();
  }, [$inputId]);

  return (
    <Wrapper>
      <LoginArea>
        <LoginContext.Provider value={{ isValidInput, setIsValidInput }}>
          <Logo />
          <LoginInputArea>
            <LoginInput
              id="email"
              inputRef={$inputId}
              onKeyUp={handleInputEnterKeyUp}
            />
            <LoginInput
              id="password"
              inputRef={$inputPw}
              onKeyUp={handleInputEnterKeyUp}
            />
          </LoginInputArea>
          <ButtonLink
            onClick={handleLoginButtonClick}
            disabled={!isButtonActive}
          >
            로그인
          </ButtonLink>
        </LoginContext.Provider>
      </LoginArea>
    </Wrapper>
  );
};

export default Login;
