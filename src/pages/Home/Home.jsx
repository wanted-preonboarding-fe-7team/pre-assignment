import { useContext } from 'react';

import { LoginContext } from 'context/context';
import { Login, Main } from 'pages';

const Home = () => {
  const { loginData } = useContext(LoginContext);

  return (loginData && <Main />) || <Login />;
};

export default Home;
