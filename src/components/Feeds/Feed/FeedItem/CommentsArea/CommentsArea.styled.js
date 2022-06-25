import styled from 'styled-components';

const Wrapper = styled.ul`
  padding: ${({ theme: { feed } }) => feed.whitespace};
`;

export default Wrapper;
