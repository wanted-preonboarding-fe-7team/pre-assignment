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

const Buttons = styled.div`
  ${flexCenterStyle};
  height: 100%;
  align-items: center;
  gap: 10px;
  padding: ${({ theme: { feed } }) => feed.whitespace};
`;

export {
  FeedHeaderWrapper,
  FeedInfoArea,
  UserInfo,
  UserMail,
  UserDesc,
  Buttons,
};
