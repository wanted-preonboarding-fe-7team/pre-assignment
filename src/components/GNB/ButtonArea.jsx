import { Icon } from 'components/common';
import { Link } from 'react-router-dom';

import ButtonAreaWrapper from './ButtonArea.styled';

const ButtonArea = () => {
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
      <Link to="/">
        <Icon icon="logout" />
      </Link>
    </ButtonAreaWrapper>
  );
};

export default ButtonArea;
