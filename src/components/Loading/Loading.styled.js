import styled, { keyframes } from 'styled-components';
import { flexCenterStyle } from 'styles/commonStyles';

const Wrapper = styled.div`
  background: ${({ theme: { color } }) => color.white};
  /* height: 100%; */
  /* width: 100%; */
  /* height: 100vh; */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  ${flexCenterStyle};
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
  /* position: sticky;
  left: 50%; */
  /* top: calc(50% - ${({ theme: { gnb } }) => gnb.height}); */
  /* top: 50%; */
  border-radius: 50%;
  border: 10px solid ${({ theme: { color } }) => color.gray2};
  border-top-color: ${({ theme: { color } }) => color.blue2};
  animation: ${rotate} 1s linear infinite;
`;

export { Wrapper, LoadingSpinner };
