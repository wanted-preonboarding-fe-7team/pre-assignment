import styled from 'styled-components';

const Div = styled.div`
  width: ${({ size }) => size.width};
  height: ${({ size }) => size.height};
  border-radius: 50%;
  overflow: hidden;
`;

export default Div;
