import { useContext } from 'react';

import { GNB } from 'components';
import LoginContext from 'context/context';
import { Navigate } from 'react-router-dom';

const Main = () => {
  const { loginData } = useContext(LoginContext);

  return (loginData && <GNB />) || <Navigate to="/" replace={true} />;
};

export default Main;
