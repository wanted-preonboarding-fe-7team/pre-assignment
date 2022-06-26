import { useCallback, useState } from 'react';

import Loading from 'components/Loading';
import theme from 'styles/theme';

import { FeedWrapper, FeedImageArea } from './Feed.styled';
import FeedButtonsArea from './FeedItem/ButtonsArea';
import CommentsArea from './FeedItem/CommentsArea';
import FeedHeader from './FeedItem/Header';
import LikedArea from './FeedItem/LikedArea';

const Feed = ({ data: { imgUrl, writer }, liked: { count }, comments }) => {
  const [loaded, setLoaded] = useState(false);

  const handleOnLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <FeedWrapper>
        {!loaded && <Loading />}
        <FeedHeader userId={writer} />
        <FeedImageArea>
          <img src={imgUrl} width={theme.feed.width} onLoad={handleOnLoad} />
        </FeedImageArea>
        <FeedButtonsArea />
        <LikedArea likeCount={count} />
        <CommentsArea data={comments} />
      </FeedWrapper>
    </>
  );
};

export default Feed;
