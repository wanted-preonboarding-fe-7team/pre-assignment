import styled from 'styled-components';

const Wrapper = styled.p`
  padding: ${({ theme: { feed } }) => feed.whitespace};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
`;

export default Wrapper;
