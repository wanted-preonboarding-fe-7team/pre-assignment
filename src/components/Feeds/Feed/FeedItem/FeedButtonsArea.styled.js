import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme: { feed } }) => feed.whitespace};
  margin-top: ${({ theme: { feed } }) => feed.whitespace};
`;

const Buttons = styled.div`
  > :not(:last-child) {
    margin-right: 1rem;
  }
`;

export { Wrapper, Buttons };
