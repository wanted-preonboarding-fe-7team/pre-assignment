import styled from 'styled-components';
import { flexCenterStyle } from 'styles/commonStyles';

const FeedWrapper = styled.article`
  border: ${({ theme: { border } }) => border.linear};
  border-radius: ${({ theme: { border } }) => border.radius.feed};
  padding: ${({ theme: { feed } }) => feed.whitespace} 0;
  overflow: hidden;
`;

const FeedImageArea = styled.div`
  ${flexCenterStyle};
  max-height: ${({ theme: { feed } }) => feed.height};
  overflow: hidden;
  background-color: ${({ theme: { color } }) => color.white};

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
  }
`;

export { FeedWrapper, FeedImageArea };
