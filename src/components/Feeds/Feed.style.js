import styled from 'styled-components';

const FeedWrapper = styled.article`
  border: ${({ theme: { border } }) => border.linear};
  border-radius: ${({ theme: { border } }) => border.radius.feed};
  padding: ${({ theme: { feed } }) => feed.padding} 0;
  height: ${({ theme: { feed } }) => feed.height};

  .feed-header {
    height: 50px;
    font-size: 14px;
    padding: ${({ theme: { feed } }) => feed.padding};
    justify-content: space-between;
  }

  .feed-item {
    height: 100%;
    align-items: center;
    gap: 10px;

    &.icon {
      padding: ${({ theme: { feed } }) => feed.padding};
    }
  }

  .user-info {
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
  }
  .user-mail {
    font-weight: 700;
  }

  .user-desc {
    color: ${({ theme: { color } }) => color.gray4};
  }
`;

export default FeedWrapper;
