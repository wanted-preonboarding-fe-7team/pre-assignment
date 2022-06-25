import theme from 'styles/theme';

import { FeedWrapper, FeedImageArea } from './Feed.styled';
import FeedButtonsArea from './FeedItem/ButtonsArea';
import CommentsList from './FeedItem/CommentsList';
import FeedHeader from './FeedItem/Header';
import LikedArea from './FeedItem/LikedArea';
import WriteCommentArea from './FeedItem/WriteCommentArea';

const Feed = ({ data: { imgUrl, writer }, liked: { count }, comments }) => {
  return (
    <FeedWrapper>
      <FeedHeader userId={writer} />
      <FeedImageArea>
        <img src={imgUrl} width={theme.feed.width} />
      </FeedImageArea>
      <FeedButtonsArea />
      <LikedArea likeCount={count} />
      <CommentsList data={comments} />
      <WriteCommentArea />
    </FeedWrapper>
  );
};

export default Feed;
