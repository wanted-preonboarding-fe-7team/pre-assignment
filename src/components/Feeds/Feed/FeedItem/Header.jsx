import { Icon } from 'components/common';

import Avatar from './Avatar';
import {
  Buttons,
  FeedHeaderWrapper,
  FeedInfoArea,
  UserInfo,
} from './Header.styled';

const FeedHeader = ({ userId }) => {
  return (
    <FeedHeaderWrapper>
      <FeedInfoArea>
        <Avatar userId={userId} />
        <UserInfo>{userId}</UserInfo>
      </FeedInfoArea>
      <Buttons>
        <Icon icon="dots" />
      </Buttons>
    </FeedHeaderWrapper>
  );
};

export default FeedHeader;
