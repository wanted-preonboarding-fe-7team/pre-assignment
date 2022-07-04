import { useContext } from 'react';

import { Icon } from 'components/common';
import { LoginContext } from 'context/context';
import { Link } from 'react-router-dom';

import ButtonAreaWrapper from './ButtonArea.styled';

const ButtonArea = () => {
  const { setLoginData } = useContext(LoginContext);

  const handleClickLogout = () => {
    setLoginData(null);
  };

  return (
    <ButtonAreaWrapper>
      <Link to="/">
        <Icon icon="home" />
      </Link>
      <Link to="/">
        <Icon icon="message" />
      </Link>
      <Link to="/">
        <Icon icon="add" />
      </Link>
      <Link to="/">
        <Icon icon="compass" />
      </Link>
      <Link to="/">
        <Icon icon="heart" />
      </Link>
      <Link to="/" onClick={handleClickLogout} title="로그아웃">
        <Icon icon="logout" />
      </Link>
    </ButtonAreaWrapper>
  );
};

export default ButtonArea;
