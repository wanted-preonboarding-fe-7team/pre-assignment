import { useEffect, useState } from 'react';

import getFeedData from 'service/feedApi';

import Feed from './Feed';
import FeedsWrapper from './Feeds.styled';

const Feeds = () => {
  const [feedData, setFeedData] = useState(null);

  const fetchFeedData = async () => {
    const fetchedFeedData = await getFeedData();
    setFeedData(fetchedFeedData);
  };

  useEffect(() => {
    fetchFeedData();
  }, []);

  return (
    <FeedsWrapper>
      {(feedData &&
        feedData.feedItems.map(({ id, ...data }) => {
          const [currentFeedLiked] = feedData.liked.filter(
            (data) => data.id === id
          );
          const [currentFeedComments] = feedData.comments.filter(
            (data) => data.id === id
          );

          return (
            <Feed
              key={id}
              data={data}
              liked={currentFeedLiked}
              comments={currentFeedComments}
            />
          );
        })) || <p>등록된 게시물이 없습니다.</p>}
    </FeedsWrapper>
  );
};

export default Feeds;
