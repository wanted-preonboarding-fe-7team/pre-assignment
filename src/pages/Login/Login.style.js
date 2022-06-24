import styled from 'styled-components';
import { flexCenterStyle } from 'styles/commonStyles';

const Wrapper = styled.div`
  ${flexCenterStyle};
  background-color: ${({ theme: { color } }) => color.gray1};
  height: 100vh;
`;

const LoginArea = styled.div`
  width: ${({ theme }) => theme.login.width};
  height: ${({ theme }) => theme.login.height};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  background-color: ${({ theme: { color } }) => color.white};
  border: 1px solid ${({ theme: { color } }) => color.gray2};
  padding: 3rem;
`;

const LoginInputArea = styled.div`
  > :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const ButtonLink = styled.button`
  width: 100%;
  height: 40px;
  color: ${({ theme: { color } }) => color.white};
  font-size: 1rem;
  font-weight: 700;
  background-color: ${({ theme: { color } }) => color.blue2};
  border-radius: ${({ theme: { border } }) => border.radius.login};

  &:disabled {
    background-color: ${({ theme: { color } }) => color.blue1};
    cursor: default;
  }
`;

export { Wrapper, ButtonLink, LoginArea, LoginInputArea };
