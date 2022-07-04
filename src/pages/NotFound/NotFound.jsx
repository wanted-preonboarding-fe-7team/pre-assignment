import { Icon } from 'components/common';
import theme from 'styles/theme';

import { NotFoundWrapper, HomeLink, Message } from './NotFound.style';

const NotFound = () => {
  return (
    <NotFoundWrapper className="flex flex-center">
      <Message>올바르지 않은 경로로 접속하셨습니다. 😫</Message>

      <HomeLink to="/">
        <Icon icon="home" fill={theme.color.white} />
        <span>첫 페이지로 돌아가기</span>
      </HomeLink>
    </NotFoundWrapper>
  );
};

export default NotFound;
