import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.scss';

function Login() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [isDisabled, setDisabled] = useState(true);
  let checkEmail =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
  let checkPw =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  // 아이디 정규식 확인 후 CSS변경
  const handleInputId = (e) => {
    setInputId(e.target.value);
    if (checkEmail.test(inputId)) {
      idRef.current.style = 'border:1px solid #d3d1cb';
      loginActive();
    } else {
      idRef.current.style = 'border:1px solid red';
    }
  };
  // 비밀번호 정규식 확인 후 CSS변경
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
    if (checkPw.test(inputPw)) {
      pwRef.current.style = 'border:1px solid #d3d1cb';
      loginActive();
    } else {
      pwRef.current.style = 'border:1px solid red';
    }
  };
  const navigate = useNavigate();
  const idRef = useRef();
  const pwRef = useRef();
  const active = useRef();
  //아이디 비밀번호 정규식 확인 후 로그인 버튼 활성화
  const loginActive = () => {
    if (checkEmail.test(inputId) && checkPw.test(inputPw)) {
      active.current.style = 'background:#0095f6';
      setDisabled(false);
    }
  };

  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    const id = localStorage.getItem('id');
    const pw = localStorage.getItem('pw');
    if (id === inputId && pw === inputPw) {
      alert('이미 등록된 회원입니다.');
    }
    //Local Storage 에 로그인 정보 저장
    localStorage.setItem('id', inputId);
    localStorage.setItem('pw', inputPw);
    //메인으로 이동
    navigate('/main');
  };
  return (
    <>
      <div className="login-box">
        <div className="login-top">
          <h1>
            <img
              className="logo"
              alt="instagram"
              src="instagram-new-logo.png"
            />
          </h1>
          <div className="login-form">
            <input
              ref={idRef}
              className="email-input"
              type="text"
              defaultValue={inputId}
              onKeyUp={handleInputId}
              placeholder="전화번호,사용자 이름 또는 이메일"
            />
            <input
              ref={pwRef}
              className="pw-input"
              type="password"
              defaultValue={inputPw}
              onKeyUp={handleInputPw}
              placeholder="비밀번호"
            />
            <button
              className="login-btn"
              onClick={onClickLogin}
              ref={active}
              disabled={isDisabled}
            >
              로그인
            </button>
          </div>
        </div>
        <div className="login-bottom">
          <div className="line">
            <div>또는</div>
          </div>
          <div className="facebook">
            <div className="login-facebook">
              <span className="strong">Facebook</span> 으로 로그인
            </div>
            <div className="password-forgot">비밀번호를 잊으셨나요?</div>
          </div>
        </div>
      </div>
      <div className="signup-box">
        계정이 없으신가요?
        <span className="strong-blue"> 가입하기</span>
      </div>
      <div className="app-download">앱을 다운로드 하세요</div>
      <div className="store-btn">
        <img className="app-store" alt="app-store" src="app-store.webp" />
        <img className="google-play" alt="google-play" src="google-play.png" />
      </div>
    </>
  );
}
export default Login;
