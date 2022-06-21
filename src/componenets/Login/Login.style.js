import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { color } }) => color.gray1};
  height: 100vh;

  .login-area {
    width: ${({ theme }) => theme.login.width};
    height: ${({ theme }) => theme.login.height};
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    background-color: ${({ theme: { color } }) => color.white};
    border: 1px solid ${({ theme: { color } }) => color.gray2};
    padding: 3rem;
  }

  .login-input-area {
    > :not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

const ButtonLink = styled(Link)`
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: ${({ theme: { color } }) => color.white};
  font-weight: 700;
  background-color: ${({ theme: { color }, disabled }) =>
    disabled ? color.blue1 : color.blue2};
  border-radius: ${({ theme: { border } }) => border.radius.login};
`;

export { Wrapper, ButtonLink };
