import styled from 'styled-components';
import { flexCenterStyle } from 'styles/commonStyles';

const FeedWrapper = styled.article`
  border: ${({ theme: { border } }) => border.linear};
  border-radius: ${({ theme: { border } }) => border.radius.feed};
  padding: ${({ theme: { feed } }) => feed.padding} 0;
  overflow: hidden;
`;

const FeedImageArea = styled.div`
  ${flexCenterStyle};
  width: ${({ theme: { feed } }) => feed.width};
  max-height: ${({ theme: { feed } }) => feed.width};
  overflow: hidden;
  background-color: ${({ theme: { color } }) => color.white};
`;

export { FeedWrapper, FeedImageArea };
