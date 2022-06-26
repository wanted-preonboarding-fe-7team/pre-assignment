import theme from 'styles/theme';

import { FeedWrapper, FeedImageArea } from './Feed.styled';
import FeedButtonsArea from './FeedItem/ButtonsArea';
import CommentsArea from './FeedItem/CommentsArea';
import FeedHeader from './FeedItem/Header';
import LikedArea from './FeedItem/LikedArea';

const Feed = ({
  data: { imgUrl, writer },
  liked: { count },
  comments,
  onLoad: handleOnLoad,
}) => {
  return (
    <FeedWrapper>
      <FeedHeader userId={writer} />
      <FeedImageArea>
        <img src={imgUrl} width={theme.feed.width} onLoad={handleOnLoad} />
      </FeedImageArea>
      <FeedButtonsArea />
      <LikedArea likeCount={count} />
      <CommentsArea data={comments} />
    </FeedWrapper>
  );
};

export default Feed;
