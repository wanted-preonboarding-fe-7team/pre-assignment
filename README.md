# 😀 안녕하세요. 심채영입니다.
<img src="https://user-images.githubusercontent.com/73277502/154791225-7298da96-2917-4aef-aff1-82750af3d298.jpeg" width="200">
  
멋쟁이사자처럼 프론트엔드 스쿨 1기 과정으로 프론트엔드를 시작하게 되었습니다. 소외되는 이용자가 없는 따뜻한 서비스를 만드는 개발자가 되는 것을 목표로 정진중입니다. 원티드의 프리온보딩 프론트엔드 코스를 통해 JavaScript를 더욱 깊게 공부하여 저의 프로그래밍 능력을 확장하고 싶습니다. 그리고 좋은 기업에 취직하여 성장하고 싶어 지원합니다.  
----
## 👍주어진 Assignment를 모두 구현했습니다!👍 
대표적인 몇가지 기능을 어떻게 구현했는지 아래로 이어 설명하겠습니다.  
  
## 📌 프로젝트 구조  
```bbash
public
├── assets
│   ├── login-apple.png
│   ├── login-google.png
│   ├── logo.png
│   └── social.png
├── data
│   └── feedData.json
├── index.html
src
├── App.css
├── App.js
├── Components
│   ├── Feed.js
│   ├── FeedWrap.js
│   └── Header.js
├── pages
│   ├── Home.js
│   ├── Login.js
│   └── PreAssignmentGuide.jsx
└── index.js
```
## 📌 로그인할 수 있는 임시 유저 정보 (아래 계정으로 테스트 로그인이 가능합니다.)
- 이메일 : arong@dog.com
- 비밀번호 : Arong1234!
----
## 📌 로그인  
⭐️ 렌더링 최적화 : 유저 정보를 받아올 때
`<input>`에 onChange 속성 대신 ref를 주고 useRef() 훅을 이용하여 `<input>`의 value를 구합니다.  
로그인 버튼을 눌렀을 때 useState()로 유저 정보 값을 업데이트하여 렌더링을 최소화하였습니다.  

```
const idRef = useRef();
const pwdRef = useRef();

const handleLogin = () => {
    const user = {
      id: idRef.current.value,
      pwd: pwdRef.current.value,
    };
    if (validBtn) {
      if (user.id === userInfo.id && user.pwd === userInfo.pwd) {
        //localStorage에 아이디와 비밀번호 저장
        localStorage.setItem('id', user.id);
        localStorage.setItem('pwd', user.pwd);
        navigate('/home');
      } else {
        alert('이메일 또는 비밀번호가 틀립니다.');
        idRef.current.value = '';
        pwdRef.current.value = '';
      }
    }
  };
```
  
⭐️ 이메일, 비밀번호 유효성 검사  
`<input>`의 onBlur 속성 값을 이용하여 포커스가 해지될 때 유효성 검사를 하고 값에 따라 className을 다르게 부여합니다.  
형식에 맞지 않다면 입력란의 테두리가 빨간색이 되어 경고합니다. 
```
//비밀번호 유효성 검사

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

//비밀번호 input창

<input
  className={validPwd ? 'input-valid' : 'input-invalid'}
  onBlur={checkPwd}
 />
```
  
⭐️ 로그인 버튼 활성화  
이메일과 비밀번호가 유효성 검사를 통과하면 useState()로 validEmail, validPwd의 값을 true로 변경합니다.  
두 값이 모두 true라면 setValidBtn 값을 true로 저장하여 `<button>`의 disabled 값을 변경합니다.  
validBtn의 값에 따라 버튼의 색상이 바뀌고, 활성화 상태가 바뀝니다.  
```
<button
        className={validBtn ? 'btn-activate' : 'btn-disabled'}
        disabled={!validBtn}
        onClick={handleLogin}
      >
```
⭐️ 로그아웃  
localStorage에 저장해두었던 유저 정보를 지운 후 useNavigate()를 이용해 로그인 화면으로 페이지 이동합니다.
```
const logout = () => {
  localStorage.removeItem('id');
  localStorage.removeItem('pwd');
  navigate('/', { replace: true });
};
```

