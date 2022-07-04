import styled from 'styled-components';
import { flexCenterStyle } from 'styles/commonStyles';

const FeedHeaderWrapper = styled.div`
  height: 50px;
  display: flex;
  font-size: 14px;
  padding: ${({ theme: { feed } }) => feed.whitespace};
  margin-bottom: ${({ theme: { feed } }) => feed.whitespace};
  justify-content: space-between;
`;

const FeedInfoArea = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  gap: 10px;
`;

const UserInfo = styled.p`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Buttons = styled.div`
  ${flexCenterStyle};
  height: 100%;
  align-items: center;
  gap: 10px;
  padding: ${({ theme: { feed } }) => feed.whitespace};
`;

export { FeedHeaderWrapper, FeedInfoArea, UserInfo, Buttons };
