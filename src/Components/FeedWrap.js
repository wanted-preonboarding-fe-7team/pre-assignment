import React from 'react';
import Feed from './Feed';

const FeedWrap = ({ data }) => {
  return <>{data && data.map((it, idx) => <Feed key={idx} data={it} />)};</>;
};

export default FeedWrap;
