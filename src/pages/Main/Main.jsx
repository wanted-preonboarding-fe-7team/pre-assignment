import { useContext } from 'react';

import { GNB } from 'components';
import { LoginContext } from 'context/context';
import { Navigate } from 'react-router-dom';

import MainWrapper from './Main.style';

const Main = () => {
  const { loginData } = useContext(LoginContext);

  return (
    (loginData && (
      <MainWrapper>
        <GNB />
        <div className="test">가나다라</div>
      </MainWrapper>
    )) || <Navigate to="/" replace={true} />
  );
};

export default Main;
