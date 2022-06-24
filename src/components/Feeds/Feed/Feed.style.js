import styled, { css } from 'styled-components';
import { flexCenterStyle } from 'styles/commonStyles';

const FeedWrapper = styled.article`
  border: ${({ theme: { border } }) => border.linear};
  border-radius: ${({ theme: { border } }) => border.radius.feed};
  padding: ${({ theme: { feed } }) => feed.padding} 0;
  overflow: hidden;
`;

const FeedHeader = styled.div`
  height: 50px;
  display: flex;
  font-size: 14px;
  padding: ${({ theme: { feed } }) => feed.padding};
  justify-content: space-between;
`;

const feedItemStyle = css`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 10px;
`;

const FeedItem = styled.div`
  ${feedItemStyle};
`;

const FeedIconItem = styled.div`
  ${feedItemStyle};
  ${flexCenterStyle};
  padding: ${({ theme: { feed } }) => feed.padding};
`;

const UserInfo = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const UserMail = styled.p`
  font-weight: 700;
`;

const UserDesc = styled.p`
  color: ${({ theme: { color } }) => color.gray4};
`;

const FeedImageArea = styled.div`
  ${flexCenterStyle};
  width: ${({ theme: { feed } }) => feed.width};
  max-height: ${({ theme: { feed } }) => feed.width};
  overflow: hidden;
  background-color: ${({ theme: { color } }) => color.white};
`;

export {
  FeedWrapper,
  FeedHeader,
  FeedImageArea,
  FeedItem,
  FeedIconItem,
  UserInfo,
  UserMail,
  UserDesc,
};