## 📌 피드  
⭐️ Home.js -> FeedWrap.js -> Feed.js로 data라는 props 받아 페이지에 로드합니다.  
- localStorage에 값이 있는지로 로그인 여부를 확인해 로그인 페이지로 유도합니다.  
- mount될 때 fetch 함수로 게시글(피드) 데이터를 받아옵니다.  
```
useEffect(() => {
  if (!localStorage.getItem('id')) {
    alert('로그인이 필요한 서비스입니다.');
    navigate('/');
  }

  fetch(`${process.env.PUBLIC_URL}/data/feedData.json`)
    .then((res) => res.json())
    .then((res) => {
      setData(res);
    });
}, []);
```
⭐️ FeedWrap.js에서 Feed.js로 데이터 전달  
데이터가 들어오기 전에 map()이 실행되어 TypeError: Cannot read property 'map' of undefined 에러가 발생하였습니다.  
'data &&' 조건을 넣어 data가 들어온 후 함수를 실행하도록하여 문제를 해결했습니다.  
```
{data && data.map((it, idx) => <Feed key={idx} data={it} />)};
```
⭐️ 댓글 게시 기능  
마찬가지로 useRef()를 활용하여 렌더링 최적화를 하였습니다.  
엔터키로 댓글을 작성하면 값이 두 번 저장되는 오류가 있었습니다. 한글이 조합문자여서 생겼던 오류로 nativeEvent.isComposing를 사용하여 해결했습니다.  
```
const inpRef = useRef();

//기존 데이터에 새로운 댓글 추가
const saveInputValue = () => {
  const inputValue = inpRef.current.value;
  setNewcom([...newcom, { content: inputValue }]);
  inpRef.current.value = '';
};

//버튼으로 댓글 게시
const addComBtn = () => {
  saveInputValue();
};

//엔터키로 댓글 게시하기
const addComEnter = (e) => {
  if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
    saveInputValue();
  }
};
 ```
 ⭐️ 이미지가 로드 된 후 컴포넌트 로드  
 `<img>` 태그에 onLoad()속성을 넣어 src 값이 호출 된 후 실행되는 onLoad() 함수를 만들었습니다.  
 위의 map()함수 때의 경험을 살려 {load && } 조건을 넣어 이미지가 로드 된 후 컴포넌트가 로드되도록 구현했습니다.
```
//이미지 로드 상태 변경 함수
  const onLoad = () => {
    setLoad(true);
  };

{load && (
      <div className="feed-head">
        <div className="feed-profile">
          <FiUser className="img-usr" />
          <p>chaengss</p>
        </div>
        <FiMoreHorizontal className="btn-opt" />
      </div>
    )}
    <div className="feed-img">
      <img src={data.img} onLoad={onLoad}></img>
    </div>
```
----
## 📌 과제 완료도 (100%)

### **Assignment 1 - `Login`**

- ~~로그인 컴포넌트를 개발합니다. (최소화 - `input` 2개, `button` 1개)~~
- ~~약간의 랜더링 최적화를 고려해주세요. (Hint: Ref 사용)~~
- ~~로그인 시(ID, PW 입력 후 버튼 클릭)~~
    - ~~Local Storage 에 로그인 정보 저장 (다시 접속했을 경우에 정보가 유지 되어야 합니다.)~~
    - ~~메인 페이지로 이동합니다.(로그인이 완료되면)~~
    - ~~반응형 CSS 적용은 하지 않으셔도 좋습니다. 해당 페이지는 반응형 CSS를 평가하지 않습니다.~~

### **Assignment2 - `GNB`**

