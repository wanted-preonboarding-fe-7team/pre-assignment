import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  padding: ${({ theme: { feed } }) => feed.whitespace} 0;
`;

const Comments = styled.ol`
  ${({ theme: { feed } }) =>
    css`
      margin-bottom: calc(${feed.whitespace} * 2);
    `};

  padding: 0 ${({ theme: { feed } }) => feed.whitespace};
`;

export { Wrapper, Comments };
