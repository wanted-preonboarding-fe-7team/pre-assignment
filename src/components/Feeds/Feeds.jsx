import LOCAL_STORAGE_KEY_NAME from 'constants';

import storageUtils from 'utils/storage';

import Feed from './Feed';
import FeedsWrapper from './Feeds.style';

const { getLocalStorage } = storageUtils;

const Feeds = () => {
  const { id } = getLocalStorage(LOCAL_STORAGE_KEY_NAME);

  return (
    <FeedsWrapper>
      <Feed userId={id} />
    </FeedsWrapper>
  );
};

export default Feeds;
