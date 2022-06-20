import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  & > div {
    margin-top: 2.5rem;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const LoginContainer = styled.section`
  padding: 0 1.7rem;
  display: flex;
  flex-direction: column;
  height: 400px;
  min-width: 350px;
  max-width: 350px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 3px;
`;

export const Header = styled.header`
  padding-top: 2.5rem;
  text-align: center;

  & > h3 {
    padding: 2.3rem 0;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Logo = styled.img`
  width: 175px;
`;

export const LoginForm = styled.form`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 12px;
  padding: 12px;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.small};
  background-color: ${({ theme }) => theme.colors.lightgray};
  border: 1px solid
    ${(props) =>
      props.isChecked ? props.theme.colors.gray : props.theme.colors.red};
  border-radius: 3px;
`;

export const Button = styled.button`
  padding: 12px;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 600;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  opacity: ${(props) => (props.isValid ? 1 : 0.5)};
  border-radius: 3px;
`;
