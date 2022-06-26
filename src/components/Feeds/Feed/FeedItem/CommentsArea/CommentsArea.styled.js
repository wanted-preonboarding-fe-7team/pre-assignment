import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  padding: ${({ theme: { feed } }) => feed.whitespace};
`;

const Comments = styled.ol`
  ${({ theme: { feed } }) =>
    css`
      margin-bottom: calc(${feed.whitespace} * 2);
    `};
`;

export { Wrapper, Comments };
