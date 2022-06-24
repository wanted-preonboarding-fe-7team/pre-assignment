import theme from 'styles/theme';

import { FeedWrapper, FeedImageArea } from './Feed.style';
import FeedButtonsArea from './FeedButtonsArea';
import FeedHeader from './FeedHeader';

const Feed = ({ userId }) => {
  return (
    <FeedWrapper>
      <FeedHeader userId={userId} />
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