- ~~로그인 후 이동하는 메인페이지의 GNB를 구현해주세요.~~
- ~~구현 시 스크롤에 관계 없이 화면 상단에 고정되는 `sticky` GNB 를 구현해주세요.~~
- ~~모바일 사이즈의 경우 가운데 Input 창이 사라져야 하고 양옆으로(space-between) 정렬 되어야 합니다.~~
- ~~가장 오른쪽 아이콘을 Logout으로 변경해주세요.~~
- ~~그 외 기능은 평가하지 않습니다.~~
    - ~~(가운데 검색바는 `input` 요소로만 만들어주세요. 기능은 X)~~
    - ~~(아이콘은 자유롭게 사용하셔도 괜찮습니다. 아이콘 라이브러리 설치 O)~~

### **Assignment3 - `Validation`**

- ~~이메일과 비밀번호의 유효성을 확인합니다.~~
    - ~~이메일 조건 - `@` , `.` 포함~~
    - ~~비밀번호 조건 - 대문자, 숫자, 특수문자 포함 8자리 이상~~
    - ~~로그인 시 이메일과 비밀번호가 등록되어 있는 것과 일치 여부 확인~~
- ~~Validation 상태를 CSS로 표현해주세요.~~
    - ~~Email Input Validation Check를 통해 Email 형식이 아닌 경우 표시를해주세요. (ex. boder가 red색상으로 변경)~~
    - ~~Password Input Validation Check를 통해 Password 형식이 아닌 경우 표시를 해주세요. (ex. boder가 red색상으로 변경.)~~
    - ~~Login Button Validation Check가 모두 통과된 경우에만 Button 색상을 진하게 변경해주세요. (통과 되지 못한 경우와 구별이 가능해야 합니다.)~~
- ~~유효성 검사 시 아래 두 가지를 적용해서 구현해주세요.~~
    - ~~정규표현식 사용~~
    - ~~Validation 함수 분리~~

### **Assignment4 - `Routing`**

- ~~로그인,로그아웃 시 라우팅 로직을 통해 페이지가 이동 되도록 구현해주세요. (Local Storage)~~
- ~~로그인이 완료되면 라우터에서 Main Page로 이동되어야 합니다. (history push 사용 X)~~
- ~~로그아웃되면 (Local Storage가 삭제되면) Login Page로 이동되어야 합니다.(history push 사용 X)~~

### **Assignment5 - `Feeds`**

- ~~피드 컴포넌트를 개발합니다.~~
- ~~레이아웃을 인스타그램과 동일하게 구현해주시면 됩니다. (픽셀 단위까지 맞추실 필요는 없으나 보기에 자연스럽도록 개발해주세요.)~~
- ~~각 Feed의 정보는 public/data 디렉토리에 json형식으로 구성하여 fetch, axios 등을 이용하여 data를 요청해야 합니다.~~
- ~~Feed는 최소 3개이상 랜더링 되도록 구현해주세요.~~
- ~~각각의 Feed에 댓글을 추가할 수 있도록 개발해주세요. (Enter key & 클릭으로 게시 가능하도록)~~
- ~~Feed는 화면 중앙에 위치 해야하며 모바일 대응이 가능해야 합니다.~~
- ~~게시 후 Input은 초기화 되어야 합니다.~~
- ~~Feed의 이미지는 자유롭게 사용하시되 각각 사이즈가 각각 달라야 합니다. (ex. 정사각형, 세로가 긴 것, 가로가 긴 것 등)~~
- ~~Feed Image는 자유롭게 사용하셔도 되지만 필요하시면 아래의 url을 사용하세요.(사이즈를 변경하셔도 됩니다. 같은 사이즈 X) "[https://source.unsplash.com/random/600x500](https://source.unsplash.com/random/600x500)" "[https://source.unsplash.com/random/900x500](https://source.unsplash.com/random/900x500)" "[https://source.unsplash.com/random/700x1080](https://source.unsplash.com/random/700x1080)"~~
- ~~Feeds의 Image가 로딩된 후 컴포넌트가 로딩 되도록 Loading을 구현해 주세요 (로딩바는 없어도 괜찮습니다. Hint: image.onload)~~
    - ~~(아이콘은 자유롭게 사용하셔도 괜찮습니다. icon 라이브러리 설치 O)~~
    - ~~메인 Page 전체에 반응형 CSS가 적용 되어있는지 평가합니다. (Media Query 사용)~~
