import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { color } }) => color.gray1};
  height: 100vh;
`;

const LoginArea = styled.div`
  border: 1px solid #fafafa;
  width: ${({ theme }) => theme.login.width};
  height: ${({ theme }) => theme.login.height};
  background-color: ${({ theme: { color } }) => color.white};
  border: 1px solid ${({ theme: { color } }) => color.gray2};
  padding: 3rem;
`;

export { Wrapper, LoginArea };
