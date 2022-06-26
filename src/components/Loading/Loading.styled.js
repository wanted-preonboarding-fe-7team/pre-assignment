import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

const LoadingSpinner = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 10px solid ${({ theme: { color } }) => color.white};
  border-top-color: ${({ theme: { color } }) => color.gray3};
  animation: ${rotate} 1s linear infinite;
`;

export { Wrapper, LoadingSpinner };
