import styled, { css } from 'styled-components';

const FeedsWrapper = styled.div`
  width: ${({ theme: { feeds } }) => feeds.width};
  margin: ${({ theme: { feeds } }) => feeds.margin} auto;

  ${({ imagesOnLoad }) =>
    !imagesOnLoad &&
    css`
      height: 100%;
      overflow: hidden;
    `};

  > :not(:last-child) {
    margin-bottom: ${({ theme: { feeds } }) => feeds.margin};
  }
`;

export default FeedsWrapper;
