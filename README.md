# ✅ 원티드 프리온보딩 프론트엔드 코스 사전과제

[원티드 프리온보딩 프론트엔드 코스 사전과제](https://github.com/wanted-pre-onboarding-fe/pre-assignment/blob/main/README.md)를 수행한 repository입니다.

## 데모페이지 🖥️

🔗 [https://bstagram.netlify.app/](https://bstagram.netlify.app/)

<div style="display:flex">
  <img src="https://user-images.githubusercontent.com/78826879/175809414-c2c2e457-2913-404c-9b35-4bd5d2018d3e.png" width="49%" alt="미리보기 화면1">
  <img src="https://user-images.githubusercontent.com/78826879/175809504-3858100f-dbb5-4722-8306-26604188d58e.png" width="49%" alt="미리보기 화면2">
</div>



최초 로그인시 입력한 아이디(이메일), 비밀번호 정보를 Local Storage에 저장합니다.
- 다음 로그인부터 이 정보와 일치하는지 여부를 확인하여 일치하는 경우에만 로그인 가능합니다.

아이디와 비밀번호는 아래 조건을 지켜서 입력하여야 로그인 가능합니다.

- **조건**
  - 이메일 : @ , . 포함
  - 비밀번호 : 대문자, 숫자, 특수문자 포함 8자리 이상

---

## Assignment 1 - `Login`

### ✔ 요구사항 
[Assignment 1 - `Login`](https://github.com/wanted-pre-onboarding-fe/pre-assignment#assignment-1---login)

### 🤓 구현

<img src="https://user-images.githubusercontent.com/78826879/175810129-1133c0c9-9f2d-4749-b1a0-ac0a6626d0e1.gif" width="50%" alt="요구사항1 구현 이미지">

- 로그인 정보를 입력하는 `input`을 `LoginInput`으로 분리하여, `onChange`이벤트가 발생하더라도 input에서만 렌더링이 일어나도록 구현
  - `TextInput`을 `common`디렉토리 내의 공통 컴포넌트로 만들어, 이를 이용하여 로그인에서 사용할 수 있도록 `LoginInput` 구현 
- 최초 로그인시에는 저장된 정보가 없고, 로그인에 성공하면(올바른 조건으로 id, pw입력) `Assignment3`의 `저장된 정보`로 저장
  - **조건**
    - 이메일 : @ , . 포함
    - 비밀번호 : 대문자, 숫자, 특수문자 포함 8자리 이상
- 로그인 완료시 메인페이지로 이동

## Assignment2 - `GNB`

### ✔ 요구사항 

[Assignment2 - `GNB`](https://github.com/wanted-pre-onboarding-fe/pre-assignment#assignment2---gnb)

### 🤓 구현

<div style="display:flex">
  <img src="https://user-images.githubusercontent.com/78826879/175810504-20478924-45ee-42d8-b39c-768a88dcf520.gif" width="49%" alt="요구사항2 구현-GNB 고정">
  <img src="https://user-images.githubusercontent.com/78826879/175810652-3497fd3b-b702-411a-96fc-8c98eb770ad2.gif" width="49%" alt="요구사항2 구현-반응형">
</div>

- `position: sticky` 를 이용하여 고정된 GNB 구현
- GNB 모바일 대응 (미디어 쿼리 사용)
  - `max-width: 640px` 보다 작아질 경우 검색창 input 숨기기
    - 기준 640px은 실제 instagram을 토대로 결정
  - `max-width: 640px` 보다 작아질 경우 버튼 메뉴들 간격 조정
  - `max-width: 480px` 보다 작아질 경우 기존 GNB의 `padding`을 제거

## Assignment3 - `Validation`

### ✔ 요구사항 

[Assignment3 - `Validation`](https://github.com/wanted-pre-onboarding-fe/pre-assignment#assignment3---validation)

### 🤓 구현

<img src="https://user-images.githubusercontent.com/78826879/175811184-2f0185bc-3e5a-4c85-bc66-e2315e21b1a3.gif" alt="요구사항 3 구현" width="50%">

- 이메일과 비밀번호의 유효성을 정규표현식으로 확인 ([`LoginInput.jsx`](https://github.com/BB-choi/wanted-pre-onboarding-fe/blob/main/src/components/Login/LoginItem/LoginInput.jsx))
```js
const patterns = {
  email:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  password: /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
};
```
- Validation 함수를 분리
```js
const checkValidInput = {
  email(value) {
    return patterns.email.test(value);
  },
  password(value) {
    return patterns.password.test(value);
  },
};
```

- Validation 상태를 CSS(border 색상 red)로 표시
  - `isValidId`, `isValidPw`상태를 이용하여 border style 변경
- 아이디(이메일), 비밀번호 모두 유효성 검사를 통과한 경우에만 로그인 버튼을 활성화
  - 하나라도 유효하지 않은 경우(공백 포함)에는 `disabled`처리
```js
const isButtonActive = isValidId && isValidPw;
```
<img src="https://user-images.githubusercontent.com/78826879/175814819-65f5e9c1-0426-4022-9689-d78ab78d712a.gif" width="60%" alt="요구사항3-일치여부확인">

- localStorage에 저장된 아이디(이메일)과 비밀번호와 하나라도 일치하지 않는경우 알림 표시


## Assignment4 - `Routing`

### ✔ 요구사항 

[Assignment4 - `Routing`](https://github.com/wanted-pre-onboarding-fe/pre-assignment#assignment4---routing)

### 🤓 구현

<img src="https://user-images.githubusercontent.com/78826879/175811379-fccb5c0e-f0a8-454b-928a-1137a0192fba.gif" width="50%" alt="요구사항4 - 라우팅">

- 로그인, 로그아웃시 화면 전환
  - 루트(`/`)로 접속, 로그인 여부에 따라 화면 전환(주소 변경x) [`Home.jsx`](https://github.com/BB-choi/wanted-pre-onboarding-fe/blob/main/src/pages/Home/Home.jsx)
    - `<Link>`혹은 `<Navigate>`는 `history API`를 이용하므로, `isLoggedIn` 상태를 정의하여 사용
  - 로그아웃시 로그인 화면으로 전환

## Assignment5 - `Feeds`

### ✔ 요구사항 

[Assignment5 - `Feeds`](https://github.com/wanted-pre-onboarding-fe/pre-assignment#assignment5---feeds)

### 🤓 구현

<img src="https://user-images.githubusercontent.com/78826879/175815199-14df4956-d88e-4943-8b34-aa16de550e0f.gif" width="60%" alt="요구사항5-1">

- `public/data/feedData.json`을 `fetch`해 화면에 렌더링([`Feeds.jsx`](https://github.com/BB-choi/wanted-pre-onboarding-fe/blob/main/src/components/Feeds/Feeds.jsx)) 
- 이미지 로딩 후 화면 표시(spinner 표시 후 로딩 완료시 Feeds 표시)

<img src="https://user-images.githubusercontent.com/78826879/175815298-44cf05be-9d19-4a32-b9ff-7bcecd0f6d3a.gif" width="60%" alt="요구사항5-3">

- 댓글 기능
  - 댓글 작성 및 작성 후 Input 초기화
 
- 반응형 적용
