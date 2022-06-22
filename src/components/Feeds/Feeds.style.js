import styled from 'styled-components';

const FeedsWrapper = styled.div`
  width: ${({ theme: { feeds } }) => feeds.width};
  margin: ${({ theme: { feeds } }) => feeds.margin} auto;

  > :not(:last-child) {
    margin-bottom: ${({ theme: { feeds } }) => feeds.margin};
  }
`;

export default FeedsWrapper;
