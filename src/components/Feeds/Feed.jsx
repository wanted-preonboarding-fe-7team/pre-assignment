import { Icon } from 'components/common';
import theme from 'styles/theme';

import Avatar from './Avatar';
import { FeedWrapper, FeedHeader, FeedImageArea } from './Feed.style';

const Feed = ({ userId }) => {
  return (
    <FeedWrapper>
      <FeedHeader className="feed-header flex">
        <div className="feed-item flex">
          <Avatar userEmail={userId} />
          <div className="user-info flex">
            <p className="user-mail">{userId}</p>
            <p className="user-desc">유저 설명</p>
          </div>
        </div>
        <div className="feed-item flex flex-center icon">
          <Icon icon="dots" />
        </div>
      </FeedHeader>
      <FeedImageArea className="flex flex-center">
        <img
          src="https://source.unsplash.com/random/700x1080"
          width={theme.feed.width}
        />
      </FeedImageArea>
    </FeedWrapper>
  );
};

export default Feed;
