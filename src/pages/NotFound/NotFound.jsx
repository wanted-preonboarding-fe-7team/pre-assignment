import { Icon } from 'components/common';
import { Link } from 'react-router-dom';
import theme from 'styles/theme';

import NotFoundWrapper from './NotFound.style';

const NotFound = () => {
  return (
    <NotFoundWrapper className="flex flex-center">
      <span className="message">올바르지 않은 경로로 접속하셨습니다. 😫</span>

      <Link to="/">
        <p className="home-link flex-center flex">
          <Icon icon="home" fill={theme.color.white} />
          <span>첫 페이지로 돌아가기</span>
        </p>
      </Link>
    </NotFoundWrapper>
  );
};

export default NotFound;
