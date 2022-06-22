import { useContext, useEffect } from 'react';

import LoginContext from 'context/context';
import { Navigate } from 'react-router-dom';
// import { useEffect } from 'react';

const Test = () => {
  const { loginData } = useContext(LoginContext);

  return (
    (loginData && <div>테스트 페이지</div>) || (
      <Navigate to="/" replace={true} />
    )
  );
};

export default Test;
