import styled from 'styled-components';

const Wrapper = styled.p`
  padding: ${({ theme: { feed } }) => feed.padding};
  font-weight: 600;
`;

export default Wrapper;
