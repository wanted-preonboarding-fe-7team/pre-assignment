import { useEffect, useState } from 'react';

import Loading from 'components/Loading';
import getFeedData from 'service/feedApi';

import Feed from './Feed';
import FeedsWrapper from './Feeds.styled';

function after(times, func) {
  return function () {
    if (--times < 1) {
      return func.apply(this, arguments);
    }
  };
}

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
    <FeedsWrapper imagesOnLoad={imagesOnLoad}>
      {(feedData && (
        <>
          {!imagesOnLoad && <Loading />}
          {feedData.feedItems.map(({ id, ...data }) => {
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
          })}
        </>
      )) || <p>등록된 게시물이 없습니다.</p>}
    </FeedsWrapper>
  );
};

export default Feeds;
