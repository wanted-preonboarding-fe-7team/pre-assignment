import React, { useEffect, useRef, useState } from 'react';

const Login = () => {
  const sessionStorage = window.sessionStorage;
  const [state, setState] = useState({
    id: '',
    pwd: '',
  });

  const idRef = useRef();
  const pwdRef = useRef();

  const handleLogin = () => {
    const user = {
      id: idRef.current.value,
      pwd: pwdRef.current.value,
    };
    setState({ id: user.id, pwd: user.pwd });
  };

  useEffect(() => {
    sessionStorage.setItem('id', state.id);
    sessionStorage.setItem('pwd', state.pwd);
    console.log(sessionStorage);
  });

  return (
    <div className="Login">
      <section className="login-input">
        <div>
          <img
            className="logo"
            src={process.env.PUBLIC_URL + '/assets/logo.png'}
          />
          <input
            placeholder="전화번호, 사용자 이름 또는 이메일"
            name="id"
            ref={idRef}
          />
          <input placeholder="비밀번호" name="pwd" ref={pwdRef} />
          <button onClick={handleLogin}>로그인</button>
          <div className="line"></div>
          <span>또는</span>
        </div>
        <div className="login-sns">
          <p>
            <img src={process.env.PUBLIC_URL + '/assets/social.png'} />
            Facebook으로 로그인
          </p>
          <p className="find-pwd">비밀번호를 잊으셨나요?</p>
        </div>
      </section>
      <section className="login-signup">
        <div>
          계정이 없으신가요?<span> 가입하기</span>
        </div>
      </section>
      <section className="login-download">
        <p>앱을 다운로드하세요.</p>
        <img src={process.env.PUBLIC_URL + '/assets/login-apple.png'} />
        <img src={process.env.PUBLIC_URL + '/assets/login-google.png'} />
      </section>
    </div>
  );
};

export default Login;
