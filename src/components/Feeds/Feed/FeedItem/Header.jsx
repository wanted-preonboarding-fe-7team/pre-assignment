import { Icon } from 'components/common';

import Avatar from './Avatar';
import {
  Buttons,
  FeedHeaderWrapper,
  FeedInfoArea,
  UserDesc,
  UserInfo,
  UserMail,
} from './Header.styled';

const FeedHeader = ({ userId }) => {
  return (
    <FeedHeaderWrapper>
      <FeedInfoArea>
        <Avatar userEmail={userId} />
        <UserInfo>
          <UserMail>{userId}</UserMail>
          <UserDesc>유저 설명</UserDesc>
        </UserInfo>
      </FeedInfoArea>
      <Buttons>
        <Icon icon="dots" />
      </Buttons>
    </FeedHeaderWrapper>
  );
};

export default FeedHeader;
