import { Icon } from 'components/common';
import theme from 'styles/theme';

import Avatar from './Avatar';
import {
  FeedWrapper,
  FeedHeader,
  FeedImageArea,
  FeedItem,
  FeedIconItem,
  UserInfo,
  UserMail,
  UserDesc,
} from './Feed.style';
import FeedButtonsArea from './FeedButtonsArea';

const Feed = ({ userId }) => {
  return (
    <FeedWrapper>
      <FeedHeader>
        <FeedItem>
          <Avatar userEmail={userId} />
          <UserInfo>
            <UserMail>{userId}</UserMail>
            <UserDesc>유저 설명</UserDesc>
          </UserInfo>
        </FeedItem>
        <FeedIconItem>
          <Icon icon="dots" />
        </FeedIconItem>
      </FeedHeader>
      <FeedImageArea>
        <img
          src="https://source.unsplash.com/random/300x1500"
          width={theme.feed.width}
        />
      </FeedImageArea>
      <FeedButtonsArea />
    </FeedWrapper>
  );
};

export default Feed;
