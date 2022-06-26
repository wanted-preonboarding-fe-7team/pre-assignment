import styled, { css } from 'styled-components';

const FeedsWrapper = styled.main`
  width: ${({ theme: { feeds } }) => feeds.width};
  margin: ${({ theme: { feeds } }) => feeds.margin} auto;

  > :not(:last-child) {
    margin-bottom: ${({ theme: { feeds } }) => feeds.margin};
  }
`;

export default FeedsWrapper;
