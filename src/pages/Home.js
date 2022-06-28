import React, { useEffect, useState } from 'react';
import FeedWrap from '../Components/FeedWrap';

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/feedData.json`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return <FeedWrap data={data} />;
};

export default Home;
