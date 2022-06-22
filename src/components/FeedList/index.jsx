import React from 'react';
import Feed from '../Feed';
import { Ul } from './style';

const FeedList = ({ feeds, addComment }) => {
  return (
    <Ul>
      {Object.keys(feeds).map((feedId) => (
        <Feed
          key={feedId}
          feed={feeds[feedId]}
          feedId={feedId}
          addComment={addComment}
        />
      ))}
    </Ul>
  );
};

export default FeedList;
