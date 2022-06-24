import { useContext } from 'react';

import { LoginContext } from 'context/context';
import { Login, Main } from 'pages';

const Home = () => {
  const { isLoggedIn } = useContext(LoginContext);

  return (isLoggedIn && <Main />) || <Login />;
};

export default Home;
