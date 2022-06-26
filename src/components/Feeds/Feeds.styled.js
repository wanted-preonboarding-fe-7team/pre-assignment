import styled, { css } from 'styled-components';

const FeedsWrapper = styled.main`
  max-width: ${({ theme: { feeds } }) => feeds.width};
  margin: ${({ theme: { feeds } }) => feeds.margin} auto;

  > :not(:last-child) {
    margin-bottom: ${({ theme: { feeds } }) => feeds.margin};
  }

  @media screen and (max-width: 470px) {
    max-width: 470px;
  }
`;

export default FeedsWrapper;
