import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const localStorage = window.localStorage;
  const [validEmail, setValidEmail] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [validBtn, setValidBtn] = useState(false);

  const idRef = useRef();
  const pwdRef = useRef();

  //이메일 유효성 검사
  const checkEmail = (e) => {
    let regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const result = regExp.test(e.target.value);
    if (result) {
      setValidEmail(result);
    } else {
      setValidEmail(false);
    }
    return regExp.test(e.target.value);
  };

  //비밀번호 유효성 검사 (영대문자, 숫자, 특수문자, 8자 이상)
  const checkPwd = (e) => {
    let regExp = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    const result = regExp.test(e.target.value);
    if (result) {
      setValidPwd(result);
    } else {
      setValidPwd(false);
    }
    return regExp.test(e.target.value);
  };

  //아이디와 비밀번호 useState()
  const handleLogin = () => {
    const user = {
      id: idRef.current.value,
      pwd: pwdRef.current.value,
    };
    if (validBtn) {
      //localStorage에 아이디와 비밀번호 저장
      localStorage.setItem('id', user.id);
      localStorage.setItem('pwd', user.pwd);
      navigate('/home');
    }
  };

  useEffect(() => {
    if (validEmail && validPwd) {
      setValidBtn(true);
    } else {
      setValidBtn(false);
    }
    console.log(validBtn);
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
            className={validEmail ? 'input-valid' : 'input-invalid'}
            placeholder="전화번호, 사용자 이름 또는 이메일"
            name="id"
            ref={idRef}
            onBlur={checkEmail}
            // onChange={checkEmail}
          />
          <input
            className={validPwd ? 'input-valid' : 'input-invalid'}
            placeholder="비밀번호"
            name="pwd"
            ref={pwdRef}
            onBlur={checkPwd}
            // onChange={checkPwd}
          />
          <button
            className={validBtn ? 'btn-activate' : 'btn-disabled'}
            disabled={!validBtn}
            onClick={handleLogin}
          >
            로그인
          </button>
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
