import LOCAL_STORAGE_KEY_NAME from 'constants';

import { useContext } from 'react';

import { Icon } from 'components/common';
import { LoginContext } from 'context/context';
import { Link } from 'react-router-dom';
import storageUtils from 'utils/storage';

import ButtonAreaWrapper from './ButtonArea.styled';

const { removeFromLocalStorage } = storageUtils;

const removeLoginDataFromLocalStorage = () =>
  removeFromLocalStorage(LOCAL_STORAGE_KEY_NAME);

const ButtonArea = () => {
  const { setIsLoggedIn } = useContext(LoginContext);

  const handleClickLogout = () => {
    removeLoginDataFromLocalStorage();
    setIsLoggedIn(null);
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
