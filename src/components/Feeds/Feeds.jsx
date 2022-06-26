import { useEffect, useState } from 'react';

import Loading from 'components/Loading';
import getFeedData from 'service/feedApi';
import { after, isEmpty } from 'utils/utils';

import Feed from './Feed';
import FeedsWrapper from './Feeds.styled';

const Feeds = () => {
  const [feedData, setFeedData] = useState(null);
  const [imagesOnLoad, setImagesOnLoad] = useState(false);

  const fetchFeedData = async () => {
    const fetchedFeedData = await getFeedData();
    setFeedData(fetchedFeedData);
  };

  const handleImagesOnLoad = after(feedData?.feedItems.length, () => {
    setImagesOnLoad(true);
  });

  useEffect(() => {
    fetchFeedData();
  }, []);

  return (
    <FeedsWrapper>
      {(feedData && (
        <>
          {!imagesOnLoad && <Loading />}
          {(!isEmpty(feedData.feedItems) &&
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
                  onLoad={handleImagesOnLoad}
                />
              );
            })) || <p>등록된 게시물이 없습니다.</p>}
        </>
      )) || <Loading />}
    </FeedsWrapper>
  );
};

export default Feeds;
