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

export default Wrapper;
