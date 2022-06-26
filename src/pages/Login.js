import React from 'react';

const Login = () => {
  return (
    <div className="Login">
      <section className="login-input">
        <div>
          <img
            className="logo"
            src={process.env.PUBLIC_URL + '/assets/logo.png'}
          />
          <input placeholder="전화번호, 사용자 이름 또는 이메일" />
          <input placeholder="비밀번호" />
          <button>로그인</button>
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
        <button>App store에서 다운로드 하기</button>
        <button>다운로드하기 Google Play</button>
      </section>
    </div>
  );
};

export default Login;
