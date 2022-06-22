import styled from 'styled-components';

const Wrapper = styled.div`
  height: 60px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.gnb.padding};
  max-width: ${({ theme }) => theme.gnb.width};
`;

export default Wrapper;
