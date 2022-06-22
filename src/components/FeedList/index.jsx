import React from 'react';
import Feed from '../Feed';
import { Ul } from './style';

const FeedList = ({ feeds }) => {
  return (
    <Ul>
      {feeds.map((feed) => (
        <Feed key={feed.id} feed={feed} />
      ))}
    </Ul>
  );
};

export default FeedList;
