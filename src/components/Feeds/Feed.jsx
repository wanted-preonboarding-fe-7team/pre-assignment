import { Icon } from 'components/common';

import Avatar from './Avatar';
import FeedWrapper from './Feed.style';

const Feed = ({ userId }) => {
  return (
    <FeedWrapper>
      <div className="feed-header flex">
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
      </div>
    </FeedWrapper>
  );
};

export default Feed;
